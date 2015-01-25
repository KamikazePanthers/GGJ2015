var ItemCounter = function(game, counter) {
    Phaser.Text.call(this, game, (game.width / 2), 20, this.seconds, { font: "32px Arial", fill: "#c3c3c3", align: "center" });
    this.fixedToCamera = true;
    this.counter = counter;
}

ItemCounter.prototype = Object.create(Phaser.Text.prototype);
ItemCounter.prototype.constructor = ItemCounter;

ItemCounter.prototype.count = function() {
    // this.seconds -= 1;
    // this.setText(this.seconds);
}

ItemCounter.prototype.update = function() {
    this.setText(this.counter);
}

module.exports = ItemCounter;