(function(){
	'use strict';

	angular
		.module('awkwardAnnie')
		.service('jsonFiles', jsonFiles);

	/** @ngInject */
	function jsonFiles(){ //$log parameter goes in here
		var service = {
			"D1.CC.STwGr.1": {
				label: "D1.CC.STwGr.1",
				id: "D1CCSTwGr1"
			},
			"D1.FF.Gr.1":{
				label: "D1.FF.Gr.1",
				id: "D1FFGr1"
			},
			"D1.FF.RQ.1":{
				label: "D1.FF.RQ.1",
				id: "D1FFRQ1"
			},
			"D1.FF.ST.1":{
				label: "D1.FF.ST.1",
				id: "D1FFST1"
			},
			"D1.FF.ST.C2":{
				label: "D1.FF.ST.C",
				id: "D1FFST2"
			},
			"D1.LL.STwGr.1":{
				label: "D1.LL.STwG",
				id: "D1LLSTwGr1"
			},
			"D1.MM.Gr.1":{
				label: "D1.MM.Gr.1",
				id: "D1MMGr1"
			},
			"D1.MM.RQ.1":{
				label: "D1.MM.RQ.1",
				id: "D1MMRQ1"
			},
			"D1.MM.ST.1":{
				label: "D1.MM.ST.1",
				id: "D1MMST1"
			}
		};
		return service;
	}
})();