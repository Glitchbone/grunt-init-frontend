# grunt-init-frontend
> Create a basic Web project with [grunt-init][].

[grunt-init]: http://gruntjs.com/project-scaffolding

### Installation
If you haven't already done so, install [Grunt][grunt] and [grunt-init][]:

``` bash
npm i -g grunt-cli grunt-init
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
