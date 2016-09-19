// There are five settings for algorithm:
// For best packing, use binary-tree which uses a solution to the rectangle packing problem.
// If you are worried about sprites being visible within other sprites, use alt-diagonal.
// If you are using a repeating background, top-down or left-right depending on your occasion.
// The diagonal algorithm exists for you if you need it.
function sprite (type, short, algorithm) {
  return {
    src: 'app/Res/_Sprites/' + type + '/**/*.{png,jpg,jpeg,gif}',
    destImg: 'app/Res/images/sprites/' + type + '.png',
    destCSS: 'app/Res/css/sprites/_' + type + '.scss',
    imgPath: '/Res/images/sprites/' + type + '.png',
    cssOpts: {
      cssClass: function (item) {
        var prefix = short ? short + '-' : '';
        return '.' + prefix + item.name + ':before';
      }
    },
    engine: 'auto',
      imgOpts: {
        format: 'png'
      },
    algorithm: algorithm
  };
}


module.exports = {
    icons: sprite('icons', 'ico', 'alt-diagonal')   
};