var Parse = require("~/parse").Parse;
Parse.initialize("yyiYli6L5Kpr4DxaNdzBxX8sw4PzS28PMIOuaywU", "jtXjRMjijevWLMSciiaHB2pnloFpUSC9AHtjE5Q7");
localStorage = require("localStorage");
console.log(localStorage);
// XMLHttpRequest = require("xmlhttprequest");
// console.log(XMLHttpRequest);
var parseQuery = (function(){
	
	var parseQuery = {
		get:function(className){	
			var GameScore = Parse.Object.extend(className);
			var query = new Parse.Query(GameScore);
			query.find({
				success: function(gameScore) {

					for (var i = 0; i < gameScore.length; i++) {
						global.exercises.push({firstName: gameScore[i].get("mainMuscle"),
							                    lastName: gameScore[i].get("subMuscle")});


						console.log(gameScore[i].get("mainMuscle"));
					}
					console.log(global.exercises.length);
				},
				error: function(object, error) {

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