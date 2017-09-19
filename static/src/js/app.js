
/**
 * Created by BWY on 2017/9/19.
 */
requirejs.config({
    baseUrl: '../src/js',
    paths: {
        helper: "libs/helper1",
        bar: 'foo'
    }
})

require(['helper','bar'],function(helper,bar) {
    console.log('bar='+bar);
    var str = helper.trim('   amd    ');
    console.log(str);
})