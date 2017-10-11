'use strict';
var require = {
    urlArgs: '_=' + new Date().getTime(),
    baseUrl: './js',
    paths: {
        'jquery': './lib/jquery',
        'bootstrap': './lib/bootstrap',
        'modernizr': './lib/modernizr',
        'backbone': './lib/backbone',
        'underscore': './lib/underscore',
        'text': './lib/require/text',
        'jquery-ui': './lib/jquery-ui/jquery-ui',
        'css': './lib/require/css',
        'i18n': './lib/require/i18n'
    },
    shim: {
        'modernizr': {
            exports: 'Modernizr'
        },
        'bootstrap': ['jquery']
        // 'jquery-ui': ['css!./lib/jquery-ui/jquery-ui.css', 'css!./lib/jquery-ui/jquery-ui.theme.css']
    },
    config: {
        text: {
            onXhr: function(xhr, url) {
                xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
            }
        },
        i18n: {
            locale: typeof locale !=='undefined' ? locale: 'zh-CN'
        }
    },
    map: {
        '*': {
            'css': './lib/require/css',
        }
    }
};

if(typeof module === "object" && typeof module.exports === 'object'){
    module.exports = require;
}