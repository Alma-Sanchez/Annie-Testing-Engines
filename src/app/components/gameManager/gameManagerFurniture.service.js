(function(){
	'use strict';
	
	angular
		.module('awkwardAnnie')
		.service('gameManagerFurnitureData', gameManagerFurnitureData);

		/** @ngInject */
		function gameManagerFurnitureData(){
			// name of furniture must be the same as the furniture object in gameManagerRoom.service
			var furnitureData = {
				annies_whiteBoard: "assets/images/rooms/Room_Items/Annie_Room-Board.png",
				anniesRoomDesk: "assets/images/rooms/Room_Items/Annie-Room-Desk.png",
				chair_1: "assets/images/rooms/Room_Items/Beige-Chair1.png",
				chair_2: "assets/images/rooms/Room_Items/Beige-Chair2.png",
				chair_3: "assets/images/rooms/Room_Items/Beige-Chair3.png",
				blueChair_1: "assets/images/rooms/Room_Items/Blue-Chair1.png",
				blueChair_2: "assets/images/rooms/Room_Items/Blue-Chair2.png",
				breakRoom_Poster1: "assets/images/rooms/Room_Items/Break-Room-Poster1.png",
				breakRoom_Poster2: "assets/images/rooms/Room_Items/Break-Room-Poster2.png",
				breakRoom_Table: "assets/images/rooms/Room_Items/Break-Room-Table.png",
				cabinet_1: "assets/images/rooms/Room_Items/Cabinet1.png",
				cabinet_2: "assets/images/rooms/Room_Items/Cabinet2.png",
				clock: "assets/images/rooms/Room_Items/Clock1.png",
				coffeeTable: "assets/images/rooms/Room_Items/coffee-table.png",
				conferenceRoomTable: "assets/images/rooms/Room_Items/Conference-Room-Table.png",
				couch1: "assets/images/rooms/Room_Items/Couch1.png",
				couch2: "assets/images/rooms/Room_Items/Couch2.png",
				computerDesk_1: "assets/images/rooms/Room_Items/desk-computer1.png",
				doorSide_Left: "assets/images/rooms/Room_Items/Door-side-left.png",
				doorSide_Right: "assets/images/rooms/Room_Items/Door-side-right.png",
				door_top: "assets/images/rooms/Room_Items/Door-top.png",
				foldingChair_1: "assets/images/rooms/Room_Items/Folding-Chair1.png",
				foldingChair_2: "assets/images/rooms/Room_Items/Folding-Chair2.png",
				foldingChair_3: "assets/images/rooms/Room_Items/Folding-Chair3.png",
				lamp: "assets/images/rooms/Room_Items/Lamp1.png",
				plant_1: "assets/images/rooms/Room_Items/Plant1.png",
				plant_2: "assets/images/rooms/Room_Items/Plant2.png",
				waterCooler: "assets/images/rooms/Room_Items/Water-Cooler.png",
				whiteBoard: "assets/images/rooms/Room_Items/Whiteboard.png"
			};
			return furnitureData;
		}
})();