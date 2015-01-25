module.exports = function(game) {

  var preloader = {};

  preloader.preload = function () {
    var text = "Loading files...";
    var style = { font: "30px Arial", fill: "#FFF", align: "center" };
    var loading = game.add.text(game.world.centerX-100, game.world.centerY+200, text, style);

    // Here we need to add all the media
    game.load.image('logo', 'images/phaser.png#grunt-cache-bust');

    game.load.tilemap('level1', 'maps/level1.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.tilemap('level2', 'maps/level2.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.tilemap('level3', 'maps/level3.json', null, Phaser.Tilemap.TILED_JSON);
    game.load.tilemap('level4', 'maps/level4.json', null, Phaser.Tilemap.TILED_JSON);


    game.load.spritesheet('player', 'images/player.png#grunt-cache-bust', 192, 256);
    game.load.spritesheet('coin', 'images/coin.png#grunt-cache-bust', 64, 64);
    game.load.image('tiles_png', 'images/tileset.png#grunt-cache-bust');
    game.load.image('door', 'images/door.png#grunt-cache-bust');

    // Enemies
    game.load.image('enemypatrol', 'images/patrol.png#grunt-cache-bust');
    game.load.image('enemyjumper', 'images/jumper.png#grunt-cache-bust');
    game.load.image('enemyspider', 'images/spider.png#grunt-cache-bust');
    game.load.spritesheet('enemychase', 'images/ghost.png#grunt-cache-bust', 192, 192);

    // Menues
    game.load.image('gameover', 'images/gameover.png#grunt-cache-bust');

  };

  preloader.create = function () {
    game.state.start('game');
  };

  return preloader;
};
