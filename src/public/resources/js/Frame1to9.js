function Frame1to9() {
  this.frameArray = [];
}

ScoreCard.prototype.addRoll = function(input) {
  this.todo.push(input);
}

ScoreCard.prototype.getFrameArray = function() {
  return this.frameArray;
}
