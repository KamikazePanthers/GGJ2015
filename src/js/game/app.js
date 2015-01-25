var Phaser = require('Phaser'),
    _ = require('lodash'),
    properties = require('./properties'),
    states = {
        boot: require('./states/boot.js'),
        preloader: require('./states/preloader.js'),
        game: require('./states/game.js'),

        leveltest: require('./states/leveltest.js'),
        level1: require('./states/level1.js'),
        // level2: require('./states/level2.js'),
        level3: require('./states/level3.js'),
        level4: require('./states/level4.js'),
    },
    game = new Phaser.Game(properties.size.x, properties.size.y, Phaser.CANVAS, 'game');

// Automatically register each state.
_.each(states, function(state, key) {
  game.state.add(key, state(game));
});


game.state.start('boot');
