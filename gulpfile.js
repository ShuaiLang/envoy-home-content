var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var bourbon = require("node-bourbon").includePaths;
var neat = require("node-neat").includePaths;

gulp.task('styles', function() {
	gulp.src('./scss/main.scss')
		.pipe(sass({
			includePaths: [bourbon,neat]
		}))
		.pipe(gulp.dest('./css'))
		.pipe(browserSync.reload({stream: true}));
});

gulp.task('serve', function() {

	browserSync.init({
		server: {
			baseDir: './'
		}
	});
	gulp.watch('./scss/*.scss', ['styles']);
	gulp.watch('./**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['styles', 'serve']);