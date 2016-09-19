module.exports = {
    options: {
      browsers: ['> 1%', 'last 2 version', 'ie 8', 'ie 7','ie 9']
    },
    dev: {
        src: '<%= project.devCSS %>/*.css'
    },
    dist: {
        src: '<%= project.distCSS %>/*.css'
    }
};