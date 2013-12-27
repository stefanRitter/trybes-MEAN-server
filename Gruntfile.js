
'use strict';
var LIVERELOAD_PORT = 35729;
var path = require('path');

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
  // load all grunt tasks
  require('load-grunt-tasks')(grunt);
  

  // configurable paths
  var yeomanConfig = {
    app: 'public',
    dist: 'dist'
  };

  grunt.loadNpmTasks('grunt-express');

  grunt.initConfig({
    yeoman: yeomanConfig,
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
      }
    },
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
        'Gruntfile.js',
        '<%= yeoman.app %>/scripts/{,*/}*.js'
      ]
    },
    karma: {
      unit: {
        configFile: 'karma.conf.js',
        singleRun: true
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
    'express:test',
    'karma'
  ]);

  grunt.registerTask('default', [
    'jshint',
    'test'
  ]);
};
