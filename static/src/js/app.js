
/**
 * Created by BWY on 2017/9/19.
 */
requirejs.config({
    baseUrl: '../src/js',
    paths: {
        'jquery': [
            'http://code.jquery.com/jquery-3.2.1',
            './lib/jquery'
        ]
    }
})

require(['helper'],function(helper) {
    // console.log('helper='+helper);
    var str = helper.trim('   amd    ');
    console.log(str);
})