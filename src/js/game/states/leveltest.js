module.exports = function(game) {

  var levelState = {};

  levelState.create = function () {
    var text = "Level Test";
    var style = { font: "30px Arial", fill: "#FFF", align: "center" };
    var loading = game.add.text(game.world.centerX-100, game.world.centerY+200, text, style);

    map = game.add.tilemap('tile_map');
    map.addTilesetImage('tiles', 'tiles');

    backgroundlayer = map.createLayer('backgroundLayer');
    blockedLayer = map.createLayer('blockedLayer');

    map.setCollisionBetween(3, 10, true, 'blockedLayer');

    backgroundlayer.resizeWorld();

    p = game.add.sprite(0, 192, 'player');
    game.physics.enable(p);
    game.physics.arcade.gravity.y = 250;
    p.body.bounce.y = 0.2;
    p.body.linearDamping = 1;
    p.body.collideWorldBounds = true;

    cursors = game.input.keyboard.createCursorKeys();
  };

  levelState.update = function () {

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

  return levelState;
};