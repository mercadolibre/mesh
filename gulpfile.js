'use strict';

var gulp = require('gulp');

// load plugins
var $ = require('gulp-load-plugins')();

gulp.task('styles', function () {
    return gulp.src('src/styles/mesh.less')
        .pipe($.less())
        .pipe($.recess({
          noOverqualifying: false,
          noUniversalSelectors: false
        }))
        .pipe($.autoprefixer())
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});

gulp.task('css-min',['styles'], function () {
    return gulp.src('dist/mesh.css')
        .pipe($.csso())
        .pipe($.rename({
            suffix: ".min"
        }))
        .pipe(gulp.dest('dist'))
        .pipe($.size());
});

gulp.task('demo-styles', function () {
    return gulp.src('src/styles/*.less')
        .pipe($.less())
        .pipe($.recess({
          noOverqualifying: false,
          noUniversalSelectors: false
        }))
        .pipe($.autoprefixer())
        .pipe(gulp.dest('src/styles/css'));
});

gulp.task('demo', ['demo-styles'], function () {
    return gulp.src(['src/*/**', 'src/index.html'])
        .pipe(gulp.dest('demo'))
        .pipe($.size());
});

gulp.task('upload-demo',['demo'], function () {
    return gulp.src('demo')
        .pipe($.subtree({
            message: 'Demo upload'
        }));
});

gulp.task('clean', function () {
    return gulp.src(['.tmp', 'dist'], { read: false }).pipe($.clean());
});

gulp.task('build', ['css-min']);

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});

gulp.task('connect', function () {
    var connect = require('connect');
    var app = connect()
        .use(require('connect-livereload')({ port: 35729 }))
        .use(connect.static('src'))
        .use(connect.static('.tmp'))
        .use(connect.directory('src'));

    require('http').createServer(app)
        .listen(9000)
        .on('listening', function () {
            console.log('Started connect web server on http://localhost:9000');
        });
});

gulp.task('serve', ['connect', 'demo-styles'], function () {
    require('opn')('http://localhost:9000');
});


gulp.task('watch', ['connect', 'serve'], function () {
    var server = $.livereload();

    // watch for changes

    gulp.watch([
        'src/*.html',
        '.tmp/styles/**/*.css',
        'src/scripts/**/*.js',
        'src/images/**/*'
    ]).on('change', function (file) {
        server.changed(file.path);
    });

    gulp.watch('src/styles/**/*.less', ['demo-styles']);
});

