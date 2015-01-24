# Global Game Jam Cordoba 2015
## Kamikaze Panther

## Installing

### Node.js and Grunt

You will need to first install [Node.js](http://nodejs.org/download/) and the grunt-cli: `npm install -g grunt-cli`.

### Setup Your Project

You need to install the project's various NPM dependencies:

    npm install

And you should now be ready to spin up a development build of your new project:

    grunt

### Recommendations

* Use relative file paths for any assets loaded by your HTML or JavaScript. This will negate any potential path issues when the game is later uploaded to a webserver.
* If you intend to store development assets (i.e PSD's, Texture Packer files, etc) inside your project, store them outside of the `src` directory to avoid bloating your builds with them.
* Borwserify is crazy powerful. I'm not going to quote Spiderman, but you should definitely check out [Substack's Browserify Handbook](https://github.com/substack/browserify-handbook).
* Linting is disabled by default, if you'd like to enforce it for production builds update the `.jshintrc` with rules for your coding style and remove the comment block from jshint directive in the gruntfile's build task.

### Available Targets

#### `grunt`

Configures and runs an unminified development build optimised for fast watch performance with source maps and live reload.

#### `grunt build`

Creates an uglified, production ready build with no source maps.

#### `grunt optimise`

Lossy compression of all png's in the `src/images/` directory using [pngquant](http://pngquant.org/).

(Linux users will need to have a version of pngquant available on their paths.)

#### `grunt zip`

Compiles the current build into `{title}.zip` with an internal folder. This is intended for use when transferring the build to a third party for webserver upload.

#### `grunt cocoon`

Compiles the current build into `{title}.zip` ready for upload to [CocoonJs](https://www.ludei.com/cocoonjs/).

### Updating or Adding Libraries

The project comes with an unminified version of Phaser with arcade physics, this can be replaced if you require updates or one of the alternate physics engines.

When adding new libraries that aren't CommonJS compatible, you'll have to update the [Browserify Shim configuration](https://github.com/thlorenz/browserify-shim#3-provide-browserify-shim-config).

### Coding Style and Linting

I follow [Ben Gourley's JavaScript Style Guide](https://github.com/bengourley/js-style-guide) (with the exception of using semicolons). I've kept the code footprint low so you can easily include your own `.jshintrc`.

## Created with contributions and inspiration from

  * [A Phaser.js Luke Wilde Boilerplate](https://github.com/lukewilde/phaser-js-boilerplate) 
  * [Craig Beswetherick](http://grindheadgames.com)
  * [Jesse Freeman's Phaser template](https://github.com/gamecook/phaser-project-template)
  * The retired https://github.com/luizbills/phaser-js-boilerplate
