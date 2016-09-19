module.exports = {
	dev: {
        bsFiles: {
                src : [
                    '<%= project.tmp %>/**/*.*'
                ]
        },
        options: {
            debugInfo: false,
            watchTask: true,
            server: {
                baseDir: "<%= project.tmp %>",
                index: "index.html"
            },
            host : "localhost",
            ghostMode: {
                    clicks: true,
                    scroll: true,
                    links: true,
                    forms: true
            }
        }
    }
};