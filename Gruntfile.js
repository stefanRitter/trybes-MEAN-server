
'use strict';
var LIVERELOAD_PORT = 35729;
var path = require('path');

module.exports = function (grunt) {
  
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
  
  // configurable paths
  var yeomanConfig = {
    app: 'public',
    dist: 'dist'
  };


  grunt.initConfig({
    yeoman: yeomanConfig,

    pkg: grunt.file.readJSON('package.json'),
    
    express: {
      options: {
        port: 3000,
        hostname: '*'
      },
      livereload: {
        options: {
          livereload: true,
          serverreload: true,
          server: path.resolve('app.js'),
          bases: [path.resolve('./.tmp'), path.resolve(__dirname, yeomanConfig.app)]
        }
      },
      test: {
        options: {
          server: path.resolve('app.js'),
          bases: [path.resolve('./.tmp'), path.resolve(__dirname, 'test')]
        }
      },
      dist: {
        options: {
          server: path.resolve('app.js'),
          bases: path.resolve(__dirname, yeomanConfig.dist)
        }
      }
    },

    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      all: [
        '*.js',
        'db/**/*.js',
        'routes/**/*.js',
        'test/**/*.js',
        '<%= yeoman.app %>/javascripts/**/*.js',
        '!<%= yeoman.app %>/js/templates.js',
        '!<%= yeoman.app %>/js/mixin/with_quick_hash.js'
      ]
    },

    watch: {
      livereload: {
        options: {
          livereload: LIVERELOAD_PORT
        },
        files: [
          '<%= yeoman.app %>/{,*/}*.html',
          '{.tmp,<%= yeoman.app %>}/styles/{,*/}*.css',
          '{.tmp,<%= yeoman.app %>}/scripts/{,*/}*.js',
          '<%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}'
        ]
      },
      scripts: {
        files: [
          '*.js',
          'db/**/*.js',
          'routes/**/*.js',
          'test/**/*.js',
          '<%= yeoman.app %>/js/**/*.js'
        ],
        tasks: ['jshint']
      }
    }
  });


  grunt.registerTask('server', function (target) {
    if (target === 'dist') {
      return grunt.task.run(['express:dist', 'express-keepalive']);
    }

    grunt.task.run([
      'express:livereload',
      'watch'
    ]);
  });

  grunt.registerTask('test', [
    'express:test'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test'
  ]);
};
