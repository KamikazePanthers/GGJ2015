var ItemCounter = require('../modules/counter')
var EnemyChase  = require('../modules/enemies/chase')
var Player = require('../modules/player')

module.exports = function(game) {

  var level3 = {};

  level3.create = function () {
    var text = "Level 3";
    var style = { font: "30px Arial", fill: "#FFF", align: "center" };
    var loading = game.add.text(game.world.centerX, game.world.centerY, text, style);
    game.physics.arcade.gravity.y = 400;

    map = game.add.tilemap('level3');
    map.addTilesetImage('tileset', 'tiles_png');

    backgroundlayer0 = map.createLayer('backgroundLayer0');
    backgroundlayer1 = map.createLayer('backgroundLayer1');
    blockedLayer = map.createLayer('blockedLayer');

    map.setCollisionBetween(0, 90, true, 'blockedLayer');

    backgroundlayer0.resizeWorld();

    coins = game.add.group();
    coins.enableBody = true;
    map.createFromObjects('objectLayer', 61, 'coin', 0, true, false, coins);

    coins.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3], 5, true);
    coins.callAll('animations.play', 'animations', 'spin');
    coins.setAll('body.allowGravity', false, false, false, 0, true);

    coins_count = coins.children.length
    counter = new ItemCounter(game, coins_count);
    game.add.existing(counter);

    player = new Player(game, 0, game.world.height - 256);
    game.add.existing(player);

    enemy = new EnemyChase(game, 288, game.height - 256, player);
    game.add.existing(enemy);

    game.camera.follow(player);
  };

  level3.update = function () {
    game.physics.arcade.collide(player, blockedLayer);
    game.physics.arcade.overlap(player, coins, this.gameOver, null, this);
    game.physics.arcade.collide(enemy, blockedLayer);
    game.physics.arcade.overlap(enemy, coins, this.collect, null, this);
    if(counter.countFinished())
    {
        this.nextLevel();
    }
  };

  level3.collect = function(player, coin){
    coin.kill();
    counter.count();
  };

  level3.nextLevel = function(){
    game.state.start('level4');
  };

  level3.gameOver = function(){
    game.state.start('gameover');
  };

  return level3;
};