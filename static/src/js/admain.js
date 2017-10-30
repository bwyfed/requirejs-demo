/**
 * Created by BWY on 2017/10/30.
 */
require(['./plugins/cache'],(cache)=>{
    console.log(cache);
    cache.localcache.set('haha',{a:1,B:2,c:true},100);
    cache.localcache.set('gaga',[{a:1,B:2,c:true},{a:1,B:3,c:false}],100);
    let haha = cache.localcache.get('haha');
    console.log(haha);
    let gaga = cache.localcache.get('gaga');
    console.log(gaga);
    gaga[0].a = 123;
    cache.localcache.set('gaga',gaga);
    haha.B = 3;
    cache.localcache.set('haha',haha);
});