var ItemCounter = require('../modules/counter')
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

    counter = new ItemCounter(game, coins_count);
    game.add.existing(counter);

    player = new Player(game, 0, game.world.height - 192)
    game.add.existing(player);

    game.camera.follow(player);
  };

  level1.update = function () {

    game.physics.arcade.collide(player, blockedLayer);
    game.physics.arcade.overlap(player, coins, this.collect, null, this);

    if(coins_count == 0)
    {
        this.nextLevel();
    }
  }

  level1.collect = function(player, coin){
    coin.kill();
    coins_count--;
    legend.setText(coins_count);
  }

  level1.nextLevel = function(){
    game.state.start('level2');
  }

  return level1;
};