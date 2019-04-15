describe("Frame1to9", function(){
  
  beforeEach(function() {
    frame1to9 = new Frame1to9();
  });

  describe(".roll", function() {
    it("Roll 5 adds 5 to the frame score", function () {
      let f129 = new Frame1to9();
      
      expect(f129.getFrameArray()).toEqual([5]);
    });
  });
});