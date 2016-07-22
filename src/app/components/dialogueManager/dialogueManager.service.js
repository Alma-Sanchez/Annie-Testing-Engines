(function(){
	'use strict';
	
	angular.module('awkwardAnnie')
	.service('dialogueService', dialogueService);

	/** @ngInject */
	function dialogueService($http){
		var service = this;
		service.D1CCSTwGr1 = function(){
			return $http.get('assets/json/D1.CC.STwGr.1.json');
		};
		service.D1FFGr1 = function(){
			return $http.get('assets/json/D1.FF.Gr.1.json');
		};
		service.D1FFRQ1 = function(){
			return $http.get('assets/json/D1.FF.RQ.1.json');
		};
		service.D1FFST1 = function(){
			return $http.get('assets/json/D1.FF.ST.1.json');
		};
		service.D1FFST2 = function(){
			return $http.get('assets/json/D1.FF.ST.C2.json');
		};
		service.D1LLSTwGr1 = function(){
			return $http.get('assets/json/D1.LL.STwGr.1.json');
		};
		service.D1MMGr1 = function(){
			return $http.get('assets/json/D1.MM.Gr.1.json');
		};
		service.D1MMRQ1 = function(){
			return $http.get('assets/json/D1.MM.RQ.1.json');
		};
		service.D1MMST1 = function(){
			return $http.get('assets/json/D1.MM.ST.1.json');
		};
	}
})();