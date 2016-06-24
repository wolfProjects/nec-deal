// Created by sam mok 2015(Siso brand interactive team).

"use strict";

var newQuote = {
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
                $(this).addClass('active').siblings().removeClass('active');
            });
        },

        item: function (scene) {
            scene.find('.main-item').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
            });
        }
    },

    show: function () {
        $('.nav').hide();
        $('.scene-newQuote').show().addClass('active').siblings('.scene').removeClass('active').hide();
    },

    init: function (){
        var scene = this.scene;
        this.homePage.carSelect($('.scene-newQuote .newQuote-home'));
        this.insurancePage.chooseBtn($('.scene-newQuote .newQuote-insurance'));
        this.insurancePage.item($('.scene-newQuote .newQuote-insurance'));

        //  close btn
        $('.scene-newQuote .newQuote-home').find('.icon-close').click(function () {
            $('.scene-newQuote').hide().removeClass('active');
            app.show();
        });

        $('.scene-newQuote .newQuote-home .btn').click(function () {
            $('.scene-newQuote .newQuote-home').hide();
            $('.scene-newQuote .newQuote-insurance').show();
        });
        
        $('.scene-newQuote .newQuote-insurance .icon-close').click(function () {
            $('.scene-newQuote .newQuote-home').show();
            $('.scene-newQuote .newQuote-insurance').hide();
        });
    }
};



