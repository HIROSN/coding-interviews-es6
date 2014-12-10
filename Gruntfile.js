'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-traceur-simple');
  grunt.loadNpmTasks('grunt-simple-mocha');

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
    },

    clean: {
      src: ['build/']
    },

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

  grunt.registerTask('default', [
    'jshint',
    'clean',
    'traceur',
    'simplemocha'
  ]);
};
