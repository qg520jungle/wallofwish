//rem适配，一开始加载
(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            console.log(clientWidth);
            docEl.style.fontSize = clientWidth<850?100 * (clientWidth / 750) + 'px':'100px';
            //css默认body隐藏，加载完适配后展现
            doc.body.style.display="block";
            setTimeout(function() {
                doc.getElementsByTagName("body")[0].style.minHeight = docEl.clientHeight + "px"
            }, 20)
        };
    if (!doc.addEventListener) return;
    //recalc();
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);