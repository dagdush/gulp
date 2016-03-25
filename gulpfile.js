var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require("gulp-notify");

    //sass
gulp.task('styles', function () {
    return gulp.src('./styles/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer('last 2 version'))
        .pipe(gulp.dest('./styles/css'))
        .pipe(rename({suffix: ".min"}))
        .pipe(csso())
        .pipe(gulp.dest('./styles/css/min'))
        .pipe(csso({restructure: false,sourceMap: true, debug: true}))
        .pipe(notify("Gulp css Done!"));
});
    //js
gulp.task('scripts', function() {
    return gulp.src('./scripts/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./scripts/'))
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./scripts/min'))
        .pipe(notify("Gulp js Done!"));
});

    //watch
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('./styles/**/*.scss', ['styles']);

    // Watch .js files
    gulp.watch('./scripts/**/*.js', ['scripts']);
});

