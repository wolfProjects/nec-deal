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



