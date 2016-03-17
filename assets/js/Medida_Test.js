var expect = chai.expect;

describe('Testing Constructors of all classes', function() {
  describe('Celsius: Constructor with 1 argument', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100c');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("c");
    });
  });
  describe('Celsius: Constructor with 2 arguments', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100', 'c');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("c");
    });
  });
  describe('Fahrenheit: Constructor with 1 argument', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100f');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("f");
    });
  });
  describe('Fahrenheit: Constructor with 2 arguments', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100', 'f');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("f");
    });
  });
  describe('Kelvin: Constructor with 1 argument', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100k');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("k");
    });
  });
  describe('Kelvin: Constructor with 2 arguments', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100', 'k');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("k");
    });
  });
  describe('Meters: Constructor with 1 argument', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100m');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("m");
    });
  });
  describe('Meters: Constructor with 2 arguments', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100', 'm');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("m");
    });
  });
  describe('Inches: Constructor with 1 argument', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100i');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("i");
    });
  });
  describe('Inches: Constructor with 2 arguments', function () {
    it('Should have value and type', function () {
      var medida = new Medida('100', 'i');
      expect(medida.valor).to.equal('100');
      expect(medida.tipo).to.equal("i");
    });
  });
});

describe('Testing Temperature Class', function() {
  describe('Convertions are correctly implemented', function () {
    it('Should convert from Celsius to Fahrenheit', function () {
      var convertion = Medida.convertir('50c to f');
      expect(convertion).to.equal('122 Farenheit');
    });
    it('Should convert from Celsius to Kelvin', function () {
      var convertion = Medida.convertir('50c to k');
      expect(convertion).to.equal('323.15 Kelvin');
    });
    it('Should convert from Fahrenheit to Celsius', function () {
      var convertion = Medida.convertir('50f to c');
      expect(convertion).to.equal('10 Celsius');
    });
    it('Should convert from Fahrenheit to Kelvin', function () {
      var convertion = Medida.convertir('50f to k');
      expect(convertion).to.equal('283.15 Kelvin');
    });
    it('Should convert from Kelvin to Celsius', function () {
      var convertion = Medida.convertir('50k to c');
      expect(convertion).to.equal('-223.14999999999998 Celsius');
    });
    it('Should convert from Kelvin to Fahrenheit', function () {
      var convertion = Medida.convertir('50k to f');
      expect(convertion).to.equal('-369.67 Farenheit');
    });
  });
});

describe('Testing Medida Class', function() {
  describe('Convertions are correctly implemented', function () {
    it('Should convert from Meters to Inches', function () {
      var convertion = Medida.convertir('100m to i');
      expect(convertion).to.equal('3937.01 Inches');
    });
    it('Should convert from Inches to Meters', function () {
      var convertion = Medida.convertir('100i to m');
      expect(convertion).to.equal('2.5399986284007405 Meters');
    });
  });
});
