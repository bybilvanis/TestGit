var gulp       = require('gulp'),
  sass         = require('gulp-sass'),
  browserSync  = require('browser-sync').create(),
  reload	   = browserSync.reload;

gulp.task('sass', function() {
  return gulp.src('src/scss/style.scss')
    .pipe(sass({
      outputStyle: 'compressed',
      includePaths: ['bower_components/bootstrap/scss']
    }))
    .pipe(gulp.dest('dist/css'))
    .pipe(browserSync.stream());
});

gulp.task('js', function() {
  return gulp.src([
      'bower_components/jquery/dist/jquery.js',
      'bower_components/tether/dist/js/tether.js',
      'bower_components/bootstrap/dist/js/bootstrap.js',
      'src/js/**/*.js'
    ])
    .pipe(gulp.dest('dist/js'))
    .pipe(browserSync.stream());
});

gulp.task('browser-sync', function () {
  browserSync.init({
    proxy: "192.168.33.10",
    open: false
  })
});

gulp.task('serve', ['browser-sync'], function () {
  gulp.watch("css/**/*.css").on('change', reload);
  gulp.watch("*.html").on('change', reload);
});

gulp.task('watch', function () {
  gulp.watch('src/scss/**/*.scss', ['sass']);
  gulp.watch('src/js/**/*.js', ['js']);
});

gulp.task('img', function() {
  gulp.src('src/img/**/*.+(png|jpg|gif|svg)')
    .pipe(gulp.dest('dist/img'));
});

gulp.task('html', function() {
  gulp.src('src/*.html')
    .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['browser-sync', 'serve', 'sass', 'js', 'watch', 'img', 'html']);