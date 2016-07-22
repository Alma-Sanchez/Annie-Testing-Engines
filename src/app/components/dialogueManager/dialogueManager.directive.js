(function(){
	'use strict';

	angular
		.module('awkwardAnnie')
		.directive('displayDialouge', displayDialouge);

	/** @ngInject */
	function displayDialouge(dialogueService,jsonFiles, $log){ //$log parameter goes in here
		var directive = {
			restrict: 'E',
			templateUrl: 'app/components/dialogueManager/dialogue.html',
			scope: {
				main: "=",
				selectedValue: "=",
				convosWithMike: "=",
				animationTitle: "=",
				hideBranchingDialogue: "="
			},
			controller: displayDialougeController,
			controllerAs: 'vm',
			bindToController: true
		};
		return directive;

		/** @ngInject */
		function displayDialougeController($scope){
			var vm = this;
			var dialogueRoot;
			var codeNode2;
			vm.list = jsonFiles;
			vm.optionChanged = optionChanged;
			vm.showContinue = false;
			vm.node1Hidden = false;
			vm.node2Hidden = true;
			vm.node3Hidden = true;
			vm.responseHidden = true; //hide choice initially
			vm.node3Response = true;
			vm.showNode2 = showNode2;
			vm.showNode3 = showNode3;
			vm.showNode3Response = showNode3Response;

		/*
			Functions
		*/
		function optionChanged(jsonSelected){
			var selectedConversation = $scope.selectedValue.id;
			chooseDialogueScript(selectedConversation);
		}
			function chooseDialogueScript(fileName){
				dialogueRoot = "";
				vm.choice = "";
				vm.choice2 = "";
				vm.choice3 = "";
				vm.node1Hidden = false;
				vm.node2Hidden = true;
				vm.node3Hidden = true;
				vm.node1Response = "";
				vm.node2Response = "";
				vm.node3Response = "";

				dialogueService[fileName]().then(function(response){
					dialogueRoot = response.data;
					vm.choice = dialogueRoot.node1;
					vm.choice2 = dialogueRoot.node2;
					vm.choice3 = dialogueRoot.node3;
				});
			}//function

			function showNode2(choice){  // Hide previous button
				// vm.node1Hidden = false;
				vm.node2Hidden = false; //show if choice is clicked
				vm.node3Hidden = true;
				vm.node1Response = choice.NPC_Response;
				codeNode2 = choice.code;
				vm.choice2 = dialogueRoot.node2[codeNode2]; //data needed to pull up choices
				var addClassTo = angular.element(choice.code);
				$log.log(addClassTo);
				addClassTo.addClass("selected");
			}//end of showNode2

			function showNode3(choice){
				vm.node3Hidden = false;
				vm.node2Response = choice.NPC_Response;
				var codeNode3 = choice.code;
				vm.choice3 = dialogueRoot.node3[codeNode3];
			}//end of showNode3
			
			function showNode3Response(choice){ //choice parameter
				vm.node3Response = choice.NPC_Response;
			}
			// function clickContinue(){
			// 	vm.main.hideBranchingDialogue = true;
			// 	vm.chosenAnnie = "";
			// 	vm.npcResponse = "";

			// 	vm.responseHidden = true; //hide choice initially
			// 	vm.node3Response = true;
			// 	vm.showContinue = false;
			// 	vm.main.animationTitle = "";
			// 	// Stats
			// 	vm.main.convosWithMike += 1;
			// 	vm.main.playerScore += 10; //update score
			// 	// Reset dialogue
			// 	chooseDialogueScript();
			// }
		}//end of controller
	}
})();