(function() {
  'use strict';

  angular
    .module('awkwardAnnie')
    .directive('navBar', navBar);

  /** @ngInject */
  function navBar($log) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
      //  get variables from elsewhere
          playerScore: '='
      },
      controller: NavbarController,
      controllerAs: 'nav',
      bindToController: true
    };
    return directive;
    
    /** @ngInject */
    function NavbarController($scope) {
      // $log.log($scope);
      // $scope.playerScore = 0;
      
      // "vm.creationDate" is available by directive option "bindToController: true"
      // vm.relativeDate = moment(vm.creationDate).fromNow();
    }
  }

})();
