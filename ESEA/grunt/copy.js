module.exports = {
    dist: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= project.app %>',
            dest: '<%= project.dist %>',
            src: [
                '*.{ico,png,txt}',
                'Res/images/**/*.{webp,gif,jpg,jpeg,png}',
                'Res/images/sprites/**/*.svg',
                'Res/images/svg/**/*.svg',
                '*.html',
                'modules/**/*.html',
                'Res/js/**/*.*',
                'Res/css/**/*.css',
                'Res/fonts/**/*.{eot,svg,ttf,otf,woff,woff2}',
                '!**/.svn/**'
            ]
        }]
    },
    dev: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= project.app %>',
            dest: '<%= project.tmp %>',
            src: [
                '*.{ico,png,txt}',
                'Res/images/**/*.{webp,gif,jpg,jpeg,png}',
                'Res/images/sprites/**/*.svg',
                'Res/images/svg/**/*.svg',
				'*.html',
                'modules/**/*.html',
                'Res/js/**/*.*',
                'Res/css/**/*.css',
                'Res/fonts/**/*.{eot,svg,ttf,otf,woff,woff2}',
                '!**/.svn/**'
            ]
        }]
    },
    devJS: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= project.app %>',
            dest: '<%= project.tmp %>',
            src: [
                'Res/js/**/*.*'
            ]
        }]
    },
    devImages: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= project.app %>',
            dest: '<%= project.tmp %>',
            src: [
                'Res/images/**/*.{webp,gif,jpg,jpeg,png}',
                'Res/images/sprites/**/*.svg',
                'Res/images/svg/**/*.svg',
            ]
        }]
    },
    devFonts: {
        files: [{
            expand: true,
            dot: true,
            cwd: '<%= project.app %>',
            dest: '<%= project.tmp %>',
            src: [
                'Res/fonts/**/*.{eot,svg,ttf,otf,woff,woff2}'
            ]
        }]
    }
};
