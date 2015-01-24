var Coin = require('../modules/elements/coin');
var DummyPlayer = require('../modules/dummyplayer');

module.exports = function(game) {

  var levelState = {};

  levelState.create = function () {
    var text = "Level Test";
    var style = { font: "30px Arial", fill: "#FFF", align: "center" };
    var loading = game.add.text(game.world.centerX-100, game.world.centerY+200, text, style);

    game.physics.startSystem(Phaser.Physics.ARCADE);

    player = new DummyPlayer(game);
    player.anchor.set(0.5);
    player.enableBody = true;
    player.physicsBodyType = Phaser.Physics.ARCADE;
    game.physics.enable(player, Phaser.Physics.ARCADE);
    game.add.existing(player);


    money = game.add.group();
    money.enableBody = true;
    money.physicsBodyType = Phaser.Physics.ARCADE;

    for (var i = 0; i < 16; i++) {
      var coin = new Coin(game);
      game.add.existing(coin);
      money.add(coin);
    }


  };

  levelState.update = function () {
    game.physics.arcade.collide(player, money, collisionHandler, null, this);

    money.forEach(function(c) {
      game.physics.arcade.collide(player, c, collisionHandler, null, this);
    }, this);
  };

  levelState.render = function() {
    game.debug.body(player);

  };

  function collisionHandler(player, coin) {
    console.log("asdadad");
    console.log(coin);
  };

  return levelState;
};