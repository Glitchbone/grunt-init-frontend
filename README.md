# grunt-init-frontend
> Create a basic Web project with [grunt-init][].

[grunt-init]: http://gruntjs.com/project-scaffolding

## Installation
If you haven't already done so, install [grunt-init][].

Once grunt-init is installed, place this template in your `~/.grunt-init/`
directory (`%USERPROFILE%\.grunt-init\` on Windows). It's recommended that you
use git to clone this template into that directory, as follows:

```sh
git clone git://github.com/Glitchbone/grunt-init-frontend.git ~/.grunt-init/frontend
```

## Usage
At the command-line, change into an empty directory, run this command
and follow the prompts.

```sh
grunt-init frontend
```

You can now install the npm and Bower dependencies

```sh
npm install
bower install
```

> Note that this template will generate files in the current directory, so
be sure to change to a new directory first if you don't want to overwrite
existing files.