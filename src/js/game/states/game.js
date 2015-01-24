module.exports = function(game) {

  var gameState = {};

  gameState.create = function () {
    var logo = game.add.sprite(game.world.centerX, game.world.centerY, 'logo');
    logo.anchor.setTo(0.5, 0.5);
  };


 gameState.update = function () {
    if (enter.isDown) {
        level = game.state.start('leveltest');
    }
 };

  return gameState;
};
