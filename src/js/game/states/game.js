var DummyObject = require('../modules/dummy');  

module.exports = function(game) {

  var gameState = {};

  gameState.create = function () {
    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);

    var quote = new DummyObject("lalalalala");
    quote.alert();

  };

  return gameState;
};
