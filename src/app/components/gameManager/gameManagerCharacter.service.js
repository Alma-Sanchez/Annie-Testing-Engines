(function(){
	'use strict';

	angular
		.module('awkwardAnnie')
		.service('gameManagerCharacterData', gameManagerCharacterData);

	/** @ngInject */
	function gameManagerCharacterData(){
		var gameCharacterData = {
			annie: {
				animations: {
					"standingDown": ["assets/images/Characters/Annie/Annie-dn5.png"],
					"walkingDown": ["assets/images/Characters/Annie/Annie-dn1.png", "assets/images/Characters/Annie/Annie-dn4.png"],
					"standingUp": ["assets/images/Characters/Annie/Annie-up5.png"],
					"walkingUp": ["assets/images/Characters/Annie/Annie-up1.png","assets/images/Characters/Annie/Annie-up4.png"],
					"talking": ["assets/images/Characters/Annie/Annie-StandR.png"],
					"standingSide": ["assets/images/Characters/Annie/Annie-L5.png"],
					"walkingSide": ["assets/images/Characters/Annie/Annie-L1.png","assets/images/Characters/Annie/Annie-L4.png"]
				}
			},
			mike: {
				animations: {
					"standing": ["assets/images/Characters/Mike/Mike-Stand-Angle-Right.png"],
					// "talking": ["assets/images/Characters/Mike/Mike-Stand-Angle-Left.png","assets/images/Characters/Mike/"],
					"mike_surprised": ["assets/images/Characters/Mike/Mike-Surprised0001.png","assets/images/Characters/Mike/Mike-Surprised0024.png"]
				}
			},
			fran: {
					animations: {
						"label": ["assets/images/Characters"]
					}
			},
			charlie: {
				animations: {
					"label": ["assets/images/Characters"]
				}
			},
			luna: {
				animations: {
					"label": ["assets/images/Characters"]
				}
			}
		}
		return gameCharacterData;
	}
})();