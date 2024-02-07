const gulp = require('gulp');
const connect = require('gulp-connect');
const historyApiFallback = require('connect-history-api-fallback');

// Tasks
require('./gulp/dev.js');
require('./gulp/docs.js');

gulp.task(
	'default',
	gulp.series(
		'clean:dev',
		gulp.parallel('html:dev', 'sass:dev', 'images:dev', 'fonts:dev', 'files:dev', 'js:dev'),
		gulp.parallel('server:dev', 'watch:dev')
	)
);

gulp.task(
	'docs',
	gulp.series(
		'clean:docs',
		gulp.parallel('html:docs', 'sass:docs', 'images:docs', 'fonts:docs', 'files:docs', 'js:docs'),
		gulp.parallel('server:docs')
	)
);

// Custom task for handling 404 pages
gulp.task('404', function () {
	return gulp.src('./notFound.html') // Path to your custom 404 page	  
	  .pipe(gulp.dest('./dist')) // Output the 404 page to the desired destination
  });
  
  // Default task with 404 task included and historyApiFallback middleware
  gulp.task('default', gulp.series('404', function () {
	gulp.start('server:dev');
  }));
  
  // Docs task with 404 task included and historyApiFallback middleware
  gulp.task('docs', gulp.series('404', function () {
	gulp.start('server:docs');
  }));