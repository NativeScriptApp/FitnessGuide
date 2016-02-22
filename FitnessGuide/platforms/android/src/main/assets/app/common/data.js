var Parse = require("~/parse").Parse;
Parse.initialize("yyiYli6L5Kpr4DxaNdzBxX8sw4PzS28PMIOuaywU", "jtXjRMjijevWLMSciiaHB2pnloFpUSC9AHtjE5Q7");
localStorage = require("localStorage");

var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");
var directory = "/../images/";

var parseQuery = (function(){

      function imageFromSource(imageName) {
      	return imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + imageName + ".jpg"));
      };

      var parseQuery = {
      	get:function(className){	

      		var Exercise = Parse.Object.extend(className);
      		var query = new Parse.Query(Exercise);
      		query.find({
      			success: function(result) {

      				for (var i = 0; i < result.length; i++) {
      					if(className == "Exercise"){
                        global.pictures.push(result[i].get("image"));
                        
                        global.exercises.push({mainMuscle: result[i].get("mainMuscle"),
                           subMuscle: result[i].get("subMuscle"),
                           pics : imageFromSource(result[i].get("image")),
                           explanation: result[i].get("explanation")});
                     }
                     else if (className == "Gallery") {
                        global.photos.push({itemImage:result[i].get("itemImage")});
                     }
                     else {
                        global.all.push({mainMuscle: result[i].get("mainMuscle"),
                           subMuscle: result[i].get("subMuscle"),
                           objectId: result[i].id,
                           pics : imageFromSource(result[i].get("image")),
                           explanation: result[i].get("explanation")});

                     }

                     console.log(result[i].get("mainMuscle"));
                  }
               },
               error: function(object, error) {

               }
            });
      	},
       
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
       getGallery:function(){   

            var table = Parse.Object.extend("Gallery");
            var query = new Parse.Query(table);
            query.descending("createdAt");

            query.find({
               success: function(result) {
                  //global.photos.length = 0;

                  for (var i = 0; i < result.length; i++) {
                     var pic = {
                           itemImage: result[i].get("itemImage").url()
                        };

                     global.photos.push(pic); 
                  }
               },
               error: function(error) {
                  console.log("Error: " + error.code + " " + error.message);
               }
            });
         },

       postGallery:function(itemImage){
         var table = Parse.Object.extend("Gallery");
         var myPhoto = new table();

         var fileData = itemImage.toBase64String('.jpg', 100); 
         console.log(fileData);
         var filename= "picture.jpg";
         var contentType= "image/jpg";
         var imageFile = new Parse.File(filename, {base64:fileData},contentType);
         console.log(imageFile);
         myPhoto.set("itemImage", imageFile);

         myPhoto.save(null, {
            success: function(myPhoto) {
               alert('MyPhoto successfully added ! ');
            },
            error: function(myPhoto, error) {
               alert('Error: MyPhoto not added: ' + error.message);
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
exports.postGallery = parseQuery.postGallery;
exports.getGallery = parseQuery.getGallery;
exports.delete = parseQuery.delete;