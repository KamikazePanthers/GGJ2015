var Countdown = function(game, seconds) {
    this.game = game;
    this.timeOver = false;
    this.seconds = typeof seconds !== 'undefined' ?  seconds : 120;

    Phaser.Text.call(this, this.game, (game.width / 2), 20, this.seconds, { font: "32px Arial", fill: "#c3c3c3", align: "center" });
    this.game.time.events.loop(Phaser.Timer.SECOND, this.count, this);
    this.fixedToCamera = true;

}

Countdown.prototype = Object.create(Phaser.Text.prototype);
Countdown.prototype.constructor = Countdown;

Countdown.prototype.count = function() {
    this.seconds -= 1;
    this.setText(this.seconds);
}

Countdown.prototype.update = function() {
    if (this.seconds < 1) {
        this.timeOver = true;
    }
}

module.exports = Countdown;