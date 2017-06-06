var gulp = require('gulp'),
    minifycss = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    watch = require('gulp-watch');

gulp.task('minifycss', function () {//压缩css
    return gulp.src('src/css/*.css')
        .pipe(minifycss())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/css'))
});
gulp.task('minifyjs1',['concat'], function () {//压缩合并后的js
    return gulp.src('src/concat/*.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('build/js'))
});
gulp.task('minifyjs2', function () {//压缩js库
    return gulp.src('src/lab/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('build/lab'))
});
//////////////////////////////////////
gulp.task('concat1', function () {//合并分支任务1
    return gulp.src(['src/lab/vue.min.js','src/js/index.js'])
        .pipe(concat('all.js'))
        .pipe(rename('index.js'))
        .pipe(gulp.dest('src/concat'))
});
gulp.task('concat', ['concat1']);//总合并
//////////////////////////////////////
gulp.task('build', ['minifycss', 'minifyjs1', 'minifyjs2']);//总压缩
gulp.task('watch', function () {//监听
    gulp.watch(['src/js/*.js', 'src/css/*.css', 'src/lab/*.js'], ['build']);
});
gulp.task('default', ['concat','build', 'watch']);//默认执行