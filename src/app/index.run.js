(function() {
  'use strict';

  angular
    .module('karmaWherejs')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
