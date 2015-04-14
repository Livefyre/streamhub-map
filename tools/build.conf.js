({
  mainConfigFile: '../requirejs.conf.js',
  paths: {
    jquery: 'lib/jquery/jquery.min',
    almond: 'lib/almond/almond'
  },
  baseUrl: '..',
  name: "streamhub-map",
  include: [
    'almond',
    'css!dist/temp/style',
    'css!lib/streamhub-sdk/src/css/style'
  ],
  buildCSS: true,
  stubModules: ['text', 'hgn', 'json'],
  out: "../dist/streamhub-map.min.js",
  pragmasOnSave: {
    excludeHogan: true,
    excludeRequireCss: true
  },
  cjsTranslate: true,
  optimize: "none",
  preserveLicenseComments: false,
  uglify2: {
    compress: {
      unsafe: true
    },
    mangle: true
  },
  wrap: {
    startFile: 'wrap-start.frag',
    endFile: 'wrap-end.frag'
  },
  generateSourceMaps: true,
  onBuildRead: function(moduleName, path, contents) {
    switch (moduleName) {
      case "jquery":
        contents = "define([], function(require, exports, module) {" + contents + "});";
    }
    return contents;
  }
})
