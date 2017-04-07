var gulp = require('gulp');
var run = require('run-sequence');
var jade = require('gulp-jade');
var sass = require('gulp-sass');
var del = require('del');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');
var imagemin = require('gulp-imagemin');
var cache = require('gulp-cache');
var uglify = require('gulp-uglify');
var autoprefixer = require('gulp-autoprefixer');
var browserSync = require('browser-sync').create();
var cssmin = require('gulp-cssmin');
var jsmin = require('gulp-jsmin');
var image = require('gulp-image');

gulp.task('default', ['browser-sync']);

gulp.task('browser-sync', ['live'], function () {
    browserSync.init({
        server: {
            baseDir: "./build"
        },
        notify: false
    });
});

gulp.task('build-images', function () {
    return gulp.src('src/images/**/*.+(png|jpg|jpeg|gif|svg)')
        .pipe(gulp.dest('build/images'));
});

gulp.task('build-ttf', function () {
    return gulp.src('src/fonts/*.ttf')
        .pipe(gulp.dest('build/fonts'));
});

gulp.task('build-video', function () {
    return gulp.src('src/video/**/*.mp4')
        .pipe(gulp.dest('build/video'));
});

gulp.task('build-jade', function () {
    return gulp.src('src/**/*.jade')
        .pipe(jade()) // pip to jade plugin
        .pipe(gulp.dest('./build/')); // tell gulp our output folder
});

gulp.task('build-js', function () {
    return gulp.src('src/scripts/**/*.js')
        .pipe(gulp.dest('build/scripts'));
});

gulp.task('build-css', function () {
    return gulp.src('src/styles/**/*.scss')
        .pipe(sourcemaps.init()) // Process the original sources
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 20 versions', 'last 20 Chrome versions', '> 20%', 'ie 6-8'],
            cascade: false
        }))
        .pipe(sourcemaps.write()) // Add the map to modified source.
        .pipe(cssmin())
        .pipe(gulp.dest('./build/styles/'));
});

gulp.task('clean', function (next) {
    return del('build', next);
});

gulp.task('build', function (next) {
    run('clean', ['build-jade', 'build-js', 'build-css', 'build-images', 'build-ttf', 'build-video', 'manifest'], next);
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('src/**/*.jade', ['build-jade']);
    gulp.watch('src/scripts/**/*.js', ['build-js']);
    gulp.watch('src/styles/**/*.scss', ['build-css']);
    gulp.watch('src/images/**/*.+(png|jpg|jpeg|gif|svg)', ['build-images']);
});

gulp.task('live', function (next) {
    run('build', 'watch', next);
});
gulp.task('manifest', function () {
    return gulp.src('src/manifest.webapp')
        .pipe(gulp.dest('./build/'))
});