'use strict';

var gulp = require('gulp');
var clean = require('del');
var preprocess = require('gulp-sass');
var prefix = require('gulp-autoprefixer');
var optimize = require('gulp-minify-css');
var rename = require('gulp-rename');

gulp.task('compile', function () {
    return gulp.src('./src/*.scss')
        .pipe(preprocess({outputStyle: 'expanded', precision: 2}))
        // TODO: define supported browsers.
        .pipe(prefix())
        // TODO: apply correct coding style.
        .pipe(gulp.dest('./dist/'));
});

gulp.task('optimize', ['compile'], function () {
    return gulp.src('./dist/*.css')
        .pipe(optimize())
        // TODO: add version comment dynamically.
        .pipe(rename({suffix: '.min'}))
        // TODO: log file size after gzip.
        .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function () {
    clean(['./dist/*'], function () {
        console.log('> Directory `dist` has been cleaned.');
    });
});

gulp.task('build', ['clean', 'compile', 'optimize']);

gulp.task('default', ['build']);
