/**
 * Created by BWY on 2017/9/19.
 */
define('bar',['jquery'],function($){
    console.log('bar');
    return {
        trim: function(str) {
            return $.trim(str);
        }
    }
})