module.exports = {
    dist: {
        files: [{
            expand: true,
            cwd: '<%= project.app %>/Res/js',
            src: '**/*.js',
            dest: '<%= project.dist %>/Res/js',           
        }]
      }
};