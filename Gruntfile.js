'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');

  grunt.initConfig({
    jshint: {
      files: [
        '**/*.js',
        '!node_modules/**/*',
        '!build/**/*'
      ],
      options: {
        jshintrc: true
      }
    }
  });

  grunt.registerTask('default', ['jshint']);
};
