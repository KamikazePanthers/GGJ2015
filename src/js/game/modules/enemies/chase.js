
var EnemyChase = function(game, x, y, player, speed, delay) {
    this.game = game;
    this.player = player;
    this.speed = typeof speed !== 'undefined' ?  speed : 120;
    this.delay = typeof delay !== 'undefined' ?  delay : 500;

    Phaser.Sprite.call(this, game, x, y, 'enemychase');
    game.physics.arcade.enable([ this ], Phaser.Physics.ARCADE);
    game.physics.arcade.gravity.y = 100;

    this.body.bounce.y = 0.1;
    this.body.gravity.y = 100;

    game.time.events.loop(this.delay, this.chase, this);

};

EnemyChase.prototype = Object.create(Phaser.Sprite.prototype);
EnemyChase.prototype.constructor = EnemyChase;

EnemyChase.prototype.update = function() {
};

EnemyChase.prototype.chase = function() {
    this.game.physics.arcade.moveToObject(this, this.player, this.speed);
}

module.exports = EnemyChase;