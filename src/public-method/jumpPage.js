
function getRealPath(inputpath, menu, next) { //找到真正的首页
    if (inputpath == "/") {
        let isNum = Number.parseInt(menu[0].index) == menu[0].index;
        let path = '/';
        if (isNum) {
            let sindex = menu.subs[0].index;
            if (menu.subs && Number.parseInt(sindex) != sindex) {
                path = '/' + sindex;
            } else {
                path = getRealPath(menu.subs[0])
            }
        } else {
            path = '/' + menu[0].index;
        }
        next(path)
    } else {
        next()
    }
}
export {
    getRealPath
}