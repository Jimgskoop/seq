define(['Clock'], function (Clock) {

  describe('Clock', function(){
    var c;

    before('instantiating Clock', function() {
        c = new Clock();
    });

    after('Clock tear down', function() {
        //c = null;
    });

    it('should create an instance of Clock', function(){
        expect(c).to.not.be.null();
    });

    it('should start the Clock', function(){
        c.start();
        expect(c.running).to.be.true();
    });

    it('should stop the Clock', function(){
        c.stop();
        expect(c.running).to.be.false();
        expect(c.timer).to.be.null();

    });

    it('should reset the Clock', function(){
        c.reset();
        expect(c.running).to.be.false();
        expect(c.step).to.equal(0);
    });

    it('should advance the Clock', function() {
        expect(c.next()).to.be.above(0);
    });

    it('should return the tempo in milliseconds', function() {
        expect(c.getTempo()).to.be.above(0);
    });

  });

});
