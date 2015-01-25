var Countdown = require('../modules/timer')
var EnemySpider = require('../modules/enemies/spider')
var Player = require('../modules/player')


module.exports = function(game) {

  var level4= {};

  level4.create = function () {

    map = game.add.tilemap('level4');
    map.addTilesetImage('tileset', 'tiles_png');

    backgroundlayer0 = map.createLayer('backgroundLayer0');
    backgroundlayer1 = map.createLayer('backgroundLayer1');
    backgroundlayer2 = map.createLayer('backgroundLayer2');
    blockedLayer = map.createLayer('blockedLayer');

    map.setCollisionBetween(61, 66, true, 'blockedLayer');

    backgroundlayer0.resizeWorld();
    game.physics.arcade.gravity.y = 350;

    player = new Player(game, 0, game.world.height - 192)
    game.add.existing(player);

    var text = "Level 4";
    var style = { font: "30px Arial", fill: "#FFF", align: "center" };
    legend = new Phaser.Text(game, 0, 0, text, style);
    legend.x = game.width - legend.width - 10;
    legend.y = game.height - legend.height - 10;
    legend.fixedToCamera = true;
    game.add.existing(legend);

    time = new Countdown(game, 30);
    game.add.existing(time);

    console.log(blockedLayer);
    spiders = game.add.group()
    spiders.enableBody = true;
    spiders.enableGravity = false;

    spider1 = new EnemySpider(game, 200, 1170);
    spider2 = new EnemySpider(game, 550, 900);
    spider3 = new EnemySpider(game, 400, 3);
    game.add.existing(spider1);
    game.add.existing(spider2);
    game.add.existing(spider3);
    spiders.add(spider1);
    spiders.add(spider2);
    spiders.add(spider3);

    game.camera.follow(player);
  };

  level4.update = function () {
    game.physics.arcade.collide(player, blockedLayer);
    game.physics.arcade.overlap(player, spiders, this.endGame, null, this);
    if (time.timeOver) {
        this.endGame();
    }
  };

  level4.endGame = function(player, spiders) {
    game.state.start("gameover");
  }

  return level4;
};