module.exports = function( grunt ) {
  'use strict';

  grunt.loadNpmTasks('grunt-jslint');

  var config = {
    app: 'src',
    dist: 'dist',
    package: grunt.file.readJSON('package.json')
  };

  grunt.initConfig({
    config: config,
    jslint: {
      app: {
        src: [
          '<%= config.app %>/scripts/**/*.js'
        ]
      }
    }
  });

  grunt.registerTask('default', ['jslint']);
};
