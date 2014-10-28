var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  autoprefixer = require('gulp-autoprefixer'),
  livereload = require('gulp-livereload');

gulp.task('css', function() {
  return gulp.src('public/css/*.css')
    .pipe(autoprefixer('last 2 versions', { map: false }))
    .pipe(gulp.dest('public/css-dist'));
});

gulp.task('develop', ['css', 'watch'], function () {
  livereload.listen();
  nodemon({
    script: 'bin/www',
    ext: 'js ejs',
  }).on('restart', function () {
    setTimeout(function () {
      livereload.changed();
    }, 500);
  });
});

gulp.task('watch', function() {
  gulp.watch('public/css/*.css', ['css']);
});

gulp.task('default', ['develop']);
