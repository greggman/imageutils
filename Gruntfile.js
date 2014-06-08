"use strict";

module.exports = function(grunt) {

  grunt.initConfig({
    jsdoc: {
      main: {
        src: ['imageutils.js'],
        options: {
          destination: 'docs',
        },
      },
    },
    clean: [
        'docs',
    ],
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-jsdoc');

  grunt.registerTask('default', ['clean', 'jsdoc']);
};

