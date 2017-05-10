module.exports = function(grunt) {
  grunt.initConfig({
    browserify: {
      '../dist/app.js': ['../js/main.js']
    },
    jshint: {
      options: {
        predef: ["document", "console", "solarSystem"], //allows for predefined things not found in js
        esnext: true, //allows for ES6
        globalstrict: true,
        globals: {"$": true, "solarSystem" : true}, //name value pairs, allows to define global vars used in many files.
        browserify: true
      },
      files: ['../js/**/*.js'] //location of javascript files
    },
    sass: { //setup sass compilation
      dist: {
        files: {
          '../css/styles.css': '../scss/styles.scss'
        }
      }
    },
    watch: { //automatically watch for changes
      javascripts: {
        files: ['../js/**/*.js'],
        tasks: ['jshint']
      },
      sass: {
        files: ['../scss/**/*.scss'],
        tasks: ['sass']
      },
      browserify: {
        files: ['../js/*.js'],
        tasks: ['browserify']
      }
    }
  });

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
  grunt.registerTask('default', ['jshint', 'sass', 'browserify', 'watch']);
};