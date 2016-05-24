    #global module:false

"use strict"

module.exports = (grunt) ->
  grunt.loadNpmTasks "grunt-bower-task"
  grunt.loadNpmTasks "grunt-contrib-connect"
  grunt.loadNpmTasks "grunt-contrib-copy"
  grunt.loadNpmTasks "grunt-contrib-watch"
  grunt.loadNpmTasks "grunt-exec"

  grunt.initConfig

    copy:
      jquery:
        files: [{
          expand: true
          cwd: "bower_components/jquery/dist/"
          src: "jquery.min.js"
          dest: "js/"
        }]
      materialize:
        files: [{
          expand: true
          cwd: "bower_components/Materialize/sass/components"
          src: "**/*"
          dest: "_sass/components"
        },{
          expand: true
          cwd: "bower_components/Materialize/dist/js"
          src: "materialize.min.js"
          dest: "js/"
        }]
      materialdesignicons:
        files: [{
          expand: true
          cwd: "bower_components/material-design-icons/iconfont"
          src: "**/*"
          dest: "fonts/"
        }]
      materialdesigniconic:
        files: [{
          expand: true
          cwd: "bower_components/material-design-iconic-font/dist/css"
          src: "material-design-iconic-font.css"
          dest: "css/"
        },{
          expand: true
          cwd: "bower_components/material-design-iconic-font/dist/fonts"
          src: "**/*"
          dest: "fonts/"
        }]
      slickjs:
        files: [{
          expand: true
          cwd: "bower_components/slick-carousel/slick"
          src: "slick.css"
          dest: "css/"
        },{
          expand: true
          cwd: "bower_components/slick-carousel/slick"
          src: "slick.min.js"
          dest: "js/"
        }]

    exec:
      jekyll:
        cmd: "jekyll build --trace"

    watch:
      options:
        livereload: true
      source:
        files: [
          "_drafts/**/*"
          "_includes/**/*"
          "_layouts/**/*"
          "_posts/**/*"
          "_sass/**/*"
          "blog/**/*"
          "about/**/*"
          "css/**/*"
          "js/**/*"
          "_config.yml"
          "*.html"
          "*.json"
          "*.xml"
          "*.md"
        ]
        tasks: [
          "exec:jekyll"
        ]

    connect:
      server:
        options:
          port: 4000
          base: '_site'
          livereload: true

  grunt.registerTask "build", [
    "copy"
    "exec:jekyll"
  ]

  grunt.registerTask "serve", [
    "build"
    "connect:server"
    "watch"
  ]

  grunt.registerTask "default", [
    "serve"
  ]
