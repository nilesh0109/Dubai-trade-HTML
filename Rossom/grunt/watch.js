module.exports = {
    sprites: {
        files: ['<%= project.app %>/sprites/**/*.{png,jpg,jpeg,gif,svg}'],
        tasks: ['sprite']
    },
    sass: {
        files: ['<%= project.appCSS %>/**/*.{scss,sass}'],
        tasks: ['sass:dev', 'newer:autoprefixer:dev']
    },
    js: {
        files: [
            '<%= project.appJS %>/**/*.{js,json}'
        ],
        tasks: ['newer:copy:devJS']
    },
    html: {
        files: [
            '**/*.html'
        ],
        tasks: ['fileindex:pagesDev', 'fileindex:modulesDev', 'includereplace:dev','htmlhint:dev']
    },
    images: {
        files: [
            '<%= project.app %>/images/**/*.{png,jpg,jpeg,gif,webp,svg}'
        ],
        tasks: ['newer:copy:devImages']
    },
    fonts: {
        files: [
            '<%= project.app %>/fonts/**/*.{woff}'
        ],
        tasks: ['newer:copy:devFonts']
    }
};
