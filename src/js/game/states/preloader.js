module.exports = function(game) {

  console.log("Init Preloader");
  var preloader = {};

  preloader.preload = function () {
    console.log("Preoload Preloader");
    game.load.image('logo', 'images/phaser.png#grunt-cache-bust');
  };

  preloader.create = function () {
    console.log("Create Preloader");
    game.state.start('game');
  };

  console.log("End Preloader");
  return preloader;
};
