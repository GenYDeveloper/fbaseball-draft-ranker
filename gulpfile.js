(function() {
  var gulp = require('gulp'),
    stylish = require('jshint-stylish'), // jshint command line reporter
    jshint = require('gulp-jshint'), // jshint gulp plugin
    bower = require('bower-main'), // copies main bower files to reduce clutter in application
    copy = require('copy'), // copy utility
    clean = require('gulp-clean'), // delete utility
    inject = require('gulp-inject'), // inject scripts and css into html files
    karma = require('karma').Server; // karma runner

  var bowerJSFiles = bower('js'); // main library JS files

  /**
   * Copy main bower dependencies to the application's vendor dir.
   */
  gulp.task('copy:dev', function() {
    return gulp.src(bowerJSFiles.normal)
      .pipe(gulp.dest('client/vendor/js'));
  });

  /**
   * Deletes all external application dependencies/libraries.
   */
  gulp.task('clean:vendor', function() {
    return gulp.src('client/vendor/*', {read:false})
      .pipe(clean());
  });

  /**
   * Deletes the contents of the dist directory.
   */
  gulp.task('clean:dist', function() {
    return gulp.src('dist/*', {read: false})
      .pipe(clean());
  });

  /**
   * Copy main bootstrap css to the application's vendor dir.
   */
  gulp.task('copy:bootstrap', function(cb) {
    return copy('bower_components/bootstrap/dist/css/bootstrap.css', 'client/vendor/css', cb);
  });

  /**
   * Copy thematic bootstrap css to the application's vendor dir.
   */
  gulp.task('copy:bootstrapTheme', function(cb) {
    return copy('bower_components/bootstrap/dist/css/bootstrap-theme.css', 'client/vendor/css', cb);
  });

  /**
   * Copy bootstrap fonts to the application's vendor dir.
   */
  gulp.task('copy:bootstrapFonts', function(cb) {
    return copy('bower_components/bootstrap/dist/fonts/*', 'client/vendor/fonts', cb);
  });

  /**
   * Lint all of the application-centrict non-test files with JSHint.  Includes 2 reporters for
   * command line beautification and failing the build when there is an error.
   */
  gulp.task('lint', function() {
    return gulp.src('./client/**/*.js')
      .pipe(jshint())
      .pipe(jshint.reporter(stylish))
      .pipe(jshint.reporter('fail'));
  });

  /**
   * Inject all application-centric and external library JS and CSS into index.html and copy it to
   * the dist dir.  The dist dir will be used in production and development.
   */
  gulp.task('inject:index', function() {
    var target = gulp.src('./client/index.html');
    var sources = gulp.src([
      './client/vendor/js/jquery.js',
      './client/vendor/js/angular.js',
      './client/vendor/js/*.js',
      './client/app.js',
      './client/app.constants.js',
      './client/app.run.js',
      './client/*.js',
      './client/**/*.js',
      './client/vendor/css/*.css',
      '!./client/**/*.spec.js'
    ], {read: false});

    return target.pipe(gulp.dest('./dist'))
      .pipe(inject(sources, {relative: true}))
      .pipe(gulp.dest('./dist'));
  });

////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////// Main tasks //////////////////////////////////
////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////

  gulp.task('build', gulp.series(
    'clean:vendor',
    'clean:dist',
    'copy:dev',
    'copy:bootstrap',
    'copy:bootstrapTheme',
    'copy:bootstrapFonts',
    'inject:index'
  ));
})();