var expect = chai.expect;

describe('Temperature', function() {
  describe('#convertir()', function () {
    it('should convert from Celsius to Kelvin', function () {
      expect(Medida.convertir('-273.15C')).to.equal("0 kelvin");
    });
  });
});
