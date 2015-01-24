module.exports = function(game) {

  var preloader = {};

  preloader.preload = function () {
    var text = "Loading files...";
    var style = { font: "30px Arial", fill: "#FFF", align: "center" };
    var loading = game.add.text(game.world.centerX-100, game.world.centerY+200, text, style);

    // Here we need to add all the media
    game.load.image('logo', 'images/phaser.png#grunt-cache-bust');

    game.load.tilemap('tile_map', 'maps/test_map.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles', 'images/tiles.png');

    game.load.tilemap('level1', 'maps/level1.json', null, Phaser.Tilemap.TILED_JSON);
    // game.load.tilemap('level2', 'maps/level2.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.tilemap('level3', 'maps/level3.json', null, Phaser.Tilemap.TILED_JSON);
    // game.load.tilemap('level4', 'maps/level4.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.image('tiles_png', 'images/tileset.png');

    game.load.image('player', 'images/player.png');
    game.load.spritesheet('coin', 'images/coin.png', 64, 64);

    // Enemies
    game.load.image('enemypatrol', 'images/patrol.png#grunt-cache-bust');

  };

  preloader.create = function () {
    game.state.start('game');
  };

  return preloader;
};
