var geolocation = require("nativescript-geolocation");
var fs = require("file-system");
var frame = require("ui/frame");
var observable = require("data/observable").Observable;
var observable_array_1 = require("data/observable-array");
var viewModel = new observable({
	
});

function enableLocationTap(args) {
var isEnabled = geolocation.isEnabled();
console.log(isEnabled);
    if (!isEnabled) {
        geolocation.enableLocationRequest();
        console.log("here");
    }
    console.log(isEnabled);

}

function getLocationTap(args) {
	var location = geolocation.getCurrentLocation({desiredAccuracy: 3, updateDistance: 10, maximumAge: 20000, timeout: 5000}).
	then(function(loc) {
		if (loc) {
			//model.locations.push(loc);
			
				console.log(i+ ": " + loc[0]);			
		}
	}, function(e){
		console.log("Error: " + e.message);
	});
}

exports.locationViewModel = viewModel;
exports.enableLocationTap = enableLocationTap;
exports.getLocationTap = getLocationTap;