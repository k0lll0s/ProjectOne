(function() {
  'use strict';

  angular
    .module('projectOne')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
