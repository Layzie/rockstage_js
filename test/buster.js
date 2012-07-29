var config = module.exports;

config['RockstageTest'] = {
  env: 'browser',
  rootPath: '../',
  src: ['lib/rockstage.js', 'rockstage.min.js'],
  tests: ['test/*-test.js']
};
