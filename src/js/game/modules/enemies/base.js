var Base = function(game, config) {
    // Game object in this scope
    this.game = game;

    // Default values for each parameters.
    // Javascript sucks
    this.x         = typeof config['x'] !== 'undefined' ?  config['x'] : 100;
    this.y         = typeof config['y'] !== 'undefined' ?  config['y']  : 100;
    this.sprite    = typeof config['sprite']  !== 'undefined' ?  config['sprite'] : 'enemy';
    this.hp        = typeof config['hp'] !== 'undefined' ?  config['hp'] : 100;
    this.visible   = typeof config['visible'] !== 'undefined' ?  config['visible'] : true;
    this.move      = typeof config['move'] !== 'undefined' ?  config['move'] : true;
    this.collect   = typeof config['collect'] !== 'undefined' ?  config['collect'] : false;
    this.hurts     = typeof config['hurts'] !== 'undefined' ?  config['hurts'] : true;
    this.gravity   = typeof config['gravity'] !== 'undefined' ?  config['gravity'] : true;
    this.bouce     = typeof config['bounce'] !== 'undefined' ?  config['bounce'] : false;
    this.pushable  = typeof config['pushable'] !== 'undefined' ?  config['pushable'] : false;
    this.jumps     = typeof config['jumps'] !== 'undefined' ?  config['jumps'] : true;
    this.shoot     = typeof config['shoot'] !== 'undefined' ?  config[''] : false;
    this.draggable = typeof config['draggable'] !== 'undefined' ?  config['draggable'] : false;
    // this. = typeof config[''] !== 'undefined' ?  config[''] : 1;

    this.sprite = game.add.sprite(this.x, this.y, this.sprite);
};

Base.prototype.preload = function() {

}

Base.prototype.create = function() {

}

Base.prototype.update = function() {

};




// A custom method
Base.prototype.enableGravity = function(){
    this.game.physics.arcade.enableBody(this);
    this.sprite.body.collideWorldBounds = true;
    this.sprite.body.bounce.y = 0.1;
    this.sprite.body.gravity.y = 200;
};



module.exports = Base;