
var EnemySpider = function(game, x, speed, distance) {
    this.game = game;
    this.speed = typeof speed !== 'undefined' ?  speed : 5;
    this.distance = typeof distance !== 'undefined' ?  distance : 300;
    this.isGoingDown = true;

    // this.silk = new Phaser.Line(x, 0, x, 0);
    this.silk = this.game.add.graphics(0, 0);
    this.silk.beginFill(0xffffff);
    this.silk.lineStyle(1, 0xffffff, 1);


    Phaser.Sprite.call(this, game, x, 0, 'enemyspider');
    game.physics.arcade.enable([ this ], Phaser.Physics.ARCADE);
    this.body.allowGravity = false;

};

EnemySpider.prototype = Object.create(Phaser.Sprite.prototype);
EnemySpider.prototype.constructor = EnemySpider;

EnemySpider.prototype.update = function() {
    if (this.isGoingDown) {
        if (this.body.y < this.distance) {
            this.body.y += this.speed;
        } else {
            this.isGoingDown = false;
        }
    } else {
         if (this.body.y > 10 ) {
            this.body.y -= this.speed ;
        } else {
            this.isGoingDown = true;
        }
    }

    this.silk.clear();
    this.silk.beginFill(0xffffff);
    this.silk.lineStyle(1, 0xffffff, 1);
    this.silk.drawRect(this.body.x + 32, 0, 1, this.body.y + 5)
    this.silk.endFill();

};

module.exports = EnemySpider;