'use strict';

/* > Settings
   ---------------------------------------------------------------- */

/* >> Modules
   ------------------------------------------------------ */

// Gulp
var gulp = require('gulp'),
    deploy = require('gulp-gh-pages'),
    header = require('gulp-header'),
    minify = require('gulp-minify-css'),
    prefix = require('gulp-autoprefixer'),
    preprocess = require('gulp-sass'),
    rename = require('gulp-rename'),
    size = require('gulp-size');

// Others
var del = require('del'),
    mesh = require('./package.json');

/* >> Headers
   ------------------------------------------------------ */

var headerLong = [
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

gulp.task('compile', function () {
    return gulp.src('./src/*.scss')
        .pipe(preprocess({outputStyle: 'expanded', indentWidth: 4, precision: 2}))
        .pipe(prefix({browsers: ['last 5 versions', 'android >= 2.1', '> 1%'], cascade: false}))
        .pipe(header(headerLong, {package: mesh}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('optimize', ['compile'], function () {
    return gulp.src('./dist/*.css')
        .pipe(minify())
        .pipe(header(headerShort, {package: mesh}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function () {
    del(['./dist/*']);
});

gulp.task('watch', ['build'], function () {
    gulp.watch('./src/*.scss', ['build']);
});

gulp.task('build', ['clean', 'compile', 'optimize'], function () {
    return gulp.src('./dist/*.css')
        .pipe(size({showFiles: true, gzip: true}));
});

gulp.task('deploy', function () {
    return gulp.src(['./test/*', './dist/*'], {base: '.'})
        .pipe(deploy({message: 'Update demo page'}));
});

gulp.task('default', ['build']);
