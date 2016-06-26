// Created by sam mok 2015(Siso brand interactive team).

"use strict";

var queryQuote = {
    scene: $('.scene-queryQuote'),

    quoteList: function (data) {
        var that = this;
        var scene = this.scene;

        scene.find('.quote-list .body').empty().css({width: data.length*265+20});
        data.forEach(function (item) {
            var dom = '<div class="item" data-value="' + item.id + '">';
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

        //  绑定 删除事件
        $('.quote-list .item .btn-delete').click(function () {
            if (confirm('您确定要删除此条报价单吗')) that.deleteQuote($(this).parents('.item'));
        });

        //  绑定 编辑事件
        $('.quote-list .item .btn-edit').click(function () {
            that.editQuote($(this).parents('.item'));
        });
    },
    
    editQuote: function (quoteItem) {
        newQuote.init(function () {
            newQuote.show();
            var quoteID = quoteItem.attr('data-value');

            //  查询当前所选项数据, 然后进行每项数据的插入替换

            //  '.newQuote-home' 新建报价单 首页
            //  '.newQuote-insurance' 新建报价单 商业保险
            //  '.newQuote-gift' 新建报价单 汽车礼品
            //  '.newQuote-classic' 新建报价单 汽车精品
        });
    },

    deleteQuote: function (quoteItem) {
        //  当使用 Ajax 删除服务器的此条数据后, 删除页面元素
        //  省略ajax...
        var quoteID = quoteItem.attr('data-value');

        //  ajax success 回调函数内执行的功能
        quoteItem.remove();
        this.scene.find('.quote-list .body').css({width: $('.quote-list .item').length*265+20});
    },

    show: function () {
        var that = this;
        $('.nav').hide();
        $('.scene-queryQuote').show().siblings('.scene').removeClass('active').hide();
        setTimeout(function () {
            that.scene.addClass('active');
        }, 10);
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



