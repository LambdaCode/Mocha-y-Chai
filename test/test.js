var expect = chai.expect;

describe('Medida Class', function() {
  describe('Constructor', function () {
    it('Should create object correctly', function () {
      var medida = new Medida (50, 'c');
      expect(medida.valor).to.equal(50);
    });
  });
});
