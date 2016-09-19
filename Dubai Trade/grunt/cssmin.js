module.exports = {
    dist: {
        expand: true,
        cwd: '<%= project.distCSS %>',
        src: ['*.css'],
        dest: '<%= project.distCSS %>',
        ext: '.css'
    },
    // Running report will display metrics about how compressed the CSS isd by being minified and GZiped. 
    // Note that this will take longer than a regular build/
    report: {
        expand: true,
        cwd: '<%= project.distCSS %>',
        src: ['*.css'],
        dest: '<%= project.distCSS %>',
        ext: '.css',
        options: {
            report: 'gzip'
        }
    }
};