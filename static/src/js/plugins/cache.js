/**
 * 功能说明：前端缓存--支持localStorage和sessionStorage
 * @author Bianwangyang
 * @author 2017-10-30
 */

define(['./Storage'],function (Storage) {
    // 本地存储校验规则
    var setStorageName = function(name) {
        var names = name.toString().split('_');

        return name;
    };

    var cache = {};
    // localStorage
    cache.localcache = new Storage({
        setRealName: setStorageName
    });
    // sessionStorage
    cache.sessioncache = new Storage({
        type: 'session',
        setRealName: setStorageName,
    });

    /*
    if (navigator.userAgent.toUpperCase().indexOf('VIVO') != -1) {
        cache.sessioncache = new Storage({
            type: 'local',
            setRealName: setStorageName,
        });
    }
    */
    return cache;
})