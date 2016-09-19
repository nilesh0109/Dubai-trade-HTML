module.exports = {  
	all: {
            // specify files in array format with multiple src-dest mapping
            files: [
                // rasterize all SVG files in "img" and its subdirectories to "img/png"
                { src: ['<%= project.app %>/Res/images/svg/*.svg'], dest: '<%= project.app %>/Res/images/svg/' }                
            ]
        }

};