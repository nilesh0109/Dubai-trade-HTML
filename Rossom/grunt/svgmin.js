module.exports = {     
options: {                  // Configuration that will be passed directly to SVGO
            plugins: [
                    { cleanupAttrs: true },
                    { cleanupEnableBackground: true },
                    { cleanupIDs: true },
                    { cleanupNumericValues: true },
                    { collapseGroups: true },
                    { convertColors: true },
                    { convertPathData: true },
                    { convertShapeToPath: true },
                    { convertStyleToAttrs: true },
                    { convertTransform: true },
                    { mergePaths: true },
                    { moveElemsAttrsToGroup: true },
                    { moveGroupAttrsToElems: true },
                    { removeComments: true },
                    { removeDoctype: true },
                    { removeEditorsNSData: true },
                    { removeEmptyAttrs: true },
                    { removeEmptyContainers: true },
                    { removeEmptyText: true },
                    { removeHiddenElems: true },
                    { removeMetadata: true },
                    { removeNonInheritableGroupAttrs: true },
                    { removeRasterImages: false }, //Keep raster images with the svg
                    { removeTitle: true },
                    { removeUnknownsAndDefaults: true },
                    { removeUnusedNS: true },
                    { removeUselessStrokeAndFill: false }, //Enabling this may case small details to be removed
                    { removeViewBox: false }, //I keep the view box because that's where illustrator hides the SVG dimensions
                    { removeXMLProcInst: false }, //Enabling this breaks grunticon because it removes the XML header
                    { sortAttrs: true },
                    { transformsWithOnePath: false }, //Enabling this breaks Illustrator SVGs with complex text?
                ]
        },
        dist: {                     // Target
            files: [{               // Dictionary of files
                expand: true,       // Enable dynamic expansion.
                cwd: "<%= project.app %>/Res/svg/uniquesvgimages",     // Src matches are relative to this path.
                src: ['*.svg'],  // Actual pattern(s) to match.
                dest: '<%= project.app %>/Res/images/svg',       // Destination path prefix.
                ext: '.svg'     // Dest filepaths will have this extension.
                // ie: optimise img/src/branding/logo.svg and store it in img/branding/logo.min.svg
            }]
        }
};

