module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            scripts: {
                files: ['src/*.js'],
                tasks: ['uglify', 'copy', 'clean'],
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
                src: ['src/jvette.js'],
                dest: 'dist/jvette.min.js'
            },   
            options: {
                mangle: true,
                compress: {
                    sequences: true,
                    dead_code: true,
                    conditionals: true,
                    booleans: true,
                    unused: true,
                    if_return: true,
                    join_vars: true,
                    drop_console: true                        
                }
            },                            
            build: {
                files: {
                    'demo/assets/js/jvette.min.js': 'src/jvette.js'
                    
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
                    'dist/jvette.css': 'src/jvette.less',
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
                    'dist/jvette.min.css': ['dist/jvette.css'],
                    'demo/assets/css/jvette.min.css': ['dist/jvette.css'],
                    'demo/assets/css/screen.min.css': ['demo/assets/css/screen.css']
                }
            }
        },        
        copy:{
            build: {
                cwd: 'src',
                src: ['**', '!**/*.min', '!**/*.less'],
                dest: 'dist/',
                expand: true
            }
        },
        clean:{
            build: {
                src: ['demo/assets/css/screen.css']
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