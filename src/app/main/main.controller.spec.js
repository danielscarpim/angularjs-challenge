(function() {
  'use strict';

  /**
   * Unit test example
   */
  describe('Main Controller', function() {
    var $controller = null;
    var $scope = {};
    var MainController;

    beforeEach(module('angularChallenge'));
    beforeEach(inject(function(_$controller_) {
      $controller = _$controller_;
      MainController = $controller("MainController as vm", { $scope: $scope });
    }));

    it('should be registered', function() {
      expect(MainController).not.toEqual(null);
    });
  });
})();
