module.exports = function(game) {

  var gameoverState = {};

  gameoverState.create = function () {
    var gameover = game.add.sprite(0, 0, 'gameover');
    //gameover.anchor.setTo(0.5, 0.5);

    enter = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
  };


 gameoverState.update = function () {
    if (enter.isDown) {
        level = game.state.start('game');
    }
 };

  return gameoverState;
};
