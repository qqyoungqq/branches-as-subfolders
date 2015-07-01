var gulp = require('gulp'),
	minifyhtml = require('gulp-minify-html');

gulp.task('content',function(){
	gulp.src('src/index.html')
					.pipe(minifyhtml())
					.pipe(gulp.dest('build/index.html'));
});

gulp.task('default','content');