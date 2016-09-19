module.exports = {
    dev: {
     options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish'),
            ignores: ['<%= project.app %>/Res/_JS/vendor/**/*.js']
        },
        src: ['<%= project.app%>/Res/_JS/*.js','!<%= project.app %>/Res/_JS/vendor/**/*.js']             
    }
};
