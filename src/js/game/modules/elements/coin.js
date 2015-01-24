
Coin = function(game, x, y) {
    this.game = game;
    this.game.physics.arcade.enableBody(this);

    Phaser.Sprite.call(this, this.game, this.game.world.randomX, this.game.world.randomY, 'coin');
};

Coin.prototype = Object.create(Phaser.Sprite.prototype);
Coin.prototype.constructor = Coin;


Coin.prototype.create = function () {
}

Coin.prototype.update = function() {
}

Coin.prototype.collected = function (){
    this.sprite.destroy();
};

// Coin.prototype.setConfiguration = function() {
//     if (typeof this.config !== 'undefined') {
//         this.x   = typeof this.config['x'] !== 'undefined' ?  this.config['x'] : this.game.world.randomX;
//         this.y   = typeof this.config['y'] !== 'undefined' ?  this.config['y'] : this.game.world.randomY;
//         return true;
//     }

// }

module.exports = Coin;