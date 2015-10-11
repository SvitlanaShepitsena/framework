'use strict'
var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var dir='dev/local-workspace/build/svitlana~radio/';
var dirCore='lib/core-components/svitlana/radio/';

gulp.task('css', function() {
	return gulp.src(dirCore+'**/*.css')
		.pipe($.minifyCss())
		.pipe(gulp.dest(dirCore));
});


gulp.task('uglify', function() {
	gulp.src([dir+'*.js','!'+dir+'bundle.js'])
		.pipe($.concat('bundle.js'))
		.pipe($.uglify({
			mangle:false
		}))
		.pipe(gulp.dest(dir))
});
gulp.task('html', function() {

	var opts = {
		conditionals: true,
	};

	gulp.src([dir+'*.html'])
		.pipe($.minifyHtml(opts))
		.pipe(gulp.dest(dir))
});
