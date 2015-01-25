var Player = function(game, x, y){
	Phaser.Sprite.call(this, game, x, y, 'player');

    this.anchor.setTo(.5, .5);
    this.animations.add('idle', [0, 1], 5, true, true);
    this.animations.add('walk', [2, 3, 4, 5, 6, 7, 8, 9], 10, true, true);
    this.direction = 'right';

	game.physics.arcade.enable([ this ], Phaser.Physics.ARCADE);
    this.body.setSize(95, 192, 0, 32);
    this.body.linearDamping = 1;
    this.body.collideWorldBounds = true;

    this.cursors = game.input.keyboard.createCursorKeys();
}


Player.prototype = Object.create(Phaser.Sprite.prototype);
Player.prototype.constructor = Player;

Player.prototype.update = function() {

    this.body.velocity.x = 0;
    if (this.cursors.up.isDown)
    {
        if (this.body.onFloor())
        {
            this.body.velocity.y = -400;
        }
    }

    if (this.cursors.left.isDown)
    {
        this.body.velocity.x = -250;
        this.animations.play('walk');
        if(this.direction !== 'left'){
            this.direction = 'left';
            this.scale.x *= -1;
        }
    }
    else if (this.cursors.right.isDown)
    {
        this.body.velocity.x = 250;
        this.animations.play('walk');
        if(this.direction !== 'right'){
            this.direction = 'right';
            this.scale.x *= -1;
        }
    }
    else
    {
        this.animations.play('idle');
    }

    if(!this.body.onFloor()){
        this.frame = 10;
    }

};


module.exports = Player;