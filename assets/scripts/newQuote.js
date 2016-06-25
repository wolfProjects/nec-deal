// Created by sam mok 2015(Siso brand interactive team).

"use strict";

var newQuote = {
    scene: $('.scene-newQuote'),

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

    classic: {
        tab: function (scene) {
            scene.find('.car-classic-tab .item').click(function () {
                $(this).addClass('active').siblings().removeClass('active');
                scene.find('.panel-bd-item').eq($(this).index()).fadeIn('fast').siblings().hide();
            });
        }
    },

    show: function () {
        $('.scene-newQuote').show().addClass('active').siblings('.scene').removeClass('active').hide();
    },

    init: function (){
        var scene = this.scene;

        this.homePage.carSelect(scene.find('.newQuote-home'));

        this.insurancePage.chooseBtn(scene.find('.newQuote-insurance'));
        this.insurancePage.item(scene.find('.newQuote-insurance'));

        this.giftPage.table(scene.find('.newQuote-gift'));

        this.classic.tab(scene.find('.newQuote-classic'));

        //  close btn
        scene.find('.newQuote-home').find('.icon-close').click(function () {
            $('.scene-newQuote').hide().removeClass('active');
            app.show();
        });

        scene.find('.newQuote-home .btn-insurance').click(function () {
            scene.find('.newQuote-home').hide();
            scene.find('.newQuote-insurance').show();
        });

        scene.find('.newQuote-home .btn-classic').click(function () {
            scene.find('.newQuote-home').hide();
            scene.find('.newQuote-insurance').show();
        });

        scene.find('.newQuote-home .btn-gifts').click(function () {
            scene.find('.newQuote-home').hide();
            scene.find('.newQuote-gift').show();
        });
        
        scene.find('.newQuote-insurance .icon-close, .newQuote-classic .icon-close, .newQuote-gift .icon-close').click(function () {
            scene.find('.newQuote-home').show();
            scene.find('.newQuote-insurance, .newQuote-classic, .newQuote-gift').hide();
        });
    }
};



