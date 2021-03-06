// Created by sam mok 2015(Siso brand interactive team).

"use strict";

var printQuote = {
    scene: $('.scene-printQuote'),

    show: function () {
        var that = this;
        $('.nav').show();
        $('.scene-printQuote').show().siblings('.scene').removeClass('active').hide();
        setTimeout(function () {
            that.scene.addClass('active');
        }, 10);

        //  drag scale rotate
        initScale('.scene-printQuote');

        function initScale (dragElement) {
            var scale = getScale(dragElement);
            var angle = 0;

            interact(dragElement)
                .ignoreFrom('.select, .btn, .radio, .checkbox, .icon-close, .car-classic-tab, .newQuote-insurance .wrap')
                .gesturable({
                    onstart: function (event) {
                    },
                    onmove: function (event) {
                        scale = scale * (1 + event.ds);
                        angle += event.da*0.65;

                        dragMoveListener(event);
                    },
                    onend: function (event) {

                    }
                })
                .draggable({
                    inertia: {
                        resistance: 30,
                        minSpeed: 500,
                        endSpeed: 200
                    },
                    restrict: {
                        restriction: "parent",
                        elementRect: { top: 0, left: 0, bottom: 0, right: 0 }
                    },
                    onmove: dragMoveListener
                });

            function dragMoveListener (event, cb) {
                var target = event.target,
                // keep the dragged position in the data-x/data-y attributes
                    x = (parseFloat(target.getAttribute('data-x')) || 0) + event.dx,
                    y = (parseFloat(target.getAttribute('data-y')) || 0) + event.dy;

                // translate the element
                target.style.webkitTransform =
                    target.style.transform =
                        'translate(' + x + 'px, ' + y + 'px)' +
                        'rotate(' + angle + 'deg)' +
                        'scale(' + scale + ')';

                // update the posiion attributes
                target.setAttribute('data-x', x);
                target.setAttribute('data-y', y);
            }
        }

        function getScale (elem) {
            return $(elem).css('transform').split('(')[1].split(')')[0].split(',')[0];
        }
    },

    init: function (){
        var scene = this.scene;

        //  close btn
        scene.find('.icon-close').click(function () {
            $('.scene-printQuote').hide().removeClass('active');
            app.show();
        });

        //  保存并打印
        scene.find('.btn-print').click(function () {
            //  Ajax 保存当前 新建报价单 内的信息
            //  省略 Ajax...

            //  在 Ajax success 回调函数内标记 新建报价单 是否初始化 为 false
            newQuote && (newQuote.isInit = false);

            var printDivCSS = new String (
                '<link href="assets/stylesheets/components.css" rel="stylesheet" type="text/css">' +
                '<link href="assets/stylesheets/printQuote.css" rel="stylesheet" type="text/css">' +
                '<link href="assets/stylesheets/main.css" rel="stylesheet" type="text/css">'
            );
            function printDiv(elem) {
                window.frames["print_frame"].document.body.innerHTML = printDivCSS + elem.html();
                window.frames["print_frame"].window.focus();
                window.frames["print_frame"].window.print();
            }

            printDiv($('.scene-printQuote .main .body'));
        });

        //  保存
        scene.find('.btn-save').click(function () {
            //  Ajax 保存当前 新建报价单 内的信息
            //  省略 Ajax...

            //  在 Ajax success 回调函数内标记 新建报价单 是否初始化 为 false
            alert('保存成功');
            location.reload();
        });
    }
};



