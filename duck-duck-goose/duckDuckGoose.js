var _ = require('lodash');

var duckDuckGoose = {
  play: function(players) {
    var goose = _.sample(players);
    for (var i = 0; i < players.length; i++) {
      var player = players[i];
      console.log(player.name + " has their head touched...");
      if (player == goose) {
        console.log("Goose!");
        return;
      } else {
        console.log("Duck");
      }
    }
  }
};

module.exports = duckDuckGoose;
