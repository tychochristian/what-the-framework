'use strict';
 
var
  gulp = require('gulp'),
  sass = require('gulp-sass'),
  browserSync = require('browser-sync').create();

var src = './src/scss/**/*.scss';
var dist = './dist';

function scss() {
  return (
    gulp
      .src(src)
      .pipe(sass())
      .on("error", sass.logError)
      .pipe(gulp.dest(dist))
      .pipe(browserSync.stream())
  );
}

function watch(){
  gulp.watch(src, scss)
}

function serve() {
  browserSync.init({
    server: "./dist"
  });
  gulp.watch(src, scss);
  gulp.watch("./**/*").on('change', browserSync.reload);
}

exports.serve = serve;
exports.scss = scss;
exports.watch = watch;
