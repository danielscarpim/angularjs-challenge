(function() {
  'use strict';

  angular
    .module('angularChallenge')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {
    $log.debug('runBlock end');
  }

})();
