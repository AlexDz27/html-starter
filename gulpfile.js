const { series } = require('gulp');

function build(cb) {
  // do something
  cb();
}

function clean(cb) {
  // do something
  cb();
}

exports.build = build;
exports.default = series(clean, build);