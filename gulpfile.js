var gulp = require('gulp'),
	minifyhtml = require('gulp-minify-html');

gulp.task('default',function(){
	gulp.src('src/index.html')
					.pipe(minifyhtml())
					.pipe(gulp.dest('build/'));
});