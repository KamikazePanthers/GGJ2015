module.exports = function(game) {

  var preloader = {};

  preloader.preload = function () {
    var text = "Loading files...";
    var style = { font: "30px Arial", fill: "#FFF", align: "center" };
    var loading = game.add.text(game.world.centerX-100, game.world.centerY+200, text, style);

    // Here we need to add all the media
    game.load.image('logo', 'images/phaser.png#grunt-cache-bust');
    game.load.image('coin', 'images/coin.png#grunt-cache-bust');
    game.load.image('dummyplayer', 'images/dummyplayer.png#grunt-cache-bust');

  };

  preloader.create = function () {
    game.state.start('game');
  };

  return preloader;
};
