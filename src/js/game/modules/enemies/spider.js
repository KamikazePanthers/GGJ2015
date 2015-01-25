
var EnemySpider = function(game, x, y, speed, distance) {
    this.game = game;
    this.speed = typeof speed !== 'undefined' ?  speed : 5;
    this.distance = typeof distance !== 'undefined' ?  distance : 300;
    this.isGoingDown = true;
    this.originalY = y

    this.silk = new Phaser.Line(x, y, x, y);
    this.silk = this.game.add.graphics(0, 0);
    this.silk.beginFill(0xffffff);
    this.silk.lineStyle(1, 0xffffff, 1);


    Phaser.Sprite.call(this, game, x, y, 'enemyspider');
    game.physics.arcade.enable([ this ], Phaser.Physics.ARCADE);
    // this.body.setSize(64, 64, 0, 32);
    this.body.linearDamping = 1;
    this.body.collideWorldBounds = true;
    this.body.allowGravity = false;

};

EnemySpider.prototype = Object.create(Phaser.Sprite.prototype);
EnemySpider.prototype.constructor = EnemySpider;

EnemySpider.prototype.update = function() {
    if (this.isGoingDown) {
        if (this.body.y < (this.originalY + this.distance)) {
            this.body.y += this.speed;
        } else {
            this.isGoingDown = false;
        }
    } else {
         if (this.body.y > this.originalY ) {
            this.body.y -= this.speed ;
        } else {
            this.isGoingDown = true;
        }
    }

    this.silk.clear();
    this.silk.beginFill(0xffffff);
    this.silk.lineStyle(1, 0xffffff, 1);
    this.silk.drawRect(this.body.x + 32, this.originalY + 10, 1, (this.body.y - this.originalY + 30));
    this.silk.endFill();

};

module.exports = EnemySpider;