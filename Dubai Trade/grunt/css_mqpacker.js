module.exports = {
	options: {
      map: false
    },
    main: {
      expand: true,
      cwd: '<%= project.dist %>/_CSS/',
      src: '*.css',
      dest: '<%= project.dist %>/_CSS/'
    }
}