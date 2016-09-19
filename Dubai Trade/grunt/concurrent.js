module.exports = {
    server: [
        //'prettysass:dev',
        'sass:dev',
        'jshint:dev',
        'includereplace:dev'
    ],
    dist: [
        //'prettysass:dist',
        'sass:dist',
        'includereplace:dist'    ],
    minify: [
        'cssmin:dist',
        'uglify:dist',
        'imagemin:dist'
    ]
};
