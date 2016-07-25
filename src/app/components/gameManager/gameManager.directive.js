(function(){
	'use strict';

	angular
		.module('awkwardAnnie')
		.directive('gameManager', gameManager);

	/** @ngInject */
	function gameManager(gameManagerCharacterData,gameManagerRoomData, gameManagerFurnitureData, $log){
		var directive = {
			restrict:'E',
			// templateUrl: defined in index.route.js file 
			// link: link,
			scope: {
				main: "=",
				hideBranchingDialogue: "=",
				room: "="  //ng-click &, evaluated but can't be changed, similar to attribute @, if it's missing ?
			},
			controller: controller, //controller for this directive
			controllerAs:'vm',
			bindToController: true
		};
		return directive;

		/** @ngInject */
		function controller($scope){ //needs to be inside gameManager and have inject before
			var vm = this;
			var myCanvas;
			var bg;
			var walking_Speed = 4;
			var annieSprite, 
					annie_Walking;
			var mikeSprite;
			var currentRoomKey = vm.room;
			var currentRoomData = gameManagerRoomData[currentRoomKey];
			var furniture = [];

			var currentRoom = function(room){
				/*==============================================
					Preload
				================================================*/
				room.preload = function(){
					//image will have to change later on
					bg = room.loadImage(currentRoomData.bg);
				};

				/*==============================================
					Setup
				================================================*/
				room.setup = function(){
					$log.log(gameManagerRoomData);
					room.frameRate(30);
					myCanvas = room.createCanvas(950,500);
					myCanvas.parent(angular.element.find("game-manager")[0]); // equivalent of $($element)[0]);
					
					setFurniture(currentRoomData);
					// instantiateCharacters(currentRoomData);
					mikeSprite = room.createSprite(currentRoomData.characters.mike.startingX,currentRoomData.characters.mike.startingY);
					mikeSprite.setCollider("rectangle",currentRoomData.characters.mike.colliderXoffset,currentRoomData.characters.mike.colliderYoffset,currentRoomData.characters.mike.width,currentRoomData.characters.mike.height);
					// mikeSprite.debug = true;

					annieSprite = room.createSprite(currentRoomData.characters.annie.startingX,currentRoomData.characters.annie.startingY);
					annieSprite.setCollider("rectangle",currentRoomData.characters.annie.colliderXoffset,currentRoomData.characters.annie.colliderYoffset,currentRoomData.characters.annie.width,currentRoomData.characters.annie.height);
					annieSprite.debug = true;
					
					/*====================
						Add animations  --> will change to add characters

						Call function that adds all of the animations and takes in the character data from the service
						and the characterSprite as parameters
					======================*/
					addAnimationsToChar(gameManagerCharacterData.mike, mikeSprite);
					addAnimationsToChar(gameManagerCharacterData.annie, annieSprite);
				}; //end of setup

				/*==============================================
					Draw
				================================================*/
				room.draw = function(){
					room.background(bg);
					collisionswithFurniture(annieSprite,furniture);
					annieSprite.collide(mikeSprite, loadDialogue);
					if(annie_Walking === true){
						// $log.log(annieSprite.position.x);
						if(room.keyCode == room.LEFT_ARROW /*&& annieSprite.position.x >= 70 && annieSprite.position.x <= 900*/){ //walk left
							annieSprite.changeAnimation("walkingSide");
							annieSprite.mirrorX(1);
							annieSprite.velocity.x = -walking_Speed;
							annieSprite.velocity.y = 0;
						} else if (room.keyCode == room.RIGHT_ARROW /*PosX+(Width/2) < width*/) { //walk right
							annieSprite.changeAnimation("walkingSide");
							annieSprite.mirrorX(-1);
							annieSprite.velocity.x = walking_Speed;
							annieSprite.velocity.y = 0;
						}else if (room.keyCode == room.UP_ARROW /*PosY + (Width/2) < topNav*/){ //walk up, away from the player
							annieSprite.changeAnimation("walkingUp");
							annieSprite.velocity.y = -walking_Speed;
							annieSprite.velocity.x = 0;
						}else if (room.keyCode == room.DOWN_ARROW /* PosY+(Height/2) < height*/){ //walk down, towards the player
							annieSprite.changeAnimation("walkingDown");
							annieSprite.velocity.y = walking_Speed;
							annieSprite.velocity.x = 0;
						}
					//if not walking or out of bounds, draw standing image
					}	else if(annie_Walking === false){ 
							annieSprite.velocity.x = 0; //Stop annie from walking
							annieSprite.velocity.y = 0;
						if(room.keyCode == room.LEFT_ARROW){
							annieSprite.changeAnimation("standingSide");
							annieSprite.mirrorX(1);
						}else if(room.keyCode == room.RIGHT_ARROW){
							annieSprite.changeAnimation("standingSide");
							annieSprite.mirrorX(-1);
						}else if(room.keyCode == room.UP_ARROW){
							annieSprite.changeAnimation("standingUp");
						}else if(room.keyCode == room.DOWN_ARROW ){
							annieSprite.changeAnimation("standingDown");
						}
					}
					room.drawSprites();
				}; //end of draw 

				// Check to see if a keys were pressed
				room.keyPressed = function(event){
					// $log.log(annieSprite.position.x);
					annie_Walking = true;
					//  event.preventDefault();
					// event.returnValue = false;
					// return false;
					
				};
				// Check when key is released and stop walking
				room.keyReleased = function(event){
					// $log.log(event);
					annie_Walking = false;
					// 	 event.preventDefault();
					// event.returnValue = false;
					// return false;
				};

				//position and create furniture, need to use room so function has to be in a different scope
				function setFurniture(currentRoom) {
					for(var item in currentRoomData.furniture){
						var itemData = [item];
						itemData = itemData.concat(currentRoomData.furniture[item].image);
						var spriteName = item+"Sprite";
						spriteName = room.createSprite(currentRoomData.furniture[item].posX, currentRoomData.furniture[item].posY);
						spriteName.setCollider("rectangle",currentRoomData.furniture[item].collider_X_offset,currentRoomData.furniture[item].collider_Y_offset,currentRoomData.furniture[item].width,currentRoomData.furniture[item].height);
						spriteName.addAnimation(item, gameManagerFurnitureData[item]);
						spriteName.debug = true;
						// furnitureSprite.setCollider for specific colliders
						furniture.push(spriteName);
					}
				}
			}; //end of current room object

			// Create p5 object
			var myp5 = new p5(currentRoom);


			/*==============================================
				Functions with no room dependencies
			================================================*/

			//Char def is from service
			function addAnimationsToChar(characterDefinition, characterSprite) {
				for(var animationKey in characterDefinition.animations){
					var frames = [animationKey];
					frames = frames.concat(characterDefinition.animations[animationKey]);
					characterSprite.addAnimation.apply(animationKey, frames);
				}
			}
			// Check for collisions with furniture
			function collisionswithFurniture(sprite,collisions){
				for(var furnitureItem in collisions){
						sprite.collide(collisions[furnitureItem],specialCollision(collisions[furnitureItem]));
				}
			}

			// If collided with a door, then load level and check game stats
			function specialCollision(sprite){
				// if(sprite.getAnimationLabel() == "door_top"){
				// 	$log.log(sprite);
				// }
			}

			// Create characters in the room
			function instantiateCharacters(currentRoom){
				// for(var character in gameManagerCharacterData.currentRoom.characters){
				// 		// $log.log(character);
				// }
			}
			// Show Dialogue
			function loadDialogue(){
				vm.main.hideBranchingDialogue = false;
				$scope.$apply();  //In case html isn't updating and variable is
			}
		} //end of controller
	} //end of game manager/file
})();