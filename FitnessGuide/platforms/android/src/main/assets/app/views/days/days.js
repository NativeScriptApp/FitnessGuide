//var vmModule = require("./main-view-model");
var pagesModule = require("ui/page");
var view = require("ui/core/view");
var pageNavigator = require("~/common/page-navigator");
var frameModule = require("ui/frame");

var list = [
 {firstName:"John", lastName:"Doe"},
 {firstName:"Pesho", lastName:"Poe"},
 {firstName:"Misho", lastName:"Moe"},
 {firstName:"Bibo", lastName:"Boe"},
 {firstName:"Bibo", lastName:"Boe"},
 {firstName:"Bibo", lastName:"Boe"},
 {firstName:"Bibo", lastName:"Boe"},
 {firstName:"Bibo", lastName:"Boe"}
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
     	context: {exText: "hfhghjgjhfjhfhjgfhjgfjhfhjs",
     		   listTitle: args.object.text,
     			items: list},
     	animated: true
     };

     topmost.navigate(navigationEntry);
};

exports.pageLoaded = pageModules.pageLoaded;
