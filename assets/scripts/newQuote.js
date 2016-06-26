// Created by sam mok 2015(Siso brand interactive team).

"use strict";

var newQuote = {
    scene: $('.scene-newQuote'),

    isInit: false,

    homePage: {
        carSelect: function (scene) {
            resetCarTypeSelect();
            resetCarModelSelect();
            resetCarColorSelect();
            resetCarInnerSelect();

            //  车类选择 select
            scene.find('.car-type-select').on('click', '.item', function (e) {
                var carType = $(this).attr('data-value');
                var carTypeSelect = scene.find('.car-type-select');

                if (carTypeSelect.hasClass(carType)) return;

                //  update select
                scene.find('.car-type-select .select-hd span').text($(this).text());
                scene.find('.car-type-select').attr('data-value', carType);
                carTypeSelect.attr('data-value', carType);

                resetCarModelSelect();
                resetCarColorSelect();
                resetCarInnerSelect();
            });

            //  车型选择 select
            scene.find('.car-model-select').on('click', '.item', function (e) {
                var carType = $(this).attr('data-value');
                var carModelSelect = scene.find('.car-model-select');

                if (carModelSelect.hasClass(carType)) return;
                carModelSelect.attr('data-value', carType);

                resetCarColorSelect();
                resetCarInnerSelect();
            });

            //  车色 select
            scene.find('.car-color-select').on('click', '.item', function (e) {
                var carType = $(this).attr('data-value');
                var carColorSelect = scene.find('.car-color-select');

                if (carColorSelect.hasClass(carType)) return;
                carColorSelect.attr('data-value', carType);
            });

            //  内饰 select
            scene.find('.car-inner-select').on('click', '.item', function (e) {
                var carType = $(this).attr('data-value');
                var carInnerSelect = scene.find('.car-inner-select');

                if (carInnerSelect.hasClass(carType)) return;
                carInnerSelect.attr('data-value', carType);
            });

            function resetCarTypeSelect () {
                var data = DATA.carType;
                scene.find('.car-type-select .select-hd span').text(data['car'].name);
                scene.find('.car-type-select .select-bd .container').empty();

                var dom = '';
                for (var key in data) {
                    if (data.hasOwnProperty(key)) dom += '<div class="item" data-value="' + key + '">' + data[key].name + '</div>'
                }
                scene.find('.car-type-select .select-bd .container').append($(dom));
            }

            function resetDetailsSelect (car, detailsDom, data) {
                scene.find(detailsDom).attr('data-value', car+1);
                scene.find(detailsDom).find('.select-hd span').text(data[0]);
                scene.find(detailsDom).find('.select-bd .container').empty();

                var dom = '';
                data.forEach(function (item, index) {
                    dom += '<div class="item" data-value="' + car + (index+1) + '">' + item + '</div>'
                });
                scene.find(detailsDom).find('.select-bd .container').append($(dom));
            }


            function resetCarModelSelect () {
                var car = scene.find('.car-type-select').attr('data-value');
                var detailsDom = scene.find('.car-model-select');

                resetDetailsSelect(car, detailsDom, DATA.carType[car].models);
            }

            function resetCarColorSelect () {
                var car = scene.find('.car-model-select').attr('data-value');
                var detailsDom = scene.find('.car-color-select');

                resetDetailsSelect(car, detailsDom, DATA.carColor[car]);
            }

            function resetCarInnerSelect () {
                var car = scene.find('.car-model-select').attr('data-value');
                var detailsDom = scene.find('.car-inner-select');

                resetDetailsSelect(car, detailsDom, DATA.carInner[car]);
            }
        }
    },

    insurancePage: {
        chooseBtn: function (scene) {
            scene.find('.btn').click(function () {
                scene.find('.main-item.active').length == 0 ? scene.find('.main-item').eq(0).addClass('active') : '';
                $(this).addClass('active').siblings().removeClass('active');

                //  当前高亮边框所选 保险产品ID
                var id = scene.find('.main-item.active').attr('data-value');
                console.log(id);
            });
        },

        item: function (scene) {
            scene.find('.item-wrap').css({width: scene.find('.main-item').length*398});

            scene.find('.main-item').click(function () {
                scene.find('.btn').removeClass('active');
                $(this).addClass('active').siblings().removeClass('active');
            });
        }
    },

    giftPage: {
        table: function (scene) {
            scene.find('.panel-bd .body').empty();

            DATA.gifts.forEach(function (item) {
                var dom = '<p class="row">';
                dom += '<span class="name">' + (item[0] || '-') + '</span>';
                dom += '<span class="brand">' + (item[1] || '-') + '</span>';
                dom += '<span class="parameter">' + (item[2] || '-') + '</span>';
                dom += '<span class="unitPrice">' + (item[3] || '-') + '</span>';
                dom += '<span class="amount">' + (item[4] || '-') + '</span>';
                dom += '<span class="totalPrice">' + (item[5] || '-') + '</span>';
                dom += '</p>';

                scene.find('.panel-bd .body').append($(dom));
            });
        }
    },

    classicPage: {
        tab: function (scene) {
            scene.find('.car-classic-tab .item').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                scene.find('.panel-bd-item').eq($(this).index()).fadeIn('fast').siblings().hide();
            });
        }
    },

    show: function () {
        var that = this;
        $('.nav').show();
        $('.nav').removeClass($('.nav').attr('class').replace('nav','')).addClass('nav03');
        $('.scene-newQuote').show().addClass('active').siblings('.scene').removeClass('active').hide();

        if (!that.isInit) {
            that.init(function () {
                that.initScale('.newQuote-home');
            });
        } else {
            that.initScale('.newQuote-home');
        }
    },

    initScale: function (dragElement) {
        var scale = getScale(dragElement);
        var angle = 0;

        interact(dragElement)
            .ignoreFrom('.select, .btn, .radio, .checkbox, .car-classic-tab, .newQuote-insurance .wrap, .newQuote-gift .panel-bd .body, #calculator')
            .gesturable({
                onstart: function (event) {
                },
                onmove: function (event) {
                    scale = scale * (1 + event.ds);
                    angle += event.da;

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

        function getScale (elem) {
            return $(elem).css('transform').split('(')[1].split(')')[0].split(',')[0];
        }
    },

    init: function (callback){
        var that = this;
        var scene = that.scene;

        if (that.isInit) {
            if (!confirm('点击确认, 则舍弃当前新建的报价单数据, \n需要保存报价单 请打开保存报价单页面保存')) return;
        }

        $('.scene-newQuote').empty();

        $.get('views/newQuote.html', function (a, b, c) {
            var tasks = $(a);
            Array.prototype.forEach.call(tasks, function (item) {
                $('.scene-newQuote').append(item);
            });
            initTask ();

            //  callback 用来填充数据
            callback && callback(scene);
        });

        function initTask () {
            that.isInit = true;
            that.homePage.carSelect(scene.find('.newQuote-home'));

            that.insurancePage.chooseBtn(scene.find('.newQuote-insurance'));
            that.insurancePage.item(scene.find('.newQuote-insurance'));

            that.giftPage.table(scene.find('.newQuote-gift'));

            that.classicPage.tab(scene.find('.newQuote-classic'));

            //  close btn
            scene.find('.newQuote-home').find('.icon-close').click(function () {
                $('.scene-newQuote').hide().removeClass('active');
                app.show();
            });

            scene.find('.newQuote-home .btn-insurance').click(function () {
                scene.find('.newQuote-insurance').show();
                that.initScale('.newQuote-insurance');
            });

            scene.find('.newQuote-home .btn-classic').click(function () {
                scene.find('.newQuote-classic').show();
                that.initScale('.newQuote-classic');
            });

            scene.find('.newQuote-home .btn-gifts').click(function () {
                scene.find('.newQuote-gift').show();
                that.initScale('.newQuote-gift');
            });

            scene.find('.newQuote-insurance .icon-close, .newQuote-classic .icon-close, .newQuote-gift .icon-close').click(function () {
                $(this).parents('.newQuote-item').hide();
            });

            scene.find('.newQuote-item').on('touchstart', function () {
                $(this).addClass('topFloor').siblings('.newQuote-item').removeClass('topFloor');
            });

            //  init calculator
            $('.night_owl').NightOwl();
        }
    }
};



