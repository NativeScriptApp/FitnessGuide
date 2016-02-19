//var vmModule = require("./main-view-model");
var pagesModule = require("ui/page");
var view = require("ui/core/view");
var pageNavigator = require("~/common/page-navigator");
var frameModule = require("ui/frame");
var data = require("~/common/data");

var list;
//  = [ // tuka trqbva da idva  currrent day list (mondayList....)
// {firstName:"John", lastName:"Doe", pics:"~/images/Abs/rotateAbs.jpg"},
// {firstName:"Pesho", lastName:"Poe", pics:"~/images/Abs/rotateAbs.jpg"},
// {firstName:"Misho", lastName:"Moe", pics:"~/images/Abs/rotateAbs.jpg"},
// {firstName:"Bibo", lastName:"Boe", pics:"~/images/Abs/rotateAbs.jpg"},
// {firstName:"Bibo", lastName:"Boe", pics:"~/images/Abs/rotateAbs.jpg"},
// {firstName:"Bibo", lastName:"Boe", pics:"~/images/Abs/downPartAbs.jpg"},
// {firstName:"Bibo", lastName:"Boe", pics:"~/images/Abs/downPartAbs.jpg"},
// {firstName:"Bibo", lastName:"Boe", pics:"~/images/Abs/rotateAbs.jpg"}
// ];

var pageModules = (function() {
	var segmentedBar;
	var pageModules = {
		pageLoaded:function(args) {
			var page = args.object;
			topmost = frameModule.topmost();
		    //page.bindingContext = vmModule.mainViewModel;ss

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

    console.log(currrentDay);


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
