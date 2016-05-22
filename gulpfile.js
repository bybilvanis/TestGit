var gulp = require('gulp'),
	sass = require('gulp-sass');

gulp.task('sass', function(){
	console.log('Compiling SASS files...');

	gulp.src('scss/main.scss')
	.pipe(sass({
		outputStyle: 'expanded'
	}))
	.pipe(gulp.dest('css'));
});

gulp.task('watch', function(){
	gulp.watch('scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);