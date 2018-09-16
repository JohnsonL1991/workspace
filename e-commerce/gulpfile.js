let gulp = require('gulp');
let minifyJS = require('gulp-babel-minify');
let minifyCSS = require('gulp-clean-css');
let connect = require('gulp-connect');
// let connectProxy = require('gulp-connect-proxy');
let sass = require('gulp-sass');


gulp.task('default', function () {
    console.log('default-task!!!!');
});

gulp.task('build', function () {

    gulp.src('./src/**/*.html')
        .pipe(gulp.dest('./dist'));

    gulp.src('./src/**/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist'));
    gulp.src('./src/**/*.png')
        .pipe(gulp.dest('./dist'));
    gulp.src('./src/**/*.jpg')
        .pipe(gulp.dest('./dist'));
    gulp.src('./src/**/*.scss')
        .pipe(sass({
            outputStyle: 'expanded'
        }), sass.logError)
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


gulp.task('refreshSCSS', function () {
    gulp.src('./src/**/*.scss')
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(gulp.dest('./dist'))

});

gulp.task('refreshCSS', function () {
    gulp.src('./src/**/*.css')
        .pipe(minifyCSS())
        .pipe(gulp.dest('./dist'));
});

gulp.task('refreshJS', function () {
    gulp.src('./src/**/*.js')
        .pipe(minifyJS())
        .pipe(gulp.dest('./dist'));

});

// gulp.task('server', function () {
//     connect.server({
//         name: '',
//         root: ['dist'],
//         port: 8080,
//         livereload: true
//     });
//     gulp.watch(['./src/**/*.html'], ['refreshHTML']);
//     gulp.watch(['./src/**/*.css'], ['refreshCSS', 'refreshHTML']);
//     gulp.watch(['./src/**/*.scss'], ['refreshSCSS', 'refreshHTML']);
//     gulp.watch(['./src/**/*.js'], ['refreshJS', 'refreshHTML']);
// })

gulp.task('serverproxy', function () {
    connect.server({
      root: ['dist'],
      port: 8080,
      livereload: true,
      middleware: function (connect, opt) {
        let Proxy = require('gulp-connect-proxy');
        opt.route = '/proxy';
        let proxy = new Proxy(opt);
        return [proxy];
      }
    });
    gulp.watch(['./src/**/*.html'], ['refreshHTML']);
    gulp.watch(['./src/**/*.css'], ['refreshCSS', 'refreshHTML']);
    gulp.watch(['./src/**/*.scss'], ['refreshSCSS', 'refreshHTML']);
    gulp.watch(['./src/**/*.js'], ['refreshJS', 'refreshHTML']);
  });