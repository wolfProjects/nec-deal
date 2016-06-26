// Created by sam mok 2015(Siso brand interactive team).

"use strict";

//  limit browser drag move
//document.addEventListener('touchmove', function (e) {
//    e.preventDefault();
//},true);

var app = {
    scene: $('.scene-home'),

    nav: function () {
        $('.nav .item').click(function () {
            var index = $(this).index();
            $('.nav').removeClass($('.nav').attr('class').replace('nav','')).addClass('nav0' + (index+1));

            if ($(this).hasClass('item01')) carBrosing.show();
            if ($(this).hasClass('item02')) queryQuote.show();
            if ($(this).hasClass('item03')) newQuote.show();
            if ($(this).hasClass('item04')) printQuote.show();
            if ($(this).hasClass('item05')) printQuote.show();

            if (index == 5 && confirm('点击后将会重置程序, 如有未保存的报价单信息则会丢失,\n确认重置程序吗?')) {
                location.reload();
            }
        });
    },

    animationBg: {
        mainSprites: [],

        preload: function (cb) {
            var that = this;
            var img = null;
            var total = 150;
            var count = 0;

            for (var i = 0; i <= 149; i++) {
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
                img.src = './assets/images/animation/NEC_desk_' + fixedIndex(i) + '.jpg';
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
            var canvas = $('.home-animation-bg')[0];
            var ctx = canvas.getContext('2d');
            var curIndex = 0;

            clearInterval(that.timer);

            requestAnimationFrame(function () {
                that.timer = setInterval(play, 1000/25);

                function play () {
                    if (!that.mainSprites[curIndex]) curIndex += 1;
                    if (curIndex > that.mainSprites.length - 1) {
                        curIndex = 0;
                    }

                    ctx.clearRect(0, 0, 1280, 720);
                    ctx.drawImage(that.mainSprites[curIndex], 0, 0, 1920, 1080);
                    curIndex += 1;

                    if (curIndex > that.mainSprites.length - 1) {
                        clearInterval(that.timer);
                    }
                }
            });
        },

        pause: function () {
            clearInterval(this.timer);
        }
    },

    show: function () {
        $('.nav').attr('class', 'nav');
        $('.nav').show();
        $('.scene-home').fadeIn();
        setTimeout(function () {
            $('.scene-home').addClass('active');
            app.animationBg.play();
        }, 10);
        carBrosing.animationBg.pause();
    },
    
    init: function () {
        this.nav();
        $('.nav').fadeIn();
        $('.scene-home').addClass('active');
        components.init();
        carBrosing.init();
        queryQuote.init();
        //newQuote.init();
        printQuote.init();

        app.animationBg.play();
    }
};

$(function (){
    // init app
    console.log('home page assets loading...');
    app.animationBg.preload(function () {
        console.log('car browsing assets loading...');
        carBrosing.animationBg.preload(function () {
            console.log('app started success...');
            app.init();
        });
    })
});

