//var Promise = require('es6-promise').Promise;

var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');

var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');

var addsrc = require('gulp-add-src');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var uglify = require('gulp-uglify');

var plumber = require('gulp-plumber');

gulp.task('sass', function () {
    gulp.src('./scss/**/*.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest('./'));

    gutil.log('Compiled styles.css');
});

gulp.task('js', function () {
    gulp.src('./js/**/*.js')
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'))
        .pipe(addsrc.prepend([
            './bower_components/jquery/dist/jquery.min.js',
            './bower_components/insertionQuery/insQ.min.js'
        ]))
        .pipe(uglify())
        .pipe(concat('injected.js'))
        .pipe(gulp.dest('./'));

    gutil.log('Compiled injected.js');
});

gulp.task('watch', function() {
    gulp.watch('./scss/**/*.scss', ['sass']);
    gulp.watch('./js/**/*.js', ['js']);
});

gulp.task('default', ['watch', 'sass', 'js']);
