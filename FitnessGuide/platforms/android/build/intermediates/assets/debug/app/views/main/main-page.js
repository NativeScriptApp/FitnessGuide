var vmModule = require("./main-view-model");
var actionBarModule = require("ui/action-bar");
var frameModule = require("ui/frame");
var pagesModule = require("ui/page");
var view = require("ui/core/view");

var pageNavigator = require("~/common/page-navigator");
var topmost;

var pageModules = (function() {
	var segmentedBar;
	var pageModules = {
		 pageLoaded:function(args) {
		    var page = args.object;
		    page.bindingContext = vmModule.mainViewModel;

		    segmentedBar = view.getViewById(page, "segments");
            segmentedBar.selectedIndex = 0;
            pageNavigator.attachNavigation(segmentedBar);
		    topmost = frameModule.topmost();
		},
		
		onBtnFoodTap: function(args) {
			console.log('food page');
		    topmost.navigate("./views/food/food");
		}
	}

	return pageModules;
})();

exports.pageLoaded = pageModules.pageLoaded;
exports.onBtnFoodTap = pageModules.onBtnFoodTap;