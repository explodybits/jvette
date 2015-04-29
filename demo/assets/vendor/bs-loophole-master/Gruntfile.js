module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['src/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false
                }
            },
            css: {
                files: ['src/*.less', 'demo/assets/less/*.less']
               ,tasks: ['less', 'cssmin']               
            },
            remove: {
                files: ['demo/assets/css/screen.css'],
                tasks: ['copy', 'clean']
            }            
        },        
        uglify: {
            js: {
                src: ['src/bs-loophole.js'],
                dest: 'dist/bs-loophole.min.js'
            },
            build: {
                files: {
                    'demo/assets/js/bs-loophole.min.js': 'src/bs-loophole.js'
                }
            }
        },
        less: {
            development: {
                options: {
                    paths: ['src/'],
                    yuicompress: false
                },
                files: {
                    'dist/screen.css': 'src/screen.less',
                    'demo/assets/css/screen.css': 'demo/assets/less/screen.less'
                }
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/screen.min.css': ['dist/screen.css'],
                    'demo/assets/css/screen.min.css': ['demo/assets/css/screen.css']
                }
            }
        },                
        copy:{
            build:{
                cwd: 'src',
                src: ['**', '!**/*.min', '!**/*.less'],
                dest: 'dist/',
                expand: true
            }
        },
        clean:{
            build: {
                src: ['dist/screen.min.css']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-watch');    
    grunt.loadNpmTasks('grunt-contrib-less');  
    grunt.loadNpmTasks('grunt-contrib-cssmin');  
    grunt.loadNpmTasks('grunt-contrib-uglify');    
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.registerTask('default', ['watch']);        
    grunt.registerTask(
        'build',
        'Compiles all the assets and copies the files to the build directory.',
       ['uglify', 'less', 'cssmin', 'copy', 'clean']
    );
};