/**
 * Created by BWY on 2017/10/9.
 */
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

gulp.task('rjs',()=>{
    console.log($.requirejsOptimize);
    return gulp.src(['static/src/js/app.js','static/src/js/user.js'])
        .pipe($.requirejsOptimize({
            mainConfigFile: './static/src/js/require.conf.js'
        }))
            /*
        .pipe($.requirejsOptimize({
            // appDir: './static/src',
            baseUrl: './static/src/js',
            // out: './static/build',
            optimize: 'none',
            mainConfigFile: './static/src/js/require.conf.js',
            inlineText: false,
            name: 'app',
            // exclude: ['backbone'],
            // excludeShallow: ['backbone'],
            // include: ['modernizr'],
            // insertRequire: ['lib/modernizr']
        }))
        */
        .pipe(gulp.dest('./static/build'))
});

gulp.task('build:js',()=>{
    return $.requirejs({
        baseUrl: './static/src/js',
        out: './static/build',
        optimize: 'none',
        mainConfigFile: './static/src/js/require.gulp.conf.js',
        inlineText: false,
        name: 'app',
        insertRequire: ['lib/modernizr']
    })
        // .pipe(gulp.dest('./static/build'))
});