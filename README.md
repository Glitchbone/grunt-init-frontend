# grunt-init-frontend
> Create a basic Web project with [grunt-init][].

[grunt-init]: http://gruntjs.com/project-scaffolding

### Installation
If you haven't already done so, install [grunt][], [grunt-init][] and [Bower][bower]:

``` bash
npm install -g grunt-cli grunt-init bower
```

Once [grunt-init][] is installed, place this template in your `~/.grunt-init/` directory. It's recommended that you use `git clone` to install this template into that directory as follows:

```sh
git clone git://github.com/Glitchbone/grunt-init-frontend.git ~/.grunt-init/frontend
```

## Usage
At the command-line, change into an empty directory, run this command
and follow the prompts.

```sh
grunt-init frontend
```

Install npm and Bower dependencies:

```sh
npm install
bower install
```

You can now run the Grunt tasks (The default task will launch a webserver):

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
+ [http://github.com/jonschlinkert](http://github.com/Glitchbone)

[grunt]: http://gruntjs.com
[grunt-init]: http://gruntjs.com/project-scaffolding#installing-templates
[bower]: http://bower.io/