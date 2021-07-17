const { src, dest, watch, series } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const webpack = require('webpack-stream');

const makeServer = () => {
  browserSync.init({
    server: { baseDir: 'src/' },
    notify: false,
  })
};

const buildStyles = () => {
  return src('src/scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('styles.css'))
    .pipe(dest('src/css'))
  ;
};


exports.buildStyles = buildStyles;
exports.serve = makeServer;

exports.watch = function() {
  watch('src/scss/**/*.scss', series(buildStyles));
}