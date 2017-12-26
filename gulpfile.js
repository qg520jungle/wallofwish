/**
 * Created by vitionchen on 16/8/24.
 * Modified by zhxg on 17/12/12.
 */

var gulp = require('gulp');
var less = require('gulp-less');
var path = require('path');
var browserSync = require('browser-sync').create();
var uglify = require('gulp-uglify');
var concatJs = require('gulp-concat');
var LessPluginCleanCSS = require('less-plugin-clean-css'),
	LessPluginAutoPrefix = require('less-plugin-autoprefix'),
	cleancss = new LessPluginCleanCSS({
		advanced: true
	}),
	autoprefix = new LessPluginAutoPrefix({
		browsers: ["last 2 versions"]
	});
/* ------------ FILE PATH ------------ */
/* -----cleancss 用于压缩CSS文件 ----- */
var filePath = {};
var commonLess = {};
filePath.src = './src';
filePath.tmp = './.tmp/';
filePath.page = ['./output/*.html'];
filePath.cjs = ['./src/js/common/*.js'];
filePath.pjs = ['./src/js/private/*.js'];
filePath.css = ['./src/css/*.css'];
filePath.less = ['./src/style/less/*.less'];
commonLess.less= ['./src/style/less/common.less'];
filePath.img = ['./output/img/*.jpg', './output/img/*.png'];


gulp.task('less', function() {
	return gulp.src(commonLess.less)
		.pipe(less({
			plugins: [cleancss,autoprefix]
		}))
		.pipe(gulp.dest('./output/css/'));
});

gulp.task('minifyjs', function() {
    return gulp.src(filePath.cjs)      //需要操作的文件
        .pipe(concatJs('common.js'))          //合并
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('./output/js/'))
        // .pipe(connect.reload());  //输出;
});
// 压缩私有js
gulp.task('minifyIndex', function() {
    return gulp.src(filePath.pjs)      //需要操作的文件
        // .pipe(rename({suffix: '.min'}))   //rename压缩后的文件名
        .pipe(uglify())    //压缩
        .pipe(gulp.dest('./output/js/'))
        // .pipe(connect.reload());  //输出
});

gulp.task('serve', function() {
	browserSync.init({
		server: {
			baseDir: "./",
			directory: true
		}
	});
	
});
gulp.task('watch',function() {
	var _tmpArr = [].concat(filePath.page, filePath.less, filePath.css, filePath.cjs, filePath.pjs, filePath.img);
	gulp.watch(filePath.less,['less']);
	gulp.watch([].concat(filePath.page, filePath.css, filePath.cjs, filePath.pjs, filePath.img),['reload']);
});

gulp.task('reload',function() {
	browserSync.reload();
});

gulp.task('default', ['serve','less','minifyjs','minifyIndex','watch']);