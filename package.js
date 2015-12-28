Package.describe({
  name: 'tapfuse:instagram-caching-ui',
  version: '0.0.1',
  summary: 'Add Instagram caching UI to Services UI',
  git: 'https://github.com/TapFuse/meteor-instagram-caching-ui.git',
  documentation: 'README.md'
});

var C = 'client';
var S = 'server';
var CS = [C, S];

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.1');
  // Core
  api.use([
    'templating',
    'ecmascript'
    ]);
  // 3rd party
  api.use([
    'lauricio:less-autoprefixer@2.5.0_3',
    'mquandalle:jade@0.4.5',
    'tapfuse:collection-global@1.0.0',
    'tapfuse:services-ui',
    ]);
  api.addFiles('lib/tapfuse-instagram-caching-ui.jade', C);
  api.addFiles('lib/tapfuse-instagram-caching-ui.less', C);

  api.addFiles('lib/tapfuse-instagram-caching-ui.js', C);

});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('tapfuse:instagram-caching-ui');
  api.addFiles('tests/package-tests.js');
});
