var Countdown = require('../modules/timer')
var Player = require('../modules/player')

module.exports = function(game) {

  var level1 = {};

  level1.create = function () {

    game.physics.arcade.gravity.y = 400;

    map = game.add.tilemap('level1');
    map.addTilesetImage('tileset', 'tiles_png');

    backgroundlayer0 = map.createLayer('backgroundLayer0');
    backgroundlayer1 = map.createLayer('backgroundLayer1');
    blockedLayer = map.createLayer('blockedLayer');

    map.setCollisionBetween(1, 20, true, 'blockedLayer');

    backgroundlayer0.resizeWorld();

    coins = game.add.group();
    coins.enableBody = true;
    map.createFromObjects('objectLayer', 61, 'coin', 0, true, false, coins);

    coins.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3], 5, true);
    coins.callAll('animations.play', 'animations', 'spin');
    coins.setAll('body.allowGravity', false, false, false, 0, true);

    coins_count = coins.children.length;

    player = new Player(game, 0, game.world.height - 192)
    game.add.existing(player);

    var text = coins_count;
    var style = { font: "30px Arial", fill: "#FFF", align: "center" };
    legend = new Phaser.Text(game, 0, 0, text, style);
    legend.x = game.width - legend.width - 10;
    legend.y = game.height - legend.height - 10;
    legend.fixedToCamera = true;
    game.add.existing(legend);

    timer = new Countdown(game);
    game.add.existing(timer);

    game.camera.follow(player);
  };

  level1.update = function () {

    if (timer.timeOver) {
        level = game.state.start('game');
    }

    game.physics.arcade.collide(player, blockedLayer);
    game.physics.arcade.overlap(player, coins, this.collect, null, this);

    if(coins_count == 0)
    {
        level = game.state.start('level2');
    }
  }

  level1.collect = function(player, coin){
    coin.kill();
    coins_count--;
    legend.setText(coins_count);
  }

  return level1;
};