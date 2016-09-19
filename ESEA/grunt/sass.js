module.exports = {
    dev: {
        options: {
            outputStyle: 'nested',
            sourceComments: 'map',
            sourceMap: ""
        },
        files: {
            '<%= project.devCSS %>/styles.css': '<%= project.appCSS %>/styles.scss',
            '<%= project.devCSS %>/styles-ar.css': '<%= project.appCSS %>/styles-ar.scss'
        }
    },
    //validate: {
        //files: [{
          //  expand: true,
            //cwd: '<%= project.app %>/Res/_CSS',
            //src: ['*.scss'],
            //dest: '<%= project.app %>/Res/_CssValidations',
            //ext: '.css'
        //}]
    //},
    dist: {
        options: {
            outputStyle: 'nested',
            sourceComments: 'none'
        },
        files: {
            '<%= project.distCSS %>/styles.css': '<%= project.appCSS %>/styles.scss',
            '<%= project.distCSS %>/styles-ar.css': '<%= project.appCSS %>/styles-ar.scss'
        }
    }

}
