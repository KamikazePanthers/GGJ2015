var Countdown = require('../modules/timer')
var Player = require('../modules/player')

module.exports = function(game) {

  var level2 = {};

  level2.create = function () {
    var text = "Level 2";
    var style = { font: "30px Arial", fill: "#FFF", align: "center" };
    var loading = game.add.text(game.world.centerX, game.world.centerY, text, style);
    game.physics.arcade.gravity.y = 400;

    map = game.add.tilemap('level2');
    map.addTilesetImage('tileset', 'tiles_png');

    backgroundlayer0 = map.createLayer('backgroundLayer0');
    backgroundlayer1 = map.createLayer('backgroundLayer1');
    blockedLayer = map.createLayer('blockedLayer');

    map.setCollisionBetween(0, 120, true, 'blockedLayer');

    backgroundlayer0.resizeWorld();

    // Coins
    coins = game.add.group();
    coins.enableBody = true;
    map.createFromObjects('objectLayer', 61, 'coin', 0, true, false, coins);

    coins_count = coins.children.length;

    coins.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3], 10, true);
    coins.callAll('animations.play', 'animations', 'spin');
    coins.setAll('body.allowGravity', false, false, false, 0, true);

    // Door callback
    door = game.add.sprite(256, 0, 'door');
    game.physics.enable(door);
    door.body.allowGravity = false;
    door.body.setSize(96, 128, 0, 192);

    // Player
    player = new Player(game, 128, game.height - 32)
    game.add.existing(player);

    timer = new Countdown(game, 15);
    game.add.existing(timer);

    game.camera.follow(player);
  };

  level2.update = function () {
    game.physics.arcade.collide(player, blockedLayer);
    game.physics.arcade.overlap(player, coins, this.collect, null, this);
    game.physics.arcade.overlap(player, door, this.doorCallback, null, this);
  }

  level2.render = function(){
    game.debug.body(player);
    game.debug.body(door);
  }

  level2.collect = function(player, coin){
    coin.kill();
    coins_count--;
    //legend.setText(coins_count);
  }

  level2.doorCallback = function(player, door){
    level = game.state.start('level3');
  }

  return level2;
};