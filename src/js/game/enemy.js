'use strict';

var Enemy = function(game, player, bullets) {
    Phaser.Sprite.call(this, game, x, y, 'bird', frame);

    this.game = game;
    this.player = player;
    this.bullets = bullets;

  // initialize your prefab here

};

Enemy.prototype = Object.create(Phaser.Sprite.prototype);
Enemy.prototype.constructor = Enemy;

Enemy.prototype.update = function() {

    if (!this.alive) return;
    this.body.velocity.y = -1;

};

Enemy.prototype.chase = function() {
    this.game.physics.arcade.moveToObject(this, this.player, 500);
}

module.exports = Enemy;