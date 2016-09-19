module.exports = {
    dev: {
        allFiles: ['app/Res/css/styles.scss'],
        options: {
             bundleExec: true,
      		config: '.scss-lint.yml',
      		reporterOutput: 'scss-lint-report.xml',
      		colorizeOutput: true
        },
    }
};
