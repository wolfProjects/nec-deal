// Created by sam mok 2015(Siso brand interactive team).

"use strict";

var carBrosing = {
    scene: $('.scene-carBrowsing'),

    carSelect: function () {
        var CAR_DATA = DATA.carType;
        var scene = carBrosing.scene;

        //  生成 车类选择 select
        scene.find('.car-type-select .select-hd span').text(CAR_DATA['car'].name);
        scene.find('.car-type-select .select-bd .container').empty();

        var dom = '';
        for (var key in CAR_DATA) {
            if (CAR_DATA.hasOwnProperty(key)) dom += '<div class="item" data-value="' + key + '">' + CAR_DATA[key].name + '</div>'
        }
        scene.find('.car-type-select .select-bd .container').append($(dom));

        //  初始化 车型全尺寸图
        scene.find('.car').addClass('car1');

        //  更新 车类选择 select
        scene.find('.car-type-select').on('click', '.item', function (e) {
            var carType = $(this).attr('data-value');
            var carTypeSelect = scene.find('.car-type-select');

            if (carTypeSelect.hasClass(carType)) return;

            //  update select
            scene.find('.car-type-select .select-hd span').text($(this).text());
            scene.find('.car-type-select').attr('data-value', carType);
            carTypeSelect.attr('data-value', carType);

            //  更新 车系剪影
            scene.find('.car-model-tab').removeClass('luxury suv car'.replace(carType, '')).addClass(carType);

            //  重置 车系剪影 active 效果
            scene.find('.car-model-tab .item').removeClass('active');
            scene.find('.car-model-tab .item:first').addClass('active');

            //  更新 车型全尺寸图
            scene.find('.car').removeClass($('.car').attr('class').replace(/car/, '')).addClass(carType + 1);
        });

        //  车型选择 tab
        scene.find('.car-model-tab').on('click', '.item', function (e) {
            e.stopPropagation();
            var carType = scene.find('.car-type-select').attr('data-value');
            $(this).parents('.car-model-tab').attr('data-value', $(this).attr('data-value'));
            $(this).addClass('active').siblings().removeClass('active');

            //  更新 车型全尺寸图
            scene.find('.car').removeClass($('.car').attr('class').replace(/car/, '')).addClass(carType + ($(this).index()+1));
        });
    },

    animationBg: {
        preloadSprites: [],

        mainSprites: [],

        preload: function (cb) {
            var that = this;
            var img = null;
            var total = 35 + 250;
            var count = 0;

            for (var i = 0; i <= 34; i++) {
                img = new Image();
                img.index = i;
                img.onload = function () {
                    that.preloadSprites[this.index] = this;
                    count += 1;
                    checkLoading();
                };
                img.onerror = function () {
                    total -= 1;
                    checkLoading();
                };
                img.src = './assets/images/animation/car-comparison-loading-' + fixedIndex(i) + '.png';
            }

            for (i = 0; i <= 249; i++) {
                img = new Image();
                img.index = i;
                img.onload = function () {
                    that.mainSprites[this.index] = this;
                    count += 1;
                    checkLoading();
                };
                img.onerror = function () {
                    total -= 1;
                    checkLoading();
                };
                img.src = './assets/images/animation/car-comparison-animation-' + fixedIndex(i) + '.png';
            }

            function checkLoading () {
                if (count == total && cb) cb();
            }

            function fixedIndex (i) {
                if (i < 10) return '000' + i;
                if (i < 100) return '00' + i;
                if (i < 1000) return '0' + i;
            }
        },

        timer: null,

        play: function () {
            var that = this;
            var canvas = $('.animation-bg')[0];
            var ctx = canvas.getContext('2d');
            var curIndex = 0;

            clearInterval(that.timer);

            requestAnimationFrame(function () {
                that.timer = setInterval(function () {
                    ctx.clearRect(0, 0, 1280, 720);
                    ctx.drawImage(that.preloadSprites[curIndex], 0, 0, 1280, 720);
                    curIndex += 1;

                    if (curIndex > that.preloadSprites.length - 1) {
                        clearInterval(that.timer);
                        curIndex = 0;
                        playMainAnimation();
                    }
                }, 1000/25);
            });

            function playMainAnimation () {
                play();
                that.timer = setInterval(play, 1000/25);

                function play () {
                    ctx.clearRect(0, 0, 1280, 720);
                    ctx.drawImage(that.mainSprites[curIndex], 0, 0, 1280, 720);
                    curIndex += 1;

                    if (curIndex > that.mainSprites.length - 1) {
                        curIndex = 0;
                        ctx.drawImage(that.preloadSprites[curIndex], 0, 0, 1280, 720);
                    }
                }
            }
        },

        pause: function () {
            clearInterval(this.timer);
        }
    },

    colorSelect: function () {
        var panel = carBrosing.scene.find('.panel');
        panel.find('.item-hd').click(function () {
            $(this).parents('.item').toggleClass('active').siblings().removeClass('active');
        });
        
        panel.find('.color-item').click(function () {
            panel.find('.color-item').removeClass('active');
            $(this).addClass('active');
        });
    },
    
    show: function () {
        $('.nav').hide();
        $('.scene-carBrowsing').show().addClass('active').siblings('.scene').removeClass('active').hide();
        this.animationBg.play();
    },

    init: function (){
        var scene = this.scene;
        this.carSelect();
        this.colorSelect();

        //  close btn
        scene.find('.icon-close').click(function () {
            scene.hide().removeClass('active');
            app.show();
        });
    }
};



