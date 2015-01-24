var EnemyPatrol = function (game, x, y) {
    this.game     = game;
    this.speed    = 5;
    this.isMoving = false;

    Phaser.Sprite.call(this, this.game, x, y, 'enemypatrol');
    game.physics.arcade.enable([ this ], Phaser.Physics.ARCADE);

    this.body.velocity.x = 150;
    this.game.time.events.loop(Phaser.Timer.SECOND * 3, this.patrol, this);
};

EnemyPatrol.prototype = Object.create(Phaser.Sprite.prototype);
EnemyPatrol.prototype.constructor = EnemyPatrol;

EnemyPatrol.prototype.patrol = function() {
    change = this.game.rnd.integerInRange(-20, 20);
    this.body.velocity.x = (this.body.velocity.x + change) * (-1);
}


module.exports = EnemyPatrol;