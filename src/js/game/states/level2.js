module.exports = function(game) {

  var level2 = {};

  level2.create = function () {
    var text = "Level 2";
    var style = { font: "30px Arial", fill: "#FFF", align: "center" };
    var loading = game.add.text(game.world.centerX, game.world.centerY, text, style);
    game.physics.arcade.gravity.y = 250;

    map = game.add.tilemap('level2');
    map.addTilesetImage('tileset', 'tiles_png');

    backgroundlayer0 = map.createLayer('backgroundLayer0');
    backgroundlayer1 = map.createLayer('backgroundLayer1');
    blockedLayer = map.createLayer('blockedLayer');

    map.setCollisionBetween(0, 20, true, 'blockedLayer');

    backgroundlayer0.resizeWorld();

    coins = game.add.group();
    coins.enableBody = true;
    map.createFromObjects('objectLayer', 61, 'coin', 0, true, false, coins);

    coins.callAll('animations.add', 'animations', 'spin', [0, 1, 2, 3], 10, true);
    coins.callAll('animations.play', 'animations', 'spin');
    coins.setAll('body.allowGravity', false, false, false, 0, true);

    p = game.add.sprite(0, game.world.height - 192, 'player'); // <--- negrada
    game.physics.enable(p);
    p.body.bounce.y = 0.2;
    p.body.linearDamping = 1;
    p.body.collideWorldBounds = true;

    cursors = game.input.keyboard.createCursorKeys();
    game.camera.follow(p);
  };

  level2.update = function () {
    game.physics.arcade.collide(p, blockedLayer);

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

  return level2;
};