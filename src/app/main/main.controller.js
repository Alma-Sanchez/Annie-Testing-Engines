(function() {
  'use strict';

  angular
    .module('awkwardAnnie')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($log) {
    var vm = this;
    /* HERE :) */
    // These names came from gameManagerRoom.service.js
    //"anniesOffice" "mikesOffice" "fransOffice" "lobby" "conferenceRoom"
    vm.roomKey = "breakRoom"; // The breakRoom is done if you need an example
    

    vm.animationTitle = "";
    vm.playerScore = 0; // Main controller controls score, what characters were spoken too
    vm.convosWithMike = 0;
    vm.hideLinearDialogue = true;
    // for design purposes this is set to false, switch back to true when done
    vm.hideBranchingDialogue = false;
  }
})();
