var DummyObject = require('../modules/dummy');

module.exports = function(game) {

  var gameState = {};

  gameState.create = function () {
    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);


    enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  };


 gameState.update = function () {
    if (enter.isDown) {
        level = game.state.start('level1');
    }
 }
  return gameState;
};
