var players = [
  { name: "Elise", playing: true },
  { name: "MLG", playing: true },
  { name: "D-Rod", playing: false },
  { name: "DT", playing: true },
  { name: "Kevin", playing: false }
];

var _ = require('lodash');
var playersPlaying = _.filter(players, function(player) { return player.playing });
var duckduckGoose = require('./duckduckGoose');

duckduckGoose.play(playersPlaying);
