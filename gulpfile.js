var path = require('path'),
    gulp = require('gulp'),
    connect = require('gulp-connect'),
    less = require('gulp-less');
    miniCSS = require('gulp-minify-css');

var compile = function(file) {
    gulp.src(file)
        .pipe(less().on('error', function(err) {
            console.error(err.stack);
        }))
        .pipe(miniCSS())
        .pipe(gulp.dest('.'))
        .pipe(connect.reload());
};

gulp.task('default', function() {
    gulp.watch(['*.less'], function(data) {
        console.info(data.type + ': ' + data.path);
        compile(data.path);
    });
    compile('*.less');
});
