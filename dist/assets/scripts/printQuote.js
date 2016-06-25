// Created by sam mok 2015(Siso brand interactive team).

"use strict";

var printQuote = {
    scene: $('.scene-printQuote'),

    show: function () {
        $('.nav').hide();
        $('.scene-printQuote').show().addClass('active').siblings('.scene').removeClass('active').hide();
    },

    init: function (){
        var scene = this.scene;

        //  close btn
        scene.find('.icon-close').click(function () {
            $('.scene-printQuote').hide().removeClass('active');
            app.show();
        });
    }
};



