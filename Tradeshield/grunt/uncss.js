module.exports = {
	dist: {
		options: {
			csspath: "../",
			report: "gzip"
		},
		files: {
			'<%= project.dist %>/Res/css/tidy.css': ['<%= project.dist %>/pages/*.html']
		}
	}
};