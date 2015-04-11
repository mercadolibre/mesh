'use strict';

/* > Settings
   ---------------------------------------------------------------- */

/* >> Modules
   ------------------------------------------------------ */

// Gulp
var gulp = require('gulp');
var header = require('gulp-header');
var minify = require('gulp-minify-css');
var prefix = require('gulp-autoprefixer');
var preprocess = require('gulp-sass');
var rename = require('gulp-rename');
var size = require('gulp-size');

// Others
var del = require('del');
var mesh = require('./package.json');

/* >> Headers
   ------------------------------------------------------ */

var headerLong =
    [
        '/**',
        ' * <%= package.name %>',
        ' * <%= package.description %>',
        ' * @version v<%= package.version %>',
        ' * @license <%= package.license %>',
        ' */\n\n'
    ].join('\n');

var headerShort = '/*! <%= package.name %> v<%= package.version %> | <%= package.license %> */\n';

/* > Tasks
   ---------------------------------------------------------------- */

gulp.task('compile', function() {
    return gulp.src('./src/*.scss')
        .pipe(preprocess({outputStyle: 'expanded', precision: 2}))
        // TODO: define supported browsers.
        .pipe(prefix())
        // TODO: apply correct coding style.
        .pipe(header(headerLong, {package: mesh}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('optimize', ['compile'], function() {
    return gulp.src('./dist/*.css')
        .pipe(minify())
        .pipe(header(headerShort, {package: mesh}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function() {
    del(['./dist/*']);
});

gulp.task('watch', ['build'], function() {
    gulp.watch('./src/*.scss', ['build']);
});

gulp.task('build', ['clean', 'compile', 'optimize'], function() {
    return gulp.src('./dist/*.css')
        .pipe(size({showFiles: true, gzip: true}))
});

gulp.task('default', ['build']);
