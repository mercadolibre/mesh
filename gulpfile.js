'use strict';

var gulp = require('gulp');
var batch = require('gulp-batch');
var clean = require('del');
var header = require('gulp-header');
var optimize = require('gulp-minify-css');
var project = require('./package.json');
var prefix = require('gulp-autoprefixer');
var preprocess = require('gulp-sass');
var rename = require('gulp-rename');
var size = require('gulp-size');
var watch = require('gulp-watch');

var headerLong = ['/**',
  ' * <%= project.name %>',
  ' * <%= project.description %>',
  ' * @version v<%= project.version %>',
  ' * @license <%= project.license %>',
  ' */',
  ''].join('\n');

var headerShort = '/*! <%= project.name %> v<%= project.version %> | <%= project.license %> */\n';

gulp.task('compile', function() {
    return gulp.src('./src/*.scss')
        .pipe(preprocess({outputStyle: 'expanded', precision: 2}))
        // TODO: define supported browsers.
        .pipe(prefix())
        // TODO: apply correct coding style.
        .pipe(header(headerLong, {project: project}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('optimize', ['compile'], function() {
    return gulp.src('./dist/*.css')
        .pipe(optimize())
        .pipe(header(headerShort, {project: project}))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./dist/'));
});

gulp.task('clean', function() {
    clean(['./dist/*']);
});

gulp.task('watch', function() {
    watch('./src/*.scss', batch(function() {
        gulp.start('build');
    }));
});

gulp.task('build', ['clean', 'compile', 'optimize'], function() {
    return gulp.src('./dist/*.css')
        .pipe(size({showFiles: true, gzip: true}))
});

gulp.task('default', ['build']);
