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
                        global.pictures.push(gameScore[i].get("image"));
                        
                        global.exercises.push({mainMuscle: gameScore[i].get("mainMuscle"),
                           subMuscle: gameScore[i].get("subMuscle"),
                           pics : imageFromSource(gameScore[i].get("image")),
                           explanation: gameScore[i].get("explanation")});

                     }

                     else if(className == "MondayExercise"){
                        global.mondayExercises.push({mainMuscle: gameScore[i].get("mainMuscle"),
                           subMuscle: gameScore[i].get("subMuscle"),
                           objectId: gameScore[i].id,
                           pics : imageFromSource(gameScore[i].get("image")),
                           explanation: gameScore[i].get("explanation")});

                     }
                     else if(className == "TuesdayExercise"){
                        global.tuesdayExercises.push({mainMuscle: gameScore[i].get("mainMuscle"),
                           subMuscle: gameScore[i].get("subMuscle"),
                           objectId: gameScore[i].id,
                           pics : imageFromSource(gameScore[i].get("image")),
                           explanation: gameScore[i].get("explanation")});

                     }
                     else if(className == "WednesdayExercise"){
                        global.wednesdayExercises.push({mainMuscle: gameScore[i].get("mainMuscle"),
                           subMuscle: gameScore[i].get("subMuscle"),
                           objectId: gameScore[i].id,
                           pics : imageFromSource(gameScore[i].get("image")),
                           explanation: gameScore[i].get("explanation")});

                     }
                     else if(className == "ThursdayExercise"){
                        global.thursdayExercises.push({mainMuscle: gameScore[i].get("mainMuscle"),
                           subMuscle: gameScore[i].get("subMuscle"),
                           objectId: gameScore[i].id,
                           pics : imageFromSource(gameScore[i].get("image")),
                           explanation: gameScore[i].get("explanation")});

                     }
                     else if(className == "FridayExercise"){
                        global.fridayExercises.push({mainMuscle: gameScore[i].get("mainMuscle"),
                           subMuscle: gameScore[i].get("subMuscle"),
                           objectId: gameScore[i].id,
                           pics : imageFromSource(gameScore[i].get("image")),
                           explanation: gameScore[i].get("explanation")});

                     }
                     else if(className == "SaturdayExercise"){
                        global.saturdayExercises.push({mainMuscle: gameScore[i].get("mainMuscle"),
                           subMuscle: gameScore[i].get("subMuscle"),
                           objectId: gameScore[i].id,
                           pics : imageFromSource(gameScore[i].get("image")),
                           explanation: gameScore[i].get("explanation")});

                     }
                     else if(className == "SundayExercise"){
                        global.sundayExercises.push({mainMuscle: gameScore[i].get("mainMuscle"),
                           subMuscle: gameScore[i].get("subMuscle"),
                           objectId: gameScore[i].id,
                           pics : imageFromSource(gameScore[i].get("image")),
                           explanation: gameScore[i].get("explanation")});

                     } 
                     
                     else if (className == "Gallery") {
                        global.photos.push({itemImage:gameScore[i].get("itemImage")});
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
   				post:function(className,mainMuscle,subMuscle,image,explanation){
   					var Exercise = Parse.Object.extend(className);
   					var exercise = new Exercise();

   					exercise.set("mainMuscle", mainMuscle);
   					exercise.set("subMuscle", subMuscle);
   					exercise.set("image", image);
                  exercise.set("explanation", explanation);

                  exercise.save(null, {
                     success: function(exercise) {
                        global.objectId = exercise.id;
                        console.log(global.objectId);
                       alert('Exercise successfully added ! ');
                    },
                    error: function(exercise, error) {
                       alert('Error: exercise not added: ' + error.message);
                    }
                 });
               },
               postGallery:function(className,itemImage){
                  var Exercise = Parse.Object.extend(className);
                  var exercise = new Exercise();

                  exercise.set("itemImage", itemImage);

                  exercise.save(null, {
                     success: function(exercise) {
                        alert('Exercise successfully added ! ');
                     },
                     error: function(exercise, error) {
                        alert('Error: exercise not added: ' + error.message);
                     }
                  });
               },
               delete:function(className,objectId){

                  var yourClass = Parse.Object.extend(className);
                  var query = new Parse.Query(yourClass);

                  query.get(objectId, {
                   success: function(yourObj) {

                      yourObj.destroy({
                        success: function(myObject) {
                           alert('Deleted successfully ! ');
                        },
                        error: function(myObject, error) {
                           alert('Error: exercise not deleted: ' + error.message);
                        }
                     });

                   },
                   error: function(object, error) {

                   }
                }); 
               }
            };

            return parseQuery;
         })();

         exports.get = parseQuery.get;
         exports.post = parseQuery.post;
         exports.getAll = parseQuery.getAll;
         exports.postGallery = parseQuery.postGallery;
         exports.delete = parseQuery.delete;