(function(){
	'use strict';

	angular
		.module('awkwardAnnie')
		.service('gameManagerRoomData', gameManagerRoomData);

	/** @ngInject */
	function gameManagerRoomData(){
		/* Use the breakRoom object as a n example, it's further down
			game screen dimensions are 950 x 500  (width y height)
			images for furniture was defined in another file, names of the furniture items is at the bottom but also in gameManagerFurniture.service.js
			in case you need the image file name
			I think you figured this out, but use commas if you're adding things after

		*/
		var roomData = {
			anniesOffice: {
				bg: "assets/images/rooms/Annie-Room-Bkgd.jpg", //comma since there are more items after
				characters: {},
				furniture:{ 
					item1: { //replace with furniture name
						startingX: 0, startingY: 0, //on the same line to save room
						colliderXoffset: 0, colliderYoffset: 0, //leave this as 0 for all of them
						width: 0, height: 0 //this is the width and height of the collider, 
						//so you can leave this as 0 unless you want to guesstimate where it's okay for Annie can walk into things. 
						//for instance, she can walk into the conference room legs, but not the actual table. The defualt size is the size of the image.
						//Stuff on the wall can be it's regular size
					},
					item2:{
						startingX: 0, startingY: 0,
						colliderXoffset: 0, colliderYoffset: 0,
						width: 0, height: 0
					}

				} //last item doesn't need any commas or ;
			},			
			mikesOffice: {
				bg: "assets/images/rooms/Mike-Room-Bkgd.jpg",
				characters: {},
				furniture:{

				}
			},
			fransOffice: {
				bg: "assets/images/rooms/Fran-Room-Bkgd.jpg",
				characters: {},
				furniture:{

				}
			},
			lobby: {
				bg: "assets/images/rooms/Lobby-Bkgd.jpg",
				characters: {},
				furniture:{

				}
			},
			breakRoom: {
				bg: "assets/images/rooms/Break-Room-Bkgd.jpg",
				characters:{
					annie:{
						startingX: 800, startingY: 200,
						colliderXoffset: -2, colliderYoffset: 75,
						width: 60, height: 35
					},
					mike:{
						startingX: 430, startingY: 180,
						colliderXoffset: -2, colliderYoffset: 60,
						width: 60, height: 60
					}
				},
				furniture: {
					breakRoom_Poster1: {
						posX: 600, posY: 55,
						width: 90, height: 100,
						collider_X_offset: 0, collider_Y_offset: 0
					},
					breakRoom_Poster2: {
						posX: 930, posY: 200,
						width: 40, height: 350,
						collider_X_offset: 0, collider_Y_offset: 0

					},
					foldingChair_1:{ 
						posX: 600, posY: 200,
						width: 70, height: 90,
						collider_X_offset: 0, collider_Y_offset: 0

					},
					foldingChair_3:{ //sideways
						posX: 100, posY: 205,
						width: 100, height: 150,
						collider_X_offset: 0, collider_Y_offset: 0

					},
					foldingChair_2:{ //angle
						posX: 100, posY: 325,
						width: 80, height: 100,
						collider_X_offset: 0, collider_Y_offset: 0

					},
					breakRoom_Table:{
						posX: 250, posY: 200,
						width: 300, height: 110,
						collider_X_offset: 0, collider_Y_offset: -5

					},
					waterCooler:{
						posX: 520, posY: 150,
						width: 60, height: 180,
						collider_X_offset: 0, collider_Y_offset: 0

					},
					plant_1:{
						posX: 880, posY: 400,
						width: 55, height: 190,
						collider_X_offset: 0, collider_Y_offset: 0

					},
					door_top:{
						posX: 800, posY: 95,
						width: 300, height: 165,
						collider_X_offset: 0, collider_Y_offset: 0

					}
				}
			},
			conferenceRoom:{
				bg: "assets/images/rooms/Conference-Room-Bkgd.jpg",
				characters: {},
				furniture:{

				}
			}
		};
		return roomData;
	}
})();
// Name  of furniture items, need to be the same
// annies_whiteBoard
// anniesRoomDesk
// chair_1
// chair_2
// chair_3
// blueChair_1
// blueChair_2
// breakRoom_Poster1
// breakRoom_Poster2
// breakRoom_Table
// cabinet_1
// cabinet_2
// clock
// coffeeTable
// conferenceRoomTable
// couch1
// couch2
// computerDesk_1
// doorSide_Left
// doorSide_Right
// door_top
// foldingChair_1
// foldingChair_2
// foldingChair_3
// lamp
// plant_1
// plant_2
// waterCooler
// whiteBoard