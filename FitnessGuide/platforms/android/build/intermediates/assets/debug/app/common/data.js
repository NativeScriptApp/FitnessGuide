var Parse = require("~/parse").Parse;
Parse.initialize("laM2O42kKHRui4IdqXubuTPVIAyGXja96ifAqjBe", "X3UZ7w7dlTOCsF3gxw1hmDKHOhnwSkcgih3BtkZr");
console.log(Parse.applicationId);
localStorage = require("localStorage");
console.log(localStorage);
// XMLHttpRequest = require("xmlhttprequest");
// console.log(XMLHttpRequest);
var parseQuery = (function(){
	
	var parseQuery = {
		get:function(){	
			var places = Parse.Object.extend("Place");
			var query = new Parse.Query(places);
			query.find({
			  success: function(results) {
			    console.log("Successfully retrieved " + results.length + " scores.");			    
			    for (var i = 0; i < results.length; i++) {
			      var object = results[i];
			      console.log(object.id + ' - ' + object.get('placeName'));
			    }
			  },
			  error: function(error) {
			    console.log("Error: " + error.code + " " + error.message);
			  }
			});
		},
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