    var htmlStart = "<!DOCTYPE html ><html><head><style type='text/css' style='display:block;'>body{color:#555;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif}.wrapper{margin:0 auto;max-width:900px;min-width:320px;}h1{color:#333;font-size:36px;font-weight:400;}h2{color:#333;margin:10px 0 5px;}img{border:1px solid #ccc;margin:18px 0;max-width:100%;height:auto;}.logo{border:0 none}ol,p,ul{margin:20px 0 10px;}ol,ul{margin-bottom:20px;}p{line-height:20px}li{margin-bottom:15px; float:left; width:100%;}.divider{clear:both;height:10px;border-top:5px solid #5c5c5c;width:100%}a{color:#a83338; text-decoration:none;}a:focus,a:hover{color:#4a4a4a;text-decoration:underline;}.header_callout{float:right}.color-bar{width:100%;height:3px;background:#3E7FC1;clear:both;float:left;margin-bottom:40px}</style></head><body><div class='wrapper'><header><img src='http://tacme.com/img/logo.png' alt='Tacme' class='logo' /><div class='header_callout'>";
    var htmlheader = "<h3>Tool KIt generated pages</h3></div></header><div class='color-bar'></div><ul>";
    //var projectName = project.projectName;
    var htmlEnd = "</ul></div></body></html>";
    module.exports = function(grunt) {
       //        var projectname = "<h3>"+ global.projectName  +"</h3>";
         var projectname = "<h3>"+  projectName   +"</h3>";
        return {
            pagesDev: {
                options: {
                    format: function(list, options, dest) {
                        var lines = [];
                        lines.push(htmlStart);
                        //lines.push(projectname);
                        lines.push(htmlheader);
                        grunt.util.recurse(list, function(file) {
                            // We want to extract the filename from the full path
                            var fileName = file.split('/').pop();

                            lines.push('<li><a href="' + file + '">' + fileName + '</a></li>\n');
                        });

                        lines.push(htmlEnd);

                        return lines.join('');
                    }
                },
                files: [{
                    dest: '<%= project.tmp %>/index.html',
                    src: ['pages/**/*'],
                    cwd: '<%= project.app %>',
                    filter: 'isFile'
                }]
            },
            modulesDev: {
                options: {
                    format: function(list, options, dest) {
                        var lines = [];
                        lines.push(htmlStart);
                        //lines.push(projectname);
                        lines.push(htmlheader);

                        grunt.util.recurse(list, function(file) {
                            // We want to extract the filename from the full path
                            var fileName = file.split('/').pop();

                            lines.push('<li><a href="' + file + '">' + fileName + '</a></li>\n');
                        });

                        lines.push(htmlEnd);

                        return lines.join('');
                    }
                },
                files: [{
                    dest: '<%= project.tmp %>/modules.html',
                    src: ['modules/**/*'],
                    cwd: '<%= project.app %>',
                    filter: 'isFile'
                }]
            },
            pagesDist: {
                options: {
                    format: function(list, options, dest) {
                        var lines = [];
                        lines.push(htmlStart);
                        //lines.push(projectname);
                        lines.push(htmlheader);
                        grunt.util.recurse(list, function(file) {
                            // We want to extract the filename from the full path
                            var fileName = file.split('/').pop();

                            lines.push('<li><a href="' + file + '">' + fileName + '</a></li>\n');
                        });
                        lines.push(htmlEnd);
                        return lines.join('');
                    }
                },
                files: [{
                    dest: '<%= project.dist %>/index.html',
                    src: ['pages/**/*'],
                    cwd: '<%= project.app %>',
                    filter: 'isFile'
                }]
            },
            modulesDist: {
                options: {
                    format: function(list, options, dest) {
                        var lines = [];
                        lines.push(htmlStart);
                        //lines.push(projectname);
						//<sudharsan developed>
                        lines.push(htmlheader);
                        grunt.util.recurse(list, function(file) {
                            // We want to extract the filename from the full path <sudharsan developed>
                            var fileName = file.split('/').pop();

                            lines.push('<li><a href="' + file + '">' + fileName + '</a></li>\n');
                        });
                         lines.push(htmlEnd);
                        return lines.join('');
                    }
                },
                files: [{
                    dest: '<%= project.dist %>/modules.html',
                    src: ['modules/**/*'],
                    cwd: '<%= project.app %>',
                    filter: 'isFile'
                }]
            }
        }
    };
