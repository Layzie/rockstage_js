#global module:false
module.exports = (grunt) ->
  # Project configuration.
  grunt.initConfig
    pkg: grunt.file.readJSON 'package.json'

    banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
      '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
      '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
      '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
      ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
    lint:
      files: ['Gruntfile.coffee', 'lib/**/*.js', '*.js']

    buster:
      test:
        config: './test/buster.js'

    concat:
      options:
        banner: '<%= banner %>'
        stripBanners: true
      dist:
        src: 'lib/<%= pkg.name %>.js'
        dest: '<%= pkg.name %>.js'
    watch:
      files: '<%= lint.files %>'
      tasks: ['buster']

    jshint:
      options:
        curly: true
        eqeqeq: true
        immed: true
        latedef: true
        newcap: true
        noarg: true
        sub: true
        undef: true
        boss: true
        eqnull: true
        browser: true

      globals:
        browser: true
        devel: true

    uglify:
      options:
        banner: '<%= banner %>'
      dist:
        files:
          '<%= pkg.name %>.min.js': '<%= concat.dist.dest %>'


  # Default task.
  grunt.registerTask 'default', ['concat', 'uglify']

  # Develop task.
  grunt.registerTask 'develop', ['buster']

  # load grunt-buster
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-contrib-jshint'
  grunt.loadNpmTasks 'grunt-buster'
