var expect = chai.expect;

beforeEach(function() {
  var medida = new Medida (50, 'c');
});

describe('Medida Class', function() {
  describe('Constructor', function () {
    it('Should create object correctly', function () {
      expect(medida.valor).to.equal(50);
    });
  });
});
