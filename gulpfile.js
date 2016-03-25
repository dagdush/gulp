var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var csso = require('gulp-csso');
var rename = require("gulp-rename");
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var notify = require("gulp-notify");

/*SASS*/
gulp.task('my', function () {
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
/*js*/
gulp.task('scripts', function() {
    return gulp.src('./scripts/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./scripts/'))
        .pipe(uglify())
        .pipe(rename({suffix: ".min"}))
        .pipe(gulp.dest('./scripts/min'));
});
/*sass watch*/
gulp.task('sass:watch', function () {
    gulp.watch('./styles/**/*.scss', ['sass']);
});

/*default*/
gulp.task('default', function() {
    // place code for your default task here
});

