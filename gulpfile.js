/**
 * Require packages
 * 
 * TODO: make sure everything from package is used
 */
var gulp = require('gulp'),
  autoprefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  watchify = require('watchify');

/**
 * Directory Config
 */
var dirConfig = {
  styles: {
    entries: './src/styles/**/*.scss',
    src: './src/styles/index.scss',
    dist: './public/styles/',
  }
};

/**
 * Tasks:
 * 
 * - Styles
 * - Styles:Watch
 * - Watch
 * - Build
 * - Default
 */

/**
 * STYLES
 *
 * Compile and compress SASS
 * Autoprefixer's 'browser' option is supplied by .browserslistrc
 */
gulp.task('styles', function() {
  gulp.src([
      dirConfig.styles.entries
    ])
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest(dirConfig.styles.dist));
});

/**
 * STYLES:WATCH
 *
 * Watch SASS for changes
 * 
 */
gulp.task('styles:watch', function() {
  return gulp.watch(dirConfig.styles.entries, ['styles']);
});

/**
 * WATCH
 *
 * Watch for changes in both styles and scripts
 */
gulp.task('watch', ['styles:watch']);

/**
 * BUILD
 *
 * Wrapper for bundled build task
 */
gulp.task('build', ['styles']);

/**
 * DEFAULT
 *
 * No default task, simply let the users know a command to see all available tasks
 */
gulp.task('default', function() {
  console.log('\nThis gulpfile doesn\'t do anything by default. You can use the following command to see a list of available tasks:\n\n$ gulp --tasks-simple\n');
});
