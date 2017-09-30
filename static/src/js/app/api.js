/**
 * Created by BWY on 2017/9/21.
 */
define(['jquery'], function($) {
    return {
        getUser: function() {
            var def = $.Deferred();
            require(['./app/user'],function(user){
                def.resolve(user);
            })
            return def;
        },
        getUserByJsonp: function() {
            $.ajax({
                url: 'http://localhost:3000/user.js',
                dataType: 'jsonp',
                jsonpCallback: 'onloaded',
                success: function(data) {
                    console.log(data);
                }
            })
        },
        getUserByJsonp2: function() {
            require(['http://localhost:3000/user.amd.js'],function(user){
                console.log(user);
            });
        },
        loadUser: function() {
            require(['text!../../html/user.html!strip'],function(template){
                $("#userinfo").html(template);
            })
        }
    }
});

// function onloaded(user) {
//     console.log(user);
// }