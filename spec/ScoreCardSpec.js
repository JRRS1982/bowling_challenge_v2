describe("ScoreCard", function() {
  var scorecard;
  var frameScores;
  var frameNumber;
  var isGameOver;
  var isGameTen;

  beforeEach(function() {
    scorecard = new ScoreCard
  });

  describe(".frame", function(){
    it("Knows what frame we are on", function() {
      expect(scorecard.frameNumber).toEqual(1);
    });
  });

  describe(".isFrame10", function () {
    it("Knows we are not initially on frame 10", function () {
      expect(scorecard.isFrame10).toEqual(false);
    });
  });

  describe(".isGameOver", function () {
    it("Knows the game is currently in play", function () {
      expect(scorecard.isGameOver).toEqual(false);
    });
  });

  describe(".arrayOfFrameScores", function () {
    it("Knows the scores for each frame", function () {
      expect(scorecard.arrayOfFrameScores).toEqual([0,0,0,0,0,0,0,0,0,0]);
    });
  });
});