define(['Sequencer'], function (Seq) {

  describe('Sequencer', function(){
    var c;

    before('instantiating Seq', function() {
        c = Seq;
    });

    after('Seq tear down', function() {
        //c = null;
    });

    it('should create an instance of Seq', function(){
        expect(c).to.not.be.null();
    });

    it('should start the Seq', function(){
        c.start();
    });

  });

});
