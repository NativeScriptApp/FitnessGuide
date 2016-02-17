//var vmModule = require("./main-view-model");
var pagesModule = require("ui/page");
var view = require("ui/core/view");
var pageNavigator = require("~/common/page-navigator");
var frameModule = require("ui/frame");

var list = [
{firstName:"John", lastName:"Doe", pics:"~/images/Abs/downPartAbs.png"},
{firstName:"Pesho", lastName:"Poe", pics:"~/images/Abs/downPartAbs.png"},
{firstName:"Misho", lastName:"Moe", pics:"~/images/Abs/downPartAbs.png"},
{firstName:"Bibo", lastName:"Boe", pics:"~/images/Abs/downPartAbs.png"},
{firstName:"Bibo", lastName:"Boe", pics:"~/images/Abs/downPartAbs.png"},
{firstName:"Bibo", lastName:"Boe", pics:"~/images/Abs/downPartAbs.png"},
{firstName:"Bibo", lastName:"Boe", pics:"~/images/Abs/downPartAbs.png"},
{firstName:"Bibo", lastName:"Boe", pics:"~/images/Abs/downPartAbs.png"}
];

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
	console.log(args.object.text)

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
