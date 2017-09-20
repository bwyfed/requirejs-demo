/**
 * Created by BWY on 2017/9/19.
 */
define('bar',['jquery'],function($){
    console.log('bar');
    return {
        type: function(obj) {
            return $.type(obj);
        }
    }
})