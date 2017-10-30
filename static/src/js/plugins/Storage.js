/**
 * 功能说明：前端存储
 * @author bianwangyang
 * @date 2017-10-27
 */

(function(global, factory){
    typeof exports === 'object' && typeof module !=='undefined' ? module.exports = factory():
        typeof define === 'function' && define.amd ? define(factory):
            (global.Storage = factory());
}(this,function() {
    var config = {
        timeout: 365*24*60*60*1000, // 过期时间，默认一年
        type: 'local' // 存储媒介
    };
    // 增加本地存储或会话存储
    function Storage(options) {
        this.config = this._extends({}, config, options);
    }

    // 原型方法
    var sp = Storage.prototype;

    sp.support = function() {
        var tk = 'test',
            storage = localStorage;
        if(this.config.type='session') {
            storage = sessionStorage;
        }
        try {
            storage.setItem(tk, 1);
            storage.removeItem(tk);
            return !0;
        } catch(e) {
            alert('您可能启用了无痕浏览模式，开启后将无法为您节省流量且会导致部分功能无法使用，建议关闭无痕浏览后继续访问。');
            return !1;
        }
    };

    /**
     * 合并方法
     * @return {[Object]} [合并对象的方法]
     */
    sp._extends = Object.assign ||
        function (target) {
            for (var i = 1; i < arguments.length; i++) {
                var source = arguments[i];
                for (var key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
            return target;
        };

    /**
     * 重置key值，返回大写的key值
     * @param  {String} key 本地存储key值
     * @return {String}
     */
    sp.getKey = function(key) {
        return (key+'').toUpperCase();
    };

    /**
     * 在当前时间基础上增加时间，并返回增加后的毫秒数
     * @param {Date|String} now   当前时间
     * @param  {Number} milliSecond 增加的秒数
     * @return {Number} 增加后的毫秒数
     */
    sp.getTime = function(milliSecond,now) {
        now = now || new Date();
        milliSecond = milliSecond || 0;
        return +now + ( + milliSecond );
    };

    /**
     * 设置过期时间
     * @param {Number} milliSecond 保存的时间
     */
    sp.setExpiredTime = function(milliSecond) {
        this.config.timeout = parseInt(milliSecond, 10);

        return this;
    };

    /**
     * 设置缓存值至本地媒介
     * @param {String} key   缓存key值
     * @param {String||Function} value 缓存value值
     * @param {Number} timeout 失效时间 毫秒
     */
    sp.set = function(key, value, timeout) {
        var _this = this;
        var type = _this.config.type;
        key = _this.getKey(key);

        // 更新本地存储
        if(value && typeof value === 'function') {
            value = value(_this.get(key));
        }
        var now = new Date();
        var cachetime = _this.getTime(timeout || _this.config.timeout,now);
        var val = {
            data: value,
            timeout: cachetime,
            savetime: +now
        };
        val = JSON.stringify(val);

        this.setItem(type, key, val);

        return this;
    };

    /**
     * 获取缓存在本地的值
     * @param key {String} 获取缓存key的值
     * @return all 缓存在本地的值
     */
    sp.get = function(key) {
        var _this = this;
        var type = _this.config.type;
        key = _this.getKey(key);

        // 获取本地缓存
        var val;
        val = this.getItem(type, key);

        // 本地存储是否过期
        val = val && JSON.parse(val);
        if(val && (val.timeout > _this.getTime())) {
            return val.data; //未过期则返回存储的数据
        } else {
            _this.clear(key); //过期则清理存储的值
        }
        return null;
    };

    /**
     * 删除本地存储的值
     * @param  {string} key 本地存储标识
     * @return {[type]}     [description]
     */
    sp.clear = function(key) {
        var type = this.config.type;
        key = this.getKey(key);

        this.removeItem(type, key);

        return this;
    };

    /**
     * 设置本地存储信息
     * @param type
     * @param key
     * @param val
     */
    sp.setItem = function(type, key, val) {
        var support = this.support,
            _this = this,
            old;


        if(support) {
            window[type+'Storage'].setItem(key, val);
        } else {
            old = _this.getWindowName();
            old[key] = val;
            _this.setWindowName(old);
        }
    };

    /**
     * 获取本地存储信息
     * @param type
     * @param key
     */
    sp.getItem = function(type, key) {
        var support = this.support,
            _this = this,
            value;

        if(support) {
            value = window[type+'Storage'].getItem(key);
        } else {
            value = _this.getWindowName();
            value = value && value[key];
        }

        return value;
    };

    /**
     * 清除本地存储信息
     * @param type
     * @param key
     * @returns {*}
     */
    sp.removeItem = function(type, key) {
        var support = this.support,
            _this = this,
            value;

        if(support) {
            value = window[type+'Storage'].removeItem(key);
        } else {
            value = _this.getWindowName();
            value && (delete value[key]);
            _this.setWindowName(value);
        }
    };

    /**
     * 获取window.name
     * @returns {*|Window.name}
     */
    sp.getWindowName = function() {
        var value = window.name;

        try {
            value = JSON.parse(value);
        } catch (e) {
            value = {};
        }

        return value;
    };

    /**
     * 设置window.name
     * @param value
     */
    sp.setWindowName = function(value) {
        value = value || {};

        window.name = JSON.stringify(value);
    };

    return Storage;
}));

