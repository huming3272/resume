!function(){
    let specialTags = document.querySelectorAll('[data-x]')
    //添加 offset类
    for (let i = 0; i < specialTags.length; i++) {
        specialTags[i].classList.add('offset')

    }
    findClosestAndRemoveOffset()
    window.onscroll = function (x) {
        if (window.scrollY > 0) {
            topNavBar.classList.add('sticky')
        } else {
            topNavBar.classList.remove('sticky');

        } /*获取窗口滚动的高度*/

        findClosestAndRemoveOffset()

    }

    function findClosestAndRemoveOffset() {

        let specialTags = document.querySelectorAll('[data-x]')
        //显示含有‘data-x’属性的所有值

        let minIndex = 0
        for (let i = 1; i < specialTags.length; i++) {
            if (Math.abs(specialTags[i].offsetTop - window.scrollY) < Math.abs(specialTags[minIndex].offsetTop -
                    window.scrollY)) {
                minIndex = i;
            }

        }
        /*默认第一个元素是最小值，然后两两比较以确定当前滚动条距离
                   标题位置是否和元素所在位置同处一个区域然后可以操作加上类*/

        specialTags[minIndex].classList.remove('offset')
        let id = specialTags[minIndex].id //得到数组中对应元素的id

        let a = document.querySelector('a[href="#' + id + '"]') //给链接加上元素的id名
        // id == 'siteAbout'  'a[href="#siteAbout"]'
        // id == 'siteWorks'  'a[href="#siteWorks"]'
        let li = a.parentNode //获取选择器标签的父元素
        let brothersAndMe = li.parentNode.children
        for (let i = 0; i < brothersAndMe.length; i++) {
            brothersAndMe[i].classList.remove('highlight')
        }
        li.classList.add('highlight')

        //以上都在找元素添加、移除选择器

    }
    let liTags = document.querySelectorAll('nav.menu > ul > li') //获取多个标签从classname
    /*接受一个选择器，返回选择器对应的所有元素*/
    for (let i = 0; i < liTags.length; i++) {
        /*用let不易产生bug,遍历liTags*/

        liTags[i].onmouseenter = function (x) {
            /*鼠标进入一个元素的时候会触发函数*/
            //console.log(x.target)//获取用户鼠标碰到的目标
            //console.log(x.currentTarget)在onmouseenter事件下两者作用相同，但是currentTarget更明确
            x.currentTarget.classList.add('active');

        }
        liTags[i].onmouseleave = function (x) {
            x.currentTarget.classList.remove('active');

        }
    }
}.call()