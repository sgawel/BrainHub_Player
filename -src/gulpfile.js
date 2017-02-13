'use strict';

var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var autoprefixer = require('gulp-autoprefixer');
// var cleanCSS = require('gulp-clean-css');

// styles
gulp.task('styles', function () {
  return gulp.src('-css/*.css')
    .pipe(concatCss('styles.css'))
    .pipe(gulp.dest('-build'))
    .pipe(autoprefixer({browsers: ['last 2 versions']}))
    .pipe(gulp.dest('../-dist/-css'));
});

// gulp.task('minify-css', function() {
//   return gulp.src('-build/styles.css')
//     .pipe(cleanCSS())
//     .pipe(gulp.dest('../-dist/-css/styles.min.css'));
// });

//copy files
gulp.task('copy', function(){
    // return gulp.src('-assets/**/*').pipe(gulp.dest('../-dist/'));
    gulp.src('-assets/**/*')
      .pipe(gulp.dest('../-dist/-assets'));
    gulp.src('-js/**/*')
      .pipe(gulp.dest('../-dist/-js'));
});

// default
gulp.task('default', ['styles', 'copy']);
