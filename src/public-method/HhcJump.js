//跳转到hc第三方登录的逻辑
import config from "@/p.config.js"
import us from "@/service/user.js"

let headurl = config.proxy_url + config.apphead;
let nohc = !process.env.IS_HC
// nohc = false //测试
//headurl = 'http://172.30.207.184:5050/casts'
let hc = {
    getQueryVariable(variable) {
        var query = window.location.hash.substring(1).split("?");
        if (query.length > 2) {
            let queryConnect = [];
            for (let i = 1, l = query.length; i < l; i++) {
                queryConnect.push(query[i])
            }
            query = queryConnect.join("&");
        } else {
            query = query[1];
        }
        if (!query) {
            return false
        }
        query = query.replace("==", "**")
        if (query) {
            var vars = query.split("&");
            for (var i = 0; i < vars.length; i++) {
                var pair = vars[i].split("=");
                let value = pair[1]
                if (pair.length > 2) {//一个等号的情况
                    value = value + "="
                }
                if (pair[0] == variable) {
                    value = value.replace("**", "==");
                    return value
                }
            }
        }

        return (false);
    },
    delParam(url, paramKey) {
        var urlParam = url.split("?");   //页面参数
        if (urlParam.length > 2) {
            let queryConnect = [];
            for (let i = 1, l = urlParam.length; i < l; i++) {
                queryConnect.push(urlParam[i])
            }
            urlParam = queryConnect.join("&");
        } else {
            urlParam = urlParam[1];
        }
        if (!urlParam) {
            return url
        }
        urlParam = urlParam.replace("==", "**")
        var beforeUrl = url.split("?")[0];   //页面主地址（参数之前地址）
        var nextUrl = "";
        var arr = new Array();
        if (urlParam) {
            var urlParamArr = urlParam.split("&"); //将参数按照&符分成数组
            for (var i = 0; i < urlParamArr.length; i++) {
                var paramArr = urlParamArr[i].split("="); //将参数键，值拆开
                //如果键雨要删除的不一致，则加入到参数中
                if (paramArr[0] != paramKey) {
                    arr.push(urlParamArr[i]);
                }
            }
        }
        if (arr.length > 0) {
            nextUrl = "?" + arr.join("&");
        }
        url = beforeUrl + nextUrl;
        url = url.replace("**", "==")
        return url;
    },
    goLogin() {
        let href = window.location.protocol + '//' + window.location.host + '/#/';
        href = hc.delParam(href, "initiateLogin")
        if (href.indexOf("?") != -1) {
            href += "&initiateLogin=1"
        } else {
            href += "?initiateLogin=1"
        }
        href = hc.delParam(href, "token")
        href = hc.delParam(href, "redirect")
        href = encodeURIComponent(href)
        window.location.href = headurl + "/h4asso/?redirect=" + href
    },
    initiateLogin() {
        console.log("initiateLogin", process.env.IS_HC)
        if (nohc) {
            return false
        } else {
            let hash = window.location.hash
            if (hash.indexOf("h4a-error") != -1) {
                return false
            }
            let token = hc.getQueryVariable("token");
            let initiateLogin = hc.getQueryVariable("initiateLogin");
            let isLogin = window.localStorage.RSESSIONIDCOOKIE;
            if (!token && !isLogin && !initiateLogin) {
                let href = window.location.href
                if (href.indexOf("?") != -1) {
                    href += "&initiateLogin=1"
                } else {
                    href += "?initiateLogin=1"
                }
                href = hc.delParam(href, "token")
                href = hc.delParam(href, "redirect")
                href = encodeURIComponent(href)
                window.location.href = headurl + "/h4asso/?redirect=" + href
                return
                //window.location.href = headurl + "/redirectTest"
            }
            if (initiateLogin) {
                return true
            }
        }
    },
    noUserData() {//接口没有数据
        setTimeout(() => {
            let href = window.location.href;
            href = hc.delParam(href, "token")
            href = hc.delParam(href, "redirect")
            let hreftemp = hc.delParam(href, "initiateLogin")
            window.history.replaceState({}, 0, hreftemp);
            window.app.$router.push("/noDataError")
        }, 10)
    },
    checkJump() {//判断url是否带有token，如果是就跳转到后端登录
        return new Promise((resolve, reject) => {
            console.log("checkJump", process.env)
            if (nohc) {
                resolve()
                return
            }
            let token = hc.getQueryVariable("token");
            let initiateLogin = hc.getQueryVariable("initiateLogin");
            if (token && initiateLogin) {
                let hreftemp = hc.delParam(window.location.href, "token")
                hreftemp = hc.delParam(hreftemp, "redirect")
                let jumpurl = headurl + "/h4asso/?token=" + token + "&redirect=" + encodeURIComponent(hreftemp);
                console.log("token", token)
                window.location.href = jumpurl
                resolve()

            }
            let isLogin = window.localStorage.RSESSIONIDCOOKIE;
            if (!isLogin && !token && initiateLogin) {//去登录获取用户信息
                us.getUserMessage().then((loginData) => {
                    let { status } = loginData.data;
                    if (status == 'success') {
                        let href = window.location.href;
                        href = hc.delParam(href, "token")
                        href = hc.delParam(href, "redirect")
                        let hreftemp = hc.delParam(href, "initiateLogin")
                        window.history.replaceState({}, 0, hreftemp);
                        setTimeout(() => {//有待优化
                            let loginName = loginData.data.data.userName;
                            window.app.$store.commit('setLoginState', true);
                            window.app.$store.commit('setLoginName', loginName);
                            window.app.$store.commit('setRoleResult', loginData.data.data);
                        }, 100)
                        resolve()
                    } else {
                        hc.noUserData()
                        resolve()
                    }
                }).catch(() => {
                    hc.noUserData()
                    resolve()
                })
            } else {
                resolve()
            }

        })

    }
};
(function (w) {
    try {
        new MouseEvent('test');
        return false; // No need to polyfill
    } catch (e) {
        // Polyfills DOM4 MouseEvent
        var MouseEventPolyfill = function (eventType, params) {
            params = params || { bubbles: false, cancelable: false };
            var mouseEvent = document.createEvent('MouseEvent');
            mouseEvent.initMouseEvent(eventType,
                params.bubbles,
                params.cancelable,
                w,
                0,
                params.screenX || 0,
                params.screenY || 0,
                params.clientX || 0,
                params.clientY || 0,
                params.ctrlKey || false,
                params.altKey || false,
                params.shiftKey || false,
                params.metaKey || false,
                params.button || 0,
                params.relatedTarget || null
            );

            return mouseEvent;
        }

        MouseEventPolyfill.prototype = Event.prototype;

        w.MouseEvent = MouseEventPolyfill;
    }


})(window);




export default hc