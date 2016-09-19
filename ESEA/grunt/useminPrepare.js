module.exports = {
    html: {
                src: ['<%= project.app %>/pages/test.html'],
                options: {
                    dest : '<%= project.dist %>/',
                    root : '<%= project.dist %>'
                }
            }
};