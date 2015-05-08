var gulp       = require('gulp');
var concat     = require('gulp-concat');
var sass       = require('gulp-sass');
var cssmin     = require('gulp-cssmin');
var browserify = require('gulp-browserify');
var importCss  = require('gulp-import-css');
var reactify   = require('reactify');

gulp.task('copy', function () {
  gulp.src('bower_components/ionicons/fonts/ionicons.*')
    .pipe(gulp.dest('dist/fonts'));

  return gulp.src('index.html')
          .pipe(gulp.dest('dist'));
});

gulp.task('js', function() {
  return gulp.src('app/main.js')
          .pipe(browserify({
            transform: 'reactify'
          }))
          .pipe(gulp.dest('dist/js'));
});

gulp.task('sass', function() {
  return gulp.src('sass/**/*.*')
          .pipe(sass())
          .pipe(importCss())
          .pipe(cssmin())
          .pipe(gulp.dest('dist/css'));
});

gulp.task('build', ['copy', 'js', 'sass']);

gulp.task('watch', function() {
  gulp.watch(['index.html', 'app/**/*.*', 'sass/**/*.*'], ['copy', 'js', 'sass']);
});
