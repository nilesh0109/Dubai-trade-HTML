module.exports = {
 dist: {
        options: {
            csslintrc: '.csslintrc',
            //import: false,
            absoluteFilePathsForFormatters: true,
          formatters: [
            {id: 'junit-xml', dest: 'report/css/csslint_junit.xml'},
            {id: 'csslint-xml', dest: 'report/css/csslint.xml'}
            ]
        },
        src: ['<%= project.dist %>/Res/css/*.css']
    }
};
