module.exports = function(game) {

  var levelState = {};

  levelState.create = function () {
    var text = "Level Test";
    var style = { font: "30px Arial", fill: "#FFF", align: "center" };
    var loading = game.add.text(game.world.centerX-100, game.world.centerY+200, text, style);

  };

  levelState.update = function () {
  }

  return levelState;
};