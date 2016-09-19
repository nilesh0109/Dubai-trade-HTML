module.exports = {
    dist: {
                options: {
                    pngquant: true
                },
                files: [{
                    expand: true,
                    cwd: '<%= project.dist %>/Res/images',
                    src: '{,*/}*.{png,jpg,jpeg,gif}',
                    dest: '<%= project.dist %>/Res/images'
                }]
            }
};