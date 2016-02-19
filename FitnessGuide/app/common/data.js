var Parse = require("~/parse").Parse;
Parse.initialize("yyiYli6L5Kpr4DxaNdzBxX8sw4PzS28PMIOuaywU", "jtXjRMjijevWLMSciiaHB2pnloFpUSC9AHtjE5Q7");
localStorage = require("localStorage");

var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");
var directory = "/../images/";

var parseQuery = (function(){
	

      // function za sazdavane na patq do snimkata
      function imageFromSource(imageName) {
      	return imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + imageName + ".jpg"));
      };

      var parseQuery = {
      	get:function(className){	

      		var GameScore = Parse.Object.extend(className);
      		var query = new Parse.Query(GameScore);
      		query.find({
      			success: function(gameScore) {

      				for (var i = 0; i < gameScore.length; i++) {
      					if(className == "Exercise"){
      						global.exercises.push({mainMuscle: gameScore[i].get("mainMuscle"),
      													  subMuscle: gameScore[i].get("subMuscle"),
      														  pics : imageFromSource(gameScore[i].get("image"))});

      					}

      					else if(className == "MondayExercise"){
  							global.mondayExercises.push({mainMuscle: gameScore[i].get("mainMuscle"),
      													  subMuscle: gameScore[i].get("subMuscle"),
      														  pics : imageFromSource(gameScore[i].get("image"))});

      					}
      					else if(className == "TuesdayExercise"){
  							global.tuesdayExercises.push({mainMuscle: gameScore[i].get("mainMuscle"),
      													  subMuscle: gameScore[i].get("subMuscle"),
      														  pics : imageFromSource(gameScore[i].get("image"))});

      					}
      					else if(className == "WednesdayExercise"){
  							global.wednesdayExercises.push({mainMuscle: gameScore[i].get("mainMuscle"),
      													  subMuscle: gameScore[i].get("subMuscle"),
      														  pics : imageFromSource(gameScore[i].get("image"))});

      					}
      					else if(className == "ThursdayExercise"){
  							global.thursdayExercises.push({mainMuscle: gameScore[i].get("mainMuscle"),
      													  subMuscle: gameScore[i].get("subMuscle"),
      														  pics : imageFromSource(gameScore[i].get("image"))});

      					}
      					else if(className == "FridayExercise"){
  							global.fridayExercises.push({mainMuscle: gameScore[i].get("mainMuscle"),
      													  subMuscle: gameScore[i].get("subMuscle"),
      														  pics : imageFromSource(gameScore[i].get("image"))});

      					}
      					else if(className == "SaturdayExercise"){
  							global.saturdayExercises.push({mainMuscle: gameScore[i].get("mainMuscle"),
      													  subMuscle: gameScore[i].get("subMuscle"),
      														  pics : imageFromSource(gameScore[i].get("image"))});

      					}
      					else if(className == "SundayExercise"){
  							global.sundayExercises.push({mainMuscle: gameScore[i].get("mainMuscle"),
      													  subMuscle: gameScore[i].get("subMuscle"),
      														  pics : imageFromSource(gameScore[i].get("image"))});

      					}

      					console.log(gameScore[i].get("mainMuscle"));
      				}
      			},
      			error: function(object, error) {

      			}
      		});
      	},

         getAll:function(className){   

            var table = Parse.Object.extend(className);
            var query = new Parse.Query(table);

            query.find({
               success: function(result) {
                  global.dbData.length = 0;
               //global.dbData = result.slice(0);
                  for (var i = 0; i < result.length; i++) {
                     global.dbData.push(
                        {
                           firstFood: result[i].get("firstFood"),
                           secondFood: result[i].get("secondFood"),
                           thirdFood: result[i].get("thirdFood"),
                           explanation: result[i].get("explanation"),
                           picture: imageFromSource(result[i].get("picture"))
                        });
                  }
               },
               error: function(error) {
                  console.log("Error: " + error.code + " " + error.message);
               }
            });
         },
   				//post ne raboti zasega!
   				post:function(){
   					var GameScore = Parse.Object.extend("GameScore");
   					var gameScore = new GameScore();

   					gameScore.set("score", 1337);
   					gameScore.set("playerName", "Sean Plott");
   					gameScore.set("cheatMode", false);

   					gameScore.save(null, {
   						success: function(gameScore) {
   							console.log('New object created with objectId: ' + gameScore.id);
   						},
   						error: function(gameScore, error) {
   							alert('Failed to create new object, with error code: ' + error.message);
   						}
   					});

   					var query = new Parse.Query(GameScore);
			//query.equalTo("playerName", "Dan Stemkoski");
			query.find({
				success: function(results) {
					console.log("Successfully retrieved " + results.length + " scores.");
			    // Do something with the returned Parse.Object values
			    for (var i = 0; i < results.length; i++) {
			    	var object = results[i];
			    	console.log(object.id + ' - ' + object.get('playerName'));
			    }
			},
			error: function(error) {
				alert("Error: " + error.code + " " + error.message);
			}
		});

		}
	};

	return parseQuery;
})();

exports.get = parseQuery.get;
exports.post = parseQuery.post;
exports.getAll = parseQuery.getAll;