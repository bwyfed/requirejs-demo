/**
 * Created by BWY on 2017/9/19.
 */
define('helper',['./lib/jquery'],function($){
    console.log($);
    require(['jquery'],function($){
        console.log($);
    });
    return {
        trim: function(str) {
            return $.trim(str);
        }
    }
})