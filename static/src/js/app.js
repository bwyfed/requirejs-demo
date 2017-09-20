
/**
 * Created by BWY on 2017/9/19.
 */
requirejs.config({
    baseUrl: '../src/js'
})

require(['helper'],function(helper) {
    // console.log('helper='+helper);
    var str = helper.trim('   amd    ');
    console.log(str);
})