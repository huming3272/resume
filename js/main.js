/* /setTimeout(function () {
            siteWelcome.classList.remove('active')
        }, 100) */
/*通过修改名字让之前的加载动画失效,并且延时100毫秒后执行*/


let aTags = document.querySelectorAll('nav.menu > ul > li > a')
/*查询所有符合要求的标签*/

function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);
/*请求动画帧率自适应调节*/



for (let i = 0; i < aTags.length; i++) {
    /*遍历aTags*/
    aTags[i].onclick = function (x) {
        x.preventDefault();
        /*阻止默认的功能*/
        let a = x.currentTarget
        let href = a.getAttribute('href')
        /*获取标签处写的原文不写会得到加载http协议后的东西,‘#siteAbout’*/
        let element = document.querySelector(href)
        /*只获取到第一个元素，并非数组*/
        let top = element.offsetTop
        /*获取元素相对于页面顶部的像素距离*/


        let currentTop = window.scrollY //当前滚动条距离顶部高度
        let targetTop = top - 80 /*目标滚动条与顶部距离*/
        let s = targetTop - currentTop
        //s = ((s<0) ? -s : s)
        var t = Math.abs((s / 100) * 300)
        /*算相对距离并且用取绝对值防止负数，根据距离决定速度每100px多花300毫秒*/
        var coords = {
            y: currentTop
        };

        if (t > 500) {
            t = 500
        } /*t是时间，当使用时间大于500毫秒的时候，时间控制在500毫秒内*/

        //tween.js用于初始和结束点的动画补间
        var tween = new TWEEN.Tween(coords) //初始位置
            .to({
                y: targetTop
            }, t) //目标位置和时间
            .easing(TWEEN.Easing.Quartic.InOut) //选择函数类型
            .onUpdate(function () {
                window.scroll(0, coords.y)

            }) //位置变化后执行代码
            .start();
        /*主要控制滚动速度*/
    }

}