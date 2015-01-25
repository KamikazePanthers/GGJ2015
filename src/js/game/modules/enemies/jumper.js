var EnemyJumper = function (game, x, y, jump, speed, delay, gravity) {
    this.game     = game;
    this.speed    = typeof speed !== 'undefined' ?  speed : 40;
    this.jump     = typeof jump !== 'undefined' ?  jump : 1;
    this.delay    = typeof delay !== 'undefined' ?  delay : 3;
    this.gravity  = typeof gravity !== 'undefined' ?  gravity :10;

    Phaser.Sprite.call(this, this.game, x, y, 'enemyjumper');
    game.physics.arcade.enable([ this ], Phaser.Physics.ARCADE);

    this.body.velocity.x = this.speed;
    this.body.bounce.set(this.jump);
    this.body.gravity.y = this.gravity;

    this.game.time.events.loop(Phaser.Timer.SECOND * this.delay, this.patrol, this);
};

EnemyJumper.prototype = Object.create(Phaser.Sprite.prototype);
EnemyJumper.prototype.constructor = EnemyJumper;

EnemyJumper.prototype.patrol = function() {
    this.body.velocity.x = (this.body.velocity.x) * (-1);
}


module.exports = EnemyJumper;