module.exports = function(grunt) {
	
	grunt.initConfig({
        
		pkg: grunt.file.readJSON('package.json'),

        config: {
            "buildPath": "{%= build_path %}",
            "tplPath": "src/templates",
            "tplExt": ".hbs"
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
                tasks: ['concat:scripts', 'concat:main', 'uglify:scripts'],
                options: {
                    livereload: true
                }
            },
            less: {
                files: 'src/less/**/*.less',
                tasks: ['less'],
                options: {
                    livereload: true
                }
            },
			html: {
				files: 'src/index.html',
				tasks: ['copy:html'],
                options: {
                    livereload: true
                }
			},
            files: {
                files: 'src/assets/files/**/*.*',
                tasks: ['copy'],
                options: {
                    livereload: true
                }
            },
            templates: {
                files: '<%= config.tplPath %>/**/*<%= config.tplExt %>',
				tasks: ['handlebars', 'concat:main', 'uglify:scripts'],
                options: {
                    livereload: true
                }
            },
			img: {
				files: 'src/assets/img/**/*.{png,jpg,gif}',
				tasks: ['imagemin'],
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
        
		less: {
			compile: {
				options: {
					compress: true
				},
				files: {
					"<%= config.buildPath %>/css/main.min.css": "src/less/main.less"
				}
			}
		},
        
		copy: {
			html: {
				files: [
					{
						src: 'src/index.html', 
						dest: '<%= config.buildPath %>/index.html'
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
        
		concat: {
			options: {
				separator: ';',
				stripBanners: {
					block: true,
					line: false
				},
				banner: '/*! <%= pkg.name %> - <%= pkg.author %> - <%= grunt.template.today("yyyy-mm-dd hh:mm") %> */'
			},
			scripts: {
				src: [
                    'src/js/**/*.js'
				],
				dest: 'tmp/main.js'
			},
			main: {
				src: [
                    'tmp/templates.js', 
                    'tmp/main.js'
				],
				dest: '<%= config.buildPath %>/js/main.js'
			},
			css: {
				src: [
                    'tmp/bower.css'
				],
				dest: '<%= config.buildPath %>/css/vendors.css'
			}
		},
        
        uglify: {
            options: {
                mangle: false
            },
            scripts: {
                files: {
                    '<%= config.buildPath %>/js/main.min.js': [
                        '<%= config.buildPath %>/js/main.js'
                    ]
                }
            },
            vendors: {
                files: {
                    '<%= config.buildPath %>/js/vendors.min.js': [
                        '<%= config.buildPath %>/js/vendors.js'
                    ]
                }
            }
        },
        
        cssmin: {
            combine: {
                files: {
                    '<%= config.buildPath %>/css/vendors.min.css': [
                        'tmp/bower.css'
                    ]
                }
            }
        },
        
        bower_concat: {
            scripts: {
                dest: '<%= config.buildPath %>/js/vendors.js',
                exclude: [
                    'fontawesome', 
                    'html5shiv', 
                    'modernizr', 
                    'Simple-Grid', 
                    'normalize.css', 
                    'lesshat'
                ],
                mainFiles: {
                    'consolelog': 'consolelog.min.js',
                }
            },
            css: {
                dest: 'tmp/bower.css',
                include: [
                    'normalize.css', 
                    'fontawesome', 
                    'Simple-Grid'
                ],
                mainFiles: {
                    'normalize.css': 'normalize.css',
                    'fontawesome': 'css/font-awesome.min.css',
                    'Simple-Grid': 'simplegrid.css'
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
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-bower-concat");
    grunt.loadNpmTasks("grunt-contrib-less");
    grunt.loadNpmTasks("grunt-contrib-handlebars");
    grunt.loadNpmTasks("grunt-contrib-imagemin");
    grunt.loadNpmTasks("grunt-contrib-copy");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    
    grunt.registerTask('default', ["handlebars", "less", "bower_concat", "concat", "uglify", "cssmin", "imagemin", "copy", "clean", "connect", "watch"]);
    
    grunt.registerTask('build', ["handlebars", "less", "bower_concat", "concat", "uglify", "cssmin", "imagemin", "copy", "clean"]);
    
};