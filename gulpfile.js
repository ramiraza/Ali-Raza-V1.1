
const gulp 					= require('gulp');
const browserSync 	= require('browser-sync');
const gutil					= require('gulp-util');
// including node modules
const path 					= require('path');
const cp 						= require('child_process');

var jekyll = process.platform === 'win32' ? 'jekyll.bat' : 'jekyll';


gulp.task('jekyll-build', function(done) {
	return cp.spawn(jekyll, ['build', {stdio: 'inherit'}])
		.on('close', done)
});

gulp.task('rebuild', ['jekyll-build'], function() {
	browserSync.reload();
});


gulp.task('browser-sync', ['jekyll-build'], function() {
	browserSync({
		server: {
			baseDir: '_site'
		},
		notify: false,
		port: 8080
	});
});


gulp.task('watch', function() {
	gulp.watch(
		['*.html', '*.yml','_includes/*.html', '_layouts/*.html', '_sass/*.sass', '_posts/*.md', 'assets/**/**', '_data/**.**'], [
		'rebuild']
	);
});

gulp.task('default', ['browser-sync', 'watch'])
