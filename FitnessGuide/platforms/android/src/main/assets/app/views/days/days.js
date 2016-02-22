'use strict';
var pagesModule = require("ui/page");
var view = require("ui/core/view");
var pageNavigator = require("~/common/page-navigator");
var frameModule = require("ui/frame");
var data = require("~/common/data");
var topmost;

var pageModules = (function() {
	var segmentedBar;
	var pageModules = {
		pageLoaded:function(args) {
			var page = args.object;
			topmost = frameModule.topmost();
		    segmentedBar = view.getViewById(page, "segments");
		    segmentedBar.selectedIndex = 1;
		    pageNavigator.attachNavigation(segmentedBar);
		}
	}

	return pageModules;
})();

exports.onBtnTapped = function(args){
	var day = args.object.text;
	var currrentDay = (args.object.text) + "Exercise";
	var list;

	data.get(currrentDay);

	if(day == "Monday"){

    	list = global.mondayExercises;
	}
	else if(day == "Tuesday"){
    	list = global.tuesdayExercises;
	}
	else if(day == "Wednesday"){
    	list = global.wednesdayExercises;
	}
	else if(day == "Thursday"){
    	list = global.thursdayExercises;
	}
	else if(day == "Friday"){
    	list = global.fridayExercises;
	}
	else if(day == "Saturday"){
    	list = global.saturdayExercises;
	}
	else if(day == "Sunday"){
    	list = global.sundayExercises;
	}

	var navigationEntry = {
		moduleName: "./views/days/exercisesList",
		context: {exText: "hfhghjgjhfjhfhgfhjgfjhfhjs",
		listTitle: args.object.text,
		items: list},
		animated: true
	};

	topmost.navigate(navigationEntry);
};

exports.pageLoaded = pageModules.pageLoaded;
