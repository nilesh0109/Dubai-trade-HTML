module.exports = {
    dist: {
                options: {
                    includesDir: '<%= project.app %>'
                },
                files: [
                    {
                        src: 'pages/*.html', 
                        dest: '<%= project.dist %>/', 
                        expand: true, 
                        cwd: 'app/'
                    }
                ]
            },
            dev: {
                options: {
                    includesDir: '<%= project.app %>'
                },
                files: [
                    {
                        src: 'pages/*.html', 
                        dest: '<%= project.tmp %>/', 
                        expand: true, 
                        cwd: 'app/'
                    }
                ]
            }
};