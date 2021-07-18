const { src, dest, watch, series } = require('gulp');
const browserSync = require('browser-sync').create();
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');

const makeServer = () => {
  browserSync.init({
    server: { baseDir: 'src/' },
    notify: false,
  });
};

const buildStyles = () => {
  return src('src/scss/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('styles.css'))
    .pipe(dest('src/css'))
    .pipe(browserSync.stream())
  ;
};


exports.default = () => {
  makeServer();

  watch(['src/scss/**/*.scss', 'src/**/*.html'], series(buildStyles)).on('change', browserSync.reload);
}