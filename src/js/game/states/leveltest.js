module.exports = function(game) {

  var levelState = {};

  levelState.create = function () {
    var text = "Level Test";
    var style = { font: "30px Arial", fill: "#FFF", align: "center" };
    var loading = game.add.text(game.world.centerX-100, game.world.centerY+200, text, style);
    game.physics.arcade.gravity.y = 250;

    map = game.add.tilemap('tile_map');
    map.addTilesetImage('tiles', 'tiles');

    backgroundlayer = map.createLayer('backgroundLayer');
    blockedLayer = map.createLayer('blockedLayer');

    map.setCollisionBetween(3, 10, true, 'blockedLayer');

    backgroundlayer.resizeWorld();

    coins = game.add.group();
    coins.enableBody = true;
    map.createFromObjects('objectLayer', 2, 'coin', 0, true, false, coins);

    coins.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3], 10, true);
    coins.callAll('animations.play', 'animations', 'spin');
    coins.setAll('body.allowGravity', false, false, false, 0, true);

    p = game.add.sprite(0, 192, 'player');
    game.physics.enable(p);

    p.body.bounce.y = 0.2;
    p.body.linearDamping = 1;
    p.body.collideWorldBounds = true;

    cursors = game.input.keyboard.createCursorKeys();
  };

  levelState.update = function () {

    game.physics.arcade.collide(coins, blockedLayer);
    game.physics.arcade.collide(p, blockedLayer);
    game.physics.arcade.overlap(p, coins, collectCoin, null, this);


    p.body.velocity.x = 0;
    if (cursors.up.isDown)
    {
        if (p.body.onFloor())
        {
            p.body.velocity.y = -300;
        }
    }

    if (cursors.left.isDown)
    {
        p.body.velocity.x = -150;
    }
    else if (cursors.right.isDown)
    {
        p.body.velocity.x = 150;
    }
  }

  function collectCoin(player, coin){
    coin.kill();
  }

  return levelState;
};