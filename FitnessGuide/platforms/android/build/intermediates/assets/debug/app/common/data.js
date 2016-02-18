var Parse = require("~/parse").Parse;
Parse.initialize("laM2O42kKHRui4IdqXubuTPVIAyGXja96ifAqjBe", "X3UZ7w7dlTOCsF3gxw1hmDKHOhnwSkcgih3BtkZr");
console.log(Parse.applicationId);
// var Parse = require("./node_modules/node-parse-api").Parse;

// var APP_ID = "laM2O42kKHRui4IdqXubuTPVIAyGXja96ifAqjBe";
// var MASTER_KEY ="X3UZ7w7dlTOCsF3gxw1hmDKHOhnwSkcgih3BtkZr";

// var app = new Parse(APP_ID, MASTER_KEY);
localStorage = require("localStorage");
//console.log(localStorage);

// XMLHttpRequest = require("xmlhttprequest");
// console.log(XMLHttpRequest);
var parseQuery = (function(){
	
	var parseQuery = {
		get:function(){	
			var places = Parse.Object.extend("place");
			var query = new Parse.Query(places);
			console.log(query);
	            query.find({
				  success: function(result) {
				  	console.log("here");
				  	console.log(result[0]);
				    for (var i = 0; i < result.length; ++i) {
				      console.log(result[i].placeName);
				    }
				  },
				  error: function(myObject, error) {
				    // Error occured
				    console.log("hereerror");
				    console.log( error );
				  }
								});
	            console.log("out");
		}
	};

	return parseQuery;
})();
	
exports.get = parseQuery.get;