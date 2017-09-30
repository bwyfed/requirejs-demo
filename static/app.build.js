/**
 * Created by BWY on 2017/9/27.
 */
({
    appDir: './src',
    baseUrl: './js',
    dir: './build',
    mainConfigFile: './src/js/require.conf.js',
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