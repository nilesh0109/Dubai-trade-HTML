'use strict';
// developed by sudharsan
// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'
module.exports = function (grunt) {
	global.projectName = 'ERS pro';
    // show elapsed time at the endgit statsh
    require('time-grunt')(grunt);
    // load all grunt tasks (this replaces grunt.loadNpmTasks())
    require('load-grunt-config')(grunt);

};