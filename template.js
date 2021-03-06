/*
* grunt-init-frontend
* 2014 Adrien Glitchbone
* https://glitchone.com/
*/

'use strict';

// Basic template description.
exports.description = 'Create a base Grunt web project, including commonly used libraries';

// Template-specific notes to be displayed before question prompts.
exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
'install_ and _bower install_. After that, you may execute project tasks with _grunt_. For ' +
'more information about installing and configuring Grunt, please see ' +
'the Getting Started guide:' +
'\n\n' +
'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = [
    'Gruntfile.js', 
    'bower.json', 
    'package.json', 
    'src'
];

// The actual init template.
exports.template = function(grunt, init, done) {

    init.process({}, [
        // Prompt for these values.
        init.prompt('name'),
        init.prompt('description'),
        init.prompt('version'),
        init.prompt('author_name'),
        init.prompt('author_email'),
        init.prompt('author_url'),
        init.prompt('build_path', 'www')
        ], function(err, props) {
            props.keywords = [];
            props.devDependencies = {
                "grunt-contrib-connect": "~0.8.0",
                "grunt-contrib-copy": "~0.5.0",
                "grunt-contrib-imagemin": "~0.7.1",
                "grunt-contrib-compass": "~0.9.0",
                "grunt-contrib-handlebars": "~0.8.0",
                "grunt-contrib-concat": "~0.4.0",
                "grunt-contrib-watch": "~0.6.1",
                "grunt-bower-concat": "~0.3.0",
                "grunt-contrib-uglify": "~0.5.0",
                "grunt-contrib-clean": "~0.5.0",
                "grunt-favicons": "~0.6.4",
                "grunt-contrib-cssmin": "~0.10.0"
            };

            // Files to copy (and process).
            var files = init.filesToCopy(props);

            // Actually copy (and process) files.
            init.copyAndProcess(files, props);
            
            // Create empty directories
            grunt.file.mkdir('src/assets/files');
            grunt.file.mkdir('src/assets/fonts');
            grunt.file.mkdir('src/assets/img');
            grunt.file.mkdir('src/templates');

            // Generate package.json file.
            init.writePackageJSON('package.json', props);

            // All done!
            done();
        });

    };
