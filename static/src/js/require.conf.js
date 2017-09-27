/**
 * Created by BWY on 2017/9/19.
 */
requirejs.config({
    urlArgs: '_=' + new Date().getTime(),
    baseUrl: '../src/js',
    paths: {
        'jquery': './lib/jquery',
        'jquery2': './lib/jquery2',
        'bootstrap': './lib/bootstrap',
        'modernizr': './lib/modernizr',
        'backbone': './lib/backbone',
        'underscore': './lib/underscore',
        'text': './lib/require/text',
        'jquery-ui': './lib/jquery-ui'
    },
    shim: {
        'modernizr': {
            exports: 'Modernizr'
        },
        'bootstrap': ['jquery'],
        'jquery-ui': [
            'css!../css/jquery-ui/jquery-ui.css',
            'css!../css/jquery-ui/jquery-ui.theme.css'
        ]
    },
    map: {
        '*': {
            'jquery': 'jquery',
            'css': './lib/require/css',
        },
        'app/api2': {
            'jquery': 'jquery2'
        }
    },
    config: {
        text: {
            onXhr: function(xhr, url) {
                xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
            }
        }
    }
})