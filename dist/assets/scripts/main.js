// Created by sam mok 2015(Siso brand interactive team).

"use strict";

//  limit browser drag move
document.addEventListener('touchmove', function (e) {
    e.preventDefault();
},true);

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

            if (index == 5 && confirm('点击后将会重置程序, 如有未保存的报价单信息则会丢失,\n确认重置程序吗?')) {
                location.reload();
            }
        });
    },

    show: function () {
        $('.nav').attr('class', 'nav');
        $('.nav').show();
        $('.scene-home').show();
    },
    
    init: function () {
        this.nav();
        components.init();
        carBrosing.init();
        queryQuote.init();
        newQuote.init();
        printQuote.init();
    }
};

$(function (){
    // init app
    app.init();
    console.log('app started success...');
});

