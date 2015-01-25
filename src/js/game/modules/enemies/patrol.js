var EnemyPatrol = function (game, x, y, speed, delay) {
    this.game     = game;
    this.speed    = typeof speed !== 'undefined' ?  speed : 150;
    this.delay    = typeof delay !== 'undefined' ?  delay : 3;

    Phaser.Sprite.call(this, this.game, x, y, 'enemypatrol');
    game.physics.arcade.enable([ this ], Phaser.Physics.ARCADE);

    this.body.velocity.x = this.speed;
    this.game.time.events.loop(Phaser.Timer.SECOND * this.delay, this.patrol, this);
};

EnemyPatrol.prototype = Object.create(Phaser.Sprite.prototype);
EnemyPatrol.prototype.constructor = EnemyPatrol;

EnemyPatrol.prototype.patrol = function() {
    change = this.game.rnd.integerInRange(-20, 20);
    this.body.velocity.x = (this.body.velocity.x + change) * (-1);
}


module.exports = EnemyPatrol;