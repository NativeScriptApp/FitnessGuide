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
               //global.dbData = result.slice(0);
                  for (var i = 0; i < result.length; i++) {
                     
                     var food = {
                           firstFood: result[i].get("firstFood"),
                           secondFood: result[i].get("secondFood"),
                           thirdFood: result[i].get("thirdFood"),
                           explanation: result[i].get("explanation"),
                           picture: result[i].get("picture").url()

                        };

                     global.dbData.push(food);                        
                     //parseQuery.post(food);
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

         var fileData = object["picture"].toBase64String('.jpg', 100);      
         console.log("data");
         var filename= "picture.jpg";
         console.log("name");
         var contentType= "image/jpg";
         var imageFile = new Parse.File(filename, {base64:fileData},contentType);
      console.log("parsefile");
            food.set("category", "Dinner");
				food.set("firstFood", object["firstFood"]);
				food.set("secondFood", object["secondFood"]);
				food.set("thirdFood", object["thirdFood"]);
            food.set("explanation", object["explanation"]);
            food.set("calories", 400);
            food.set("proteins", 40);
            food.set("carbohydrates", 40);
            food.set("fats", 20);
            food.set("picture", imageFile);

				food.save(null, {
					success: function(food) {
						console.log('Food successfully added ! ');
					},
					error: function(food,error) {
						console.log('Error: Food not added: ' + error.message);
					}
				});

console.log("post");
            // var query = new Parse.Query(table);

            // query.find({
            //    success: function(result) {
            //       //global.dbData.length = 0;
            //    //global.dbData = result.slice(0);
            //       for (var i = 0; i < result.length; i++) {
            //          var saved = result[i];
            //          console.log(saved.get('category')+saved.get('firstFood'))
                     
            //       }
            //    },
            //    error: function(error) {
            //       console.log("Error: " + error.code + " " + error.message);
            //    }
            // });
		   },
         test:function(){   
console.log("test");
            var table = Parse.Object.extend("Food1");
            var query = new Parse.Query(table);
console.log(query);
            query.find({
               success: function(result) {
                  console.log(result.length);
                  //global.dbData.length = 0;
               //global.dbData = result.slice(0);
                  for (var i = 0; i < result.length; i++) {
                     var saved = result[i];
                     console.log(saved.get('picture').url());
                     
                  }
               },
               error: function(error) {
                  console.log("Error: " + error.code + " " + error.message);
               }
            });
         }
	};

	return parseQuery;
})();

exports.get = parseQuery.get;
exports.post = parseQuery.post;
exports.test = parseQuery.test;