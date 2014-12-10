'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-traceur-simple');
  grunt.loadNpmTasks('grunt-simple-mocha');

  grunt.initConfig({
    traceur: {
      options: {
        includeRuntime: true,
        traceurOptions: '--experimental --source-maps'
      },

      build: {
        files: {
          'build/all_tests.js': ['lib/*.js', 'test/*.js']
        }
      }
    },

    simplemocha: {
      src: ['build/**/*.js']
    }
  });

  grunt.registerTask('default', ['traceur', 'simplemocha']);
};
