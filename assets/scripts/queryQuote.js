// Created by sam mok 2015(Siso brand interactive team).

"use strict";

var queryQuote = {
    scene: $('.scene-queryQuote'),

    quoteList: function (data) {
        var scene = this.scene;

        scene.find('.quote-list .body').empty().css({width: data.length*265+20});
        data.forEach(function (item) {
            var dom = '<div class="item">';
            dom += '<p class="id">' + item.id || '&nbsp;' + '</p>';
            dom += '<p class="customerName">' + item.customerName || '&nbsp;' + '</p>';
            dom += '<p class="phone">' + item.phone || '&nbsp;' + '</p>';
            dom += '<p class="salerName">' + item.salerName || '&nbsp;' + '</p>';
            dom += '<p class="carName">' + item.carName || '&nbsp;' + '</p>';
            dom += '<p><button class="btn btn-edit">编辑<span></span></button></p>';
            dom += '<p><button class="btn btn-delete">删除<span></span></button></p>';
            dom += '</div>';
            scene.find('.quote-list .body').append($(dom));
        });
    },

    show: function () {
        $('.nav').hide();
        $('.scene-queryQuote').show().addClass('active').siblings('.scene').removeClass('active').hide();
    },

    init: function (){
        var scene = this.scene;

        this.quoteList(DATA.quoteList);

        //  close btn
        scene.find('.icon-close').click(function () {
            $('.scene-queryQuote').hide().removeClass('active');
            app.show();
        });
    }
};



