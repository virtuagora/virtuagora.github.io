module.exports = function(grunt) {


    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> v<%= pkg.version %>, <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'public/assets/js/app.js',
                dest: 'public/assets/js/app.min.js'
            }
        },
        jshint: {
            options: {
                browser: true,
                globals: {
                    jQuery: true
                }
            },
            all: {
                files: {
                    src: ['public/js/src/**/*.js']
                }
            }
        },
        concat: {
            options: {
            },
            dist: {
                src: [
                    'bower_components/jquery/dist/jquery.min.js',
                    'bower_components/bootstrap/dist/js/bootstrap.min.js',
                    'bower_components/metisMenu/dist/metisMenu.min.js',
                    'public/assets/js/src/**/*.js'
                ],
                dest: 'public/assets/js/app.js'
            }
        },
        less: {
            development: {
                options: {
                    paths: ['public/assets/less'],
                    yuicompress: true
                },
                files: {
                    'public/assets/css/app.css':'public/assets/less/style.less'
                }
            }
        },
        cssmin: {
            compress: {
                files: {
                    'public/assets/css/app.min.css': ['public/assets/css/app.css']
                }
            }
        },
        watch: {
            scripts: {
                files: ['Gruntfile.js','public/js/src/**/*.js','public/js/vendor/**/*.js'],
                tasks: ['jshint','concat','less'],
            },
            less: {
                files: 'public/assets/less/**/*.less',
                tasks: ['less'],
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('deploy', ['jshint','concat','uglify','less','cssmin']);
    grunt.registerTask('default', ['jshint','concat','less','watch']);
};
