



/***
 * 用法：
 * 1.应用：import pingyin from '@/public-method/pingyin';
 * 
 * 2.调用
pingyin(
    [{ name: '何家伟' }, { name: '张三' }, { name: '李四' }],
    (item) => {
    return item.name;
    }
).then((res) => {
    //你要的值
});

 * 3.返回： [{"key":"H","children":[{"name":"何家伟"}]},{"key":"L","children":[{"name":"李四"}]},{"key":"Z","children":[{"name":"张三"}]}]
 * ***/



export default async function (arr, render = function (name) { return name }) {
    if (!arr) {
        return []
    }
    await import('./pinyin_dict_withtone.js');
    await import('./pinyin_dict_polyphone.js');
    await import('./pinyinUtil.js');
    arr = arr.sort((a, b) => render(a).localeCompare(render(b), 'zh-Hans-CN', { sensitivity: 'accent' }))
    let result = {}
    for (var i = 0, l = arr.length; i < l; i++) {
        let item = arr[i]
        let name = render(item)
        let first = window.pinyinUtil.getFirstLetter(name.substring(0, 1));
        if (!result[first]) {
            result[first] = []
            result[first].push(item)
        } else {
            result[first].push(item)
        }
    }
    let resultArr = []
    for (var key in result) {
        resultArr.push({ key: key, children: result[key] })
    }
    return resultArr
}