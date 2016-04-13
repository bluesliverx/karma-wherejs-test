(function () {
  'use strict';

  describe('wherejs', function () {

    beforeEach(module('karmaWherejs'));

    it('fails with undefined is not a constructor', function () {
      where(function () {
        /***
         a  |  b  |  c
         2  |  2  |  3
         5  |  3  |  7
         1  |  1  |  2
         ***/
        expect(a + b).toBe(c);
      }, {strategy: 'jasmine', jasmine: jasmine});
    });

    it('works as expected when all tests fail', function () {
      where(function () {
        /***
         a  |  b  |  c
         2  |  2  |  3
         5  |  3  |  7
         //1  |  1  |  2
         ***/
        expect(a + b).toBe(c);
      }, {strategy: 'jasmine', jasmine: jasmine});
    });

    it('fails with cannot find jasmine', function () {
      where(function () {
        /***
         a  |  b  |  c
         2  |  2  |  3
         5  |  3  |  7
         6  |  6  |  12
         ***/
        expect(a + b).toBe(c);
      }, {strategy: 'jasmine'});
    });
  });
})();
