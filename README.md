# grunt-init-frontend
> Create a basic Web project with [grunt-init][].

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
If you haven't already done so, install [grunt][], [grunt-init][] and [Bower][bower]:

```sh
npm install -g grunt-cli grunt-init bower
```

Once [grunt-init][] is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use `git clone` to install this template into that directory as follows:

```sh
git clone git://github.com/Glitchbone/grunt-init-frontend.git ~/.grunt-init/frontend
```

## Usage
**At the command-line, change into an empty directory, run this command
and follow the prompts:**

```sh
grunt-init frontend
```

**Install npm dependencies:**

```sh
npm install
```

The following modules will be installed:

+ [grunt-contrib-clean](https://npmjs.org/package/grunt-contrib-clean)
+ [grunt-contrib-concat](https://npmjs.org/package/grunt-contrib-concat)
+ [grunt-contrib-connect](https://npmjs.org/package/grunt-contrib-connect)
+ [grunt-contrib-copy](https://npmjs.org/package/grunt-contrib-copy)
+ [grunt-contrib-cssmin](https://npmjs.org/package/grunt-contrib-cssmin)
+ [grunt-contrib-handlebars](https://npmjs.org/package/grunt-contrib-handlebars)
+ [grunt-contrib-imagemin](https://npmjs.org/package/grunt-contrib-imagemin)
+ [grunt-contrib-less](https://npmjs.org/package/grunt-contrib-less)
+ [grunt-contrib-uglify](https://npmjs.org/package/grunt-contrib-uglify)
+ [grunt-contrib-watch](https://npmjs.org/package/grunt-contrib-watch)
+ [grunt-bower-concat](https://npmjs.org/package/grunt-bower-concat)
+ [grunt-favicons](https://npmjs.org/package/grunt-favicons)

**Install Bower dependencies:**

```sh
bower install
```

The following libraries will be installed and ready to use:

+ [html5shiv](https://github.com/aFarkas/html5shiv.git)
+ [jQuery](http://jquery.com)
+ [consolelog](http://github.com/patik/console.log-wrapper.git)
+ [Handlebars](http://handlebarsjs.com)
+ [Font Awesome](http://fontawesome.io)
+ [spin.js](http://fgnass.github.io/spin.js)
+ [Modernizr](http://modernizr.com/)
+ [Simple Grid](https://github.com/ThisIsDallas/Simple-Grid)
+ [normalize.css](http://necolas.github.io/normalize.css/)
+ [LESS Hat](https://github.com/madebysource/lesshat)

**You can now run the Grunt tasks (The default task will launch a webserver):**

```sh
grunt build
grunt
```

> Note that this template will generate files in the current directory, so
be sure to change to a new directory first if you don't want to overwrite
existing files.

## Authors

**[Adrien Glitchbone](http://github.com/Glitchbone)**

+ [https://twitter.com/AdrienROOTabaga](https://twitter.com/AdrienROOTabaga)
+ [http://github.com/Glitchbone](http://github.com/Glitchbone)

[grunt]: http://gruntjs.com
[grunt-init]: http://gruntjs.com/project-scaffolding#installing-templates
[bower]: http://bower.io/