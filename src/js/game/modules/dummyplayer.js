var DummyPlayer = function (game, x, y) {
    this.game     = game;
    this.speed    = 5;
    
    Phaser.Sprite.call(this, this.game, this.game.world.randomX, this.game.world.randomY, 'dummyplayer');

    this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.LEFT]);
    this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.RIGHT]);
    this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.UP]);
    this.game.input.keyboard.addKeyCapture([Phaser.Keyboard.DOWN]);
};

DummyPlayer.prototype = Object.create(Phaser.Sprite.prototype);
DummyPlayer.prototype.constructor = DummyPlayer;

DummyPlayer.prototype.update = function() {
    if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
        this.x -= this.speed;
    }
    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
        this.x += this.speed;
    }
    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
        this.y -= this.speed;
    }
    else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
        this.y += this.speed;
    }
};


module.exports = DummyPlayer;