module.exports = {
         dev: {
         options: {
                spriteElementPath: "<%= project.app %>/Res/svg/singlesvgicons/normalicons",//source of svg icons what are all going to be create a single sprite svg
                spritePath: "/Res/_Images/sprites/svgsprite.svg",
                cssSuffix: "SCSS",
                cssPath: "<%= project.app %>/Res/css/sprites/_svgsprite.scss",
                layout:"alt-diagonal"
               }
        }    
};
