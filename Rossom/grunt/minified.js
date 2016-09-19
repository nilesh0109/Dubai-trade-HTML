 module.exports = {
     dist: {
         files: {
             src: [
                 '<%= project.app %>/Res/js/**/*.js',
                  '<%= project.app %>/Res/js/*.js'
             ],
             dest: '<%= project.dist %>/Res/js'
         },
         options: {
             sourcemap: true,
             allinone: false
         }
     }
 };
