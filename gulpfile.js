/**
 * Created by BWY on 2017/10/9.
 */
const path = require('path');
const gulp = require('gulp');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

gulp.task('rjs3',()=>{
    return gulp.src(['static/src/js/foo.js'])
        .pipe(
            $.requirejsOptimize({
                optimize: 'none',
                mainConfigFile: 'static/src/js/config.js',
                include: ['jquery']
            })
        )
        .pipe(gulp.dest('static/build-gulp/js'));
});

gulp.task('rjs2',()=>{
    return gulp.src(['static/src/js/app.js'])
        .pipe($.requirejsOptimize(function(file){
            console.log('file.path is:'+file.path);
            console.log('normalize file.path is:'+file.path.replace(/\\/g,'/'));
            return {
                name: path.normalize(file.path),
                baseUrl: './static/src/js',
                optimize: 'none',
                // mainConfigFile: './static/src/js/require.gulp.conf.js',
                inlineText: false,
                paths: {
                    'jquery': './lib/jquery',
                    'bootstrap': './lib/bootstrap',
                    'modernizr': './lib/modernizr',
                    'backbone': './lib/backbone',
                    'underscore': './lib/underscore',
                    'text': './lib/require/text',
                    'jquery-ui': './lib/jquery-ui/jquery-ui',
                    'css': './lib/require/css',
                    'i18n': './lib/require/i18n'
                },
                shim: {
                    'modernizr': {
                        exports: 'Modernizr'
                    },
                    'bootstrap': ['jquery']
                    // 'jquery-ui': ['css!./lib/jquery-ui/jquery-ui.css', 'css!./lib/jquery-ui/jquery-ui.theme.css']
                },
                config: {
                    text: {
                        onXhr: function(xhr, url) {
                            xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
                        }
                    },
                    i18n: {
                        locale: typeof locale !=='undefined' ? locale: 'zh-CN'
                    }
                },
                map: {
                    '*': {
                        'css': './lib/require/css',
                    }
                },
                // name: 'app',
                insertRequire: ['lib/modernizr']
            };
        }))
        .pipe(gulp.dest('static/build-gulp/js'));
});

gulp.task('rjs',()=>{
    console.log($.requirejsOptimize);
    return gulp.src(['static/src/js/app.js','static/src/js/user.js'])
        .pipe($.requirejsOptimize({
            // out: './static/build',
            optimize: 'none',
            mainConfigFile: './static/src/js/require.gulp.conf.js',
            inlineText: false,
            // name: 'app',
            insertRequire: ['lib/modernizr']
        }))
        .pipe(gulp.dest('static/build-gulp/js'))
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
        name: 'app',
        out: 'app.test.js',
        optimize: 'none',
        // mainConfigFile: './static/src/js/require.gulp.conf.js',
        paths: {
            'jquery': './lib/jquery',
            'bootstrap': './lib/bootstrap',
            'modernizr': './lib/modernizr',
            'backbone': './lib/backbone',
            'underscore': './lib/underscore',
            'text': './lib/require/text',
            'jquery-ui': './lib/jquery-ui/jquery-ui',
            'css': './lib/require/css',
            'i18n': './lib/require/i18n'
        },
        shim: {
            'modernizr': {
                exports: 'Modernizr'
            },
            'bootstrap': ['jquery'],
            'jquery-ui': ['css!./lib/jquery-ui/jquery-ui.css', 'css!./lib/jquery-ui/jquery-ui.theme.css']
        },
        config: {
            text: {
                onXhr: function(xhr, url) {
                    xhr.setRequestHeader('X-Requested-With','XMLHttpRequest');
                }
            },
            i18n: {
                locale: typeof locale !=='undefined' ? locale: 'zh-CN'
            }
        },
        map: {
            '*': {
                'css': './lib/require/css',
            }
        },
        inlineText: false,
        insertRequire: ['lib/modernizr']
    })
        .pipe(gulp.dest('./static/build/js'))
        // .pipe(gulp.dest('./static/build'))
});