// Created by sam mok 2015(Siso brand interactive team).

"use strict";

var DATA = {
    model: [
        [
            {
                'title': '厂商指导价',
                'body': '138.68万'
            },
            {
                'title': '级别',
                'body': '中型车'
            },
            {
                'title': '发动机',
                'body': '1.8T 160马力 L4'
            },
            {
                'title': '变速箱',
                'body': '6档手动'
            },
            {
                'title': '长*宽*高(mm)',
                'body': '4761*1826*1439'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            }
        ],
        [
            {
                'title': '厂商指导价',
                'body': '81.68万'
            },
            {
                'title': '级别',
                'body': '中型车'
            },
            {
                'title': '发动机',
                'body': '1.8T 160马力 L4'
            },
            {
                'title': '变速箱',
                'body': '6档手动'
            },
            {
                'title': '长*宽*高(mm)',
                'body': '4761*1826*1439'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            }
        ],
        [
            {
                'title': '厂商指导价',
                'body': '213.68万'
            },
            {
                'title': '级别',
                'body': '中型车'
            },
            {
                'title': '发动机',
                'body': '1.8T 160马力 L4'
            },
            {
                'title': '变速箱',
                'body': '6档手动'
            },
            {
                'title': '长*宽*高(mm)',
                'body': '4761*1826*1439'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            },
            {
                'title': '车身结构',
                'body': '4门5座三厢车'
            },
            {
                'title': '最高车速(km/h)',
                'body': '220'
            },
            {
                'title': '官方0-100km加速(s)',
                'body': '8.3'
            },
            {
                'title': '整车质保',
                'body': '三年或10万公里'
            }
        ]
    ],
    carType: {
        car: {
            name: '轿车',
            models: [
                '凯迪拉克',
                '本田雅阁',
                '荣威950'
            ],
            description: '<strong>轿车</strong><span>是系列中的最新款 ， 这款全新开发的新一代轿车，配置全新研发六缸电喷发动机，排量3956cc， 动力性能好，排气符合当今全新欧洲Ш号标准， 高度环保。</span>'
        },
        suv: {
            name: 'SUV',
            models: [
                '英菲尼迪QX50',
                '路虎揽胜',
                '哈弗H9'
            ],
            description: '<strong>SUV</strong><span>车是系列中的最新款 ， 这款全新开发的新一代suv车，配置全新研发六缸电喷发动机，排量3956cc， 动力性能好，排气符合当今全新欧洲Ш号标准， 高度环保。</span>'
        },
        luxury: {
            name: '豪华车',
            models: [
                '红旗l5',
                '雷克萨斯',
                '保时捷Panamera'
            ],
            description: '<strong>豪华车</strong><span>是系列中的最新款 ， 这款全新开发的新一代豪华车，配置全新研发六缸电喷发动机，排量3956cc， 动力性能好，排气符合当今全新欧洲Ш号标准， 高度环保。</span>'
        }
    },

    //  new quote
    carColor: {
        car1: ['珍珠白车色', '樱桃红车色'],
        car2: ['珍珠白车色', '樱桃红车色'],
        car3: ['珍珠白车色', '樱桃红车色'],
        suv1: ['日落黄车色', '樱桃红车色'],
        suv2: ['珍珠白车色', '樱桃红车色'],
        suv3: ['珍珠白车色', '樱桃红车色'],
        luxury1: ['珍珠白车色', '樱桃红车色'],
        luxury2: ['珍珠白车色', '樱桃红车色'],
        luxury3: ['珍珠白车色', '樱桃红车色']
    },

    carInner: {
        car1: ['珍珠白内饰', '樱桃红内饰'],
        car2: ['珍珠白内饰', '樱桃红内饰'],
        car3: ['珍珠白内饰', '樱桃红内饰'],
        suv1: ['珍珠白内饰', '樱桃红内饰'],
        suv2: ['珍珠白内饰', '樱桃红内饰'],
        suv3: ['珍珠白内饰', '樱桃红内饰'],
        luxury1: ['珍珠白内饰', '樱桃红内饰'],
        luxury2: ['珍珠白内饰', '樱桃红内饰'],
        luxury3: ['珍珠白内饰', '樱桃红内饰']
    },

    insurance: [
        {
            name: '中国平安',
            total: 2832,
            base: 1790,
            jidongche: 2843,
            disanzhe: [
                '20',
                '30',
                '40'
            ],
            daoqiang: 0,
            driver: [
                '20',
                '30',
                '40'
            ],
            engine: 100,
            addition: 785
        },
        {
            name: '中国太平洋',
            total: 2832,
            base: 1790,
            jidongche: 2843,
            disanzhe: [
                '20',
                '30',
                '40'
            ],
            daoqiang: 0,
            driver: [
                '20',
                '30',
                '40'
            ],
            engine: 100,
            addition: 785
        },
        {
            name: '中国人寿',
            total: 2832,
            base: 1790,
            jidongche: 2843,
            disanzhe: [
                '20',
                '30',
                '40'
            ],
            daoqiang: 0,
            driver: [
                '20',
                '30',
                '40'
            ],
            engine: 100,
            addition: 785
        }
    ]
};