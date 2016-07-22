(function() {
  'use strict';

  angular
    .module('awkwardAnnie')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    //remove url later, before release
    // use different controller for welcome screen
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
    $stateProvider
      .state('RoomEngine', {
        url: '/RoomEngine',
        templateUrl: 'app/components/gameManager/awkwardAnnieGame.html',
        controller: 'MainController',
        controllerAs: 'main'
      });
    $stateProvider
      .state('DialogueEngine', {
        url: '/DialogueEngine',
        templateUrl: 'app/components/dialogueManager/dialogueManager.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $urlRouterProvider.otherwise('/');
  }

})();
