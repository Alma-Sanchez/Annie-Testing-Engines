(function() {
  'use strict';

  angular
    .module('awkwardAnnie')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    var vm = this;
    vm.animationTitle = "";
    $log.log(vm.animationTitle);
    vm.playerScore = 0; // Main controller controls score, what characters were spoken too
    vm.convosWithMike = 0;
    vm.roomKey = "breakRoom"; // Look at gameManagerData for correct names
    vm.hideLinearDialogue = true;
    // for design purposes this is set to false, switch back to true when done
    vm.hideBranchingDialogue = false;
  }
})();
