
let gulp = require('gulp');
let minifyJS = require('gulp-babel-minify');
let minifyCSS = require('gulp-clean-css');
let connect = require('gulp-connect');
let sass = require('gulp-sass');

gulp.task('default', function () {
    console.log('default task');
});

gulp.task('build', function () {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'));
    gulp.src('./src/**/*.scss')
        .pipe(sass({
            outputStyle : 'compressed'
        }).on('error',sass.logError))
        .pipe(gulp.dest('./dist'));
    gulp.src('./src/**/*.js')
        .pipe(minifyJS())
        .pipe(gulp.dest('./dist'));
});

gulp.task('refreshHTML', function () {
    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
});

gulp.task('refreshCSS', function () {
    gulp.src('./src/**/*.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }).on("error",sass.logError))
        .pipe(gulp.dest('./dist'));
});


gulp.task('refreshJS', function () {
    gulp.src('./src/**/*.js')
        .pipe(minifyJS())
        .pipe(gulp.dest('./dist'));
})

gulp.task('server', function () {
    connect.server({
        name: '',
        root: ['src'],
        port: 9090,
        livereload: true
    });

    // gulp.watch(['./src/**/*.html'], ['refreshHTML']);
    // gulp.watch(['./src/**/*.scss'], ['refreshCSS', 'refreshHTML']);
    // gulp.watch(['./src/**/*.js'], ['refreshJS', 'refreshHTML']);

});










































