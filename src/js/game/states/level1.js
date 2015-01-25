module.exports = function(game) {

  var level1 = {};

  level1.create = function () {

    game.physics.arcade.gravity.y = 250;

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

    coins.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3], 10, true);
    coins.callAll('animations.play', 'animations', 'spin');
    coins.setAll('body.allowGravity', false, false, false, 0, true);

    coins_count = coins.children.length;

    player = game.add.sprite(0, game.world.height - 192, 'player'); // <--- negrada
    game.physics.enable(player);
    player.body.bounce.y = 0.2;
    player.body.linearDamping = 1;
    player.body.collideWorldBounds = true;

    var text = "Level 1";
    var style = { font: "30px Arial", fill: "#FFF", align: "center" };
    legend = new Phaser.Text(game, 0, 0, text, style);
    legend.x = game.width - legend.width - 10;
    legend.y = game.height - legend.height - 10;
    legend.fixedToCamera = true;
    game.add.existing(legend);

    cursors = game.input.keyboard.createCursorKeys();
    game.camera.follow(player);
  };

  level1.update = function () {
    game.physics.arcade.collide(player, blockedLayer);
    game.physics.arcade.overlap(player, coins, this.collect, null, this);

    player.body.velocity.x = 0;
    if (cursors.up.isDown)
    {
        if (player.body.onFloor())
        {
            player.body.velocity.y = -300;
        }
    }

    if (cursors.left.isDown)
    {
        player.body.velocity.x = -150;
    }
    else if (cursors.right.isDown)
    {
        player.body.velocity.x = 150;
    }

    if(coins_count == 0)
    {
        level = game.state.start('game');
    }
  }

  level1.collect = function(player, coin){
    coin.kill();
    coins_count--;
    legend.setText(coins_count);
  }

  return level1;
};