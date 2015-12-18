module.exports = function(grunt) {
   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),
      jshint: {
         options: {
           devel: true,
           curly: true,
           eqeqeq: true,
           immed: true,
           latedef: true,
           newcap: true,
           noarg: true,
           sub: true,
           undef: true,
           unused: true,
           boss: true,
           eqnull: true,
           browser: true,
           globals: {
             jQuery: true,
             angular: true,
             'fbaseballDraftRanker': true
           },
           reporter: require('jshint-stylish')
         },
         all: ['!client/vendors/**/*.js','client/**/*.js','server/**/*.js','!server.js']
      },
      bowercopy: {
         options: {
           srcPrefix: 'bower_components'
         },
         scripts: {
           options: {
             destPrefix: 'vendors'
           },
           files: {
             'libs/angular/angular.js':'angular/angular.js',
             'libs/angular-animate/angular-animate.js':'angular-animate/angular-animate.js',
             'libs/angular-ui-router/angular-ui-router.js':'angular-ui-router/release/angular-ui-router.js',
             'libs/jquery/jquery.js':'jquery/dist/jquery.js',
             'libs/bootstrap/bootstrap.js':'bootstrap/dist/js/bootstrap.js',
             'styles/bootstrap/css/bootstrap.css':'bootstrap/dist/css/bootstrap.css',
             'styles/bootstrap/css/bootstrap-theme.css':'bootstrap/dist/css/bootstrap-theme.css',
             'styles/bootstrap/fonts/':'bootstrap/dist/fonts/'
           }
         }
      },
      htmlbuild: {
         dist: {
           src: 'client/views/templates/index.template.html',
           dest: 'client/views/index.html',
           options: {
             beautify: true,
             relative: true,
             scripts: {
               devbundle: [
                 'vendors/libs/jquery/jquery.js',
                 'vendors/libs/angular/angular.js',
                 'vendors/libs/**/*.js',
                 'client/config/app.js',
                 'client/**/*.js'
               ]
             },
             styles: {
               devbundle: [
                 'vendors/styles/bootstrap/css/bootstrap.css',
                 'vendors/styles/bootstrap/css/bootstrap-theme.css',
                 'vendors/styles/main.css'
               ]
             }
           }
         }
      },
      karma: {
         unit: {
           configFile: 'karma.conf.js'
         }
      }
   });

   grunt.loadNpmTasks('grunt-contrib-jshint');
   grunt.loadNpmTasks('grunt-bowercopy');
   grunt.loadNpmTasks('grunt-html-build');
   grunt.loadNpmTasks('grunt-karma');

   grunt.registerTask('lint', ['jshint']);
   grunt.registerTask('bower', ['bowercopy']);
   grunt.registerTask('test', [
      'bowercopy',
      'jshint',
      'htmlbuild',
      'karma'
   ]);
   grunt.registerTask('build', ['htmlbuild']);
};
