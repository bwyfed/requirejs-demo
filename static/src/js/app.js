
/**
 * Created by BWY on 2017/9/19.
 */
requirejs.config({
    baseUrl: '../src/js',
    urlArgs: '_=' + new Date().getTime(),
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
            'css': './lib/require/css'
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

require(['app/api',
    'backbone',
    'jquery-ui',
],function(api){
    $("#user").click(function(){
        // api.getUserByJsonp();
        // api.getUserByJsonp2();
        api.loadUser();
    })
})

// require(['app/api2','backbone'],function(api){})
/*
require(['jquery','./app/api','modernizr','backbone','bootstrap'],
    function($,api,modernizr,backbone) {
    console.log(backbone);
    $('#user').click(function(){
        api.getUser().then(function(user){
            console.log(user);
        })
    })
})
*/
/*
require(['helper','bar'],function(helper,bar) {
    // console.log('helper='+helper);
    var str = helper.trim('   amd    ');
    console.log(str);
    var t = bar.type(function () {});
    console.log(t);
})
*/