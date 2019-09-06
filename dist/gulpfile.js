const gulp = require('gulp');

gulp.task('processHTML', () => {
  return gulp.src('*.html').pipe(gulp.dest('dist'));
});

gulp.task('processJS',() =>{
  return gulp.src('*.js').pipe(gulp.dest('dist'));
})
