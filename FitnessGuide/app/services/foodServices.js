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

            var table = Parse.Object.extend("Food1");
            var query = new Parse.Query(table);
            query.equalTo("category", className);

            query.find({
               success: function(result) {
                  global.dbData.length = 0;

                  for (var i = 0; i < result.length; i++) {
                     
                     var food = {
                           category: result[i].get("category"),
                           firstFood: result[i].get("firstFood"),
                           secondFood: result[i].get("secondFood"),
                           thirdFood: result[i].get("thirdFood"),
                           proteins: result[i].get("proteins"),
                           carbohydrates: result[i].get("carbohydrates"),
                           fats: result[i].get("fats"),
                           calories: result[i].get("calories"),
                           explanation: result[i].get("explanation"),
                           picture: result[i].get("picture").url()

                        };
                     global.dbData.push(food); 
                  }
               },
               error: function(error) {
                  console.log("Error: " + error.code + " " + error.message);
               }
            });
         },
   				
			post:function(object){
				var table = Parse.Object.extend("Food1");
				var food = new table();
         console.log("post");

         var fileData = object["picture"]; 
         var filename= "picture.jpg";
         var contentType= "image/jpg";
         var imageFile = new Parse.File(filename, {base64:fileData},contentType);
            console.log("parsefile");
            food.set("category", object["category"]);
				food.set("firstFood", object["firstFood"]);
				food.set("secondFood", object["secondFood"]);
				food.set("thirdFood", object["thirdFood"]);
            food.set("explanation", object["explanation"]);
            food.set("calories", object["calories"]);
            food.set("proteins", object["proteins"]);
            food.set("carbohydrates", object["carbohydrates"]);
            food.set("fats", object["fats"]);
            food.set("picture", imageFile);

				food.save(null, {
					success: function(food) {
						alert('Food successfully added ! ');
					},
					error: function(food,error) {
						alert('Error: Food not added: ' + error.message);
					}
				});
		   }
	};

	return parseQuery;
})();

exports.get = parseQuery.get;
exports.post = parseQuery.post;