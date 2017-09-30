/**
 * Created by BWY on 2017/9/27.
 */
({
    appDir: './src',
    baseUrl: './js',
    dir: './build',
    optimize: 'none',
    mainConfigFile: './src/js/require.conf.js',
    inlineText: false,
    modules: [
        {
            name: 'app',
            // exclude: ['backbone'],
            // excludeShallow: ['backbone'],
            // include: ['modernizr'],
            insertRequire: ['modernizr']
        },
        {
        name: 'user'
        }
    ]
})