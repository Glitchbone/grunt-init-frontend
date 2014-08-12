module.exports = function(grunt) {
	
	grunt.initConfig({
        
		pkg: grunt.file.readJSON('package.json'),

        config: {
            "buildPath": "{%= build_path %}",
            "tplPath": "src/templates",
            "tplExt": ".hbs",
            "banner": '/*! WARNING! THIS IS AN AUTO GENERATED FILE, DO NOT MODIFY! <%= pkg.name %> - <%= pkg.author.name %> - <%= grunt.template.today("yyyy-mm-dd hh:mm") %> */'
        },
        
        connect: {
            options: {
                port: 8080,
                livereload: 35729,
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    open: true,
                    base: [
                        '<%= config.buildPath %>'
                    ]
                }
            }
        },
        
        watch: {
            options: {
                atBegin: true
            },
            scripts: {
                files: 'src/js/**/*.js',
                tasks: ['uglify:scripts', 'clean'],
                options: {
                    livereload: true
                }
            },
            sass: {
                files: 'src/sass/**/*.scss',
                tasks: ['compass', 'cssmin:sass', 'clean'],
                options: {
                    livereload: true
                }
            },
			html: {
				files: 'src/*.html',
				tasks: ['copy:html', 'clean'],
                options: {
                    livereload: true
                }
			},
            files: {
                files: 'src/assets/files/**/*.*',
                tasks: ['copy', 'clean'],
                options: {
                    livereload: true
                }
            },
            templates: {
                files: '<%= config.tplPath %>/**/*<%= config.tplExt %>',
				tasks: ['handlebars', 'uglify:scripts', 'clean'],
                options: {
                    livereload: true
                }
            },
			img: {
				files: 'src/assets/img/**/*.{png,jpg,gif}',
				tasks: ['imagemin', 'clean'],
                options: {
                    livereload: true
                }
			}
        },
        
		handlebars: {
			compile: {
				options: {
					namespace: "Handlebars.templates",
					processName: function(filePath) {
                        
                        var path = filePath.replace(/\\/g, '/');
                        return filePath.replace(/\\/g, '/').substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'));
                        
					}
				},
				files: {
					'tmp/templates.js': '<%= config.tplPath %>/**/*<%= config.tplExt %>'
				}
			}
		},
        
        compass: {
            dist: {
                options: {
                    outputStyle: 'compressed',
                    sassDir: 'src/sass',
                    cssDir: 'tmp'
                }
            }
        },
        
		copy: {
			html: {
				files: [
					{
                        expand: true,
                        cwd: 'src/',
						src: ['*.html'], 
						dest: '<%= config.buildPath %>/'
					}
				]
			},
            vendors: {
				files: [
    				{ 
                        expand: true,
                        cwd: 'bower_components/html5shiv/dist/',
                        src: ['html5shiv.min.js'],
                        dest: '<%= config.buildPath %>/js/vendors/'
    				},
    				{ 
                        expand: true,
                        cwd: 'bower_components/modernizr/',
                        src: ['modernizr.js'],
                        dest: '<%= config.buildPath %>/js/vendors/'
    				}
                    
				]
            },
            files: {
				files: [
    				{ 
                        expand: true,
                        cwd: 'src/assets/files/',
                        src: ['**'],
                        dest: '<%= config.buildPath %>/files/'
    				}
				]
            },
            fonts: {
				files: [
				    {
                        expand: true,
                        cwd: 'src/assets/fonts/',
                        src: ['**'],
                        dest: '<%= config.buildPath %>/fonts/'
				    },
					{
                        expand: true,
                        cwd: 'bower_components/fontawesome/fonts/',
                        src: ['**'],
                        dest: '<%= config.buildPath %>/fonts/'
					}
				]
            }
		},
        
        uglify: {
            options: {
                mangle: false
            },
            scripts: {
                files: {
                    '<%= config.buildPath %>/js/main.min.js': [
                        'tmp/templates.js',
                        'src/js/**/*.js'
                    ]
                }
            },
            vendors: {
                files: {
                    '<%= config.buildPath %>/js/vendors.min.js': [
                        'tmp/vendors.js'
                    ]
                }
            }
        },
        
        cssmin: {
            options: {
                banner: '<%= config.banner %>'
            },
            vendors: {
                files: {
                    '<%= config.buildPath %>/css/vendors.min.css': [
                        'tmp/bower.css'
                    ]
                }
            },
            sass: {
                files: {
                    '<%= config.buildPath %>/css/main.min.css': [
                        'tmp/main.css'
                    ]
                }
            }
        },
        
        bower_concat: {
            scripts: {
                dest: 'tmp/vendors.js',
                exclude: [
                    'fontawesome', 
                    'html5shiv', 
                    'modernizr', 
                    'Simple-Grid'
                ],
                mainFiles: {
                    'consolelog': 'consolelog.min.js',
                    'FlexSlider': 'jquery.flexslider-min.js',
                    'magnific-popup': 'dist/jquery.magnific-popup.js',
                    'slicknav': 'jquery.slicknav.min.js'
                },
                dependencies: {
                    'FlexSlider': 'jquery',
                    'magnific-popup': 'jquery',
                    'slicknav': 'jquery'
                }
            },
            css: {
                dest: 'tmp/bower.css',
                include: [
                    'fontawesome', 
                    'Simple-Grid',
                    'FlexSlider',
                    'magnific-popup',
                    'slicknav'
                ],
                mainFiles: {
                    'fontawesome': 'css/font-awesome.min.css',
                    'Simple-Grid': 'simplegrid.css',
                    'FlexSlider': 'flexslider.css',
                    'magnific-popup': 'dist/magnific-popup.css',
                    'slicknav': 'slicknav.css'
                }
            }
        },
        
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3
                },
                files: [{
                    expand: true,
                    cwd: 'src/assets/img/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: '<%= config.buildPath %>/img/'
                }]
            }
        },
        
        favicons: {
            options: {
                windowsTile: false
            },
            icons: {
                src: 'src/assets/favicons/favicon.png',
                dest: '<%= config.buildPath %>'
            }
        },
        
        clean: {
            tmp: {
                src: ["tmp"]
            }
        }
        
    });

    grunt.loadNpmTasks("grunt-contrib-connect");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-bower-concat");
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks("grunt-contrib-handlebars");
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    
    grunt.registerTask('default', ["handlebars", "compass", "bower_concat", "uglify", "cssmin", "imagemin", "copy", "clean", "connect", "watch"]);
    
    grunt.registerTask('build', ["handlebars", "compass", "bower_concat", "uglify", "cssmin", "imagemin", "copy", "clean"]);
    
};