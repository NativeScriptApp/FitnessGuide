//var vmModule = require("./main-view-model");
//var actionBarModule = require("ui/action-bar");
//var frameModule = require("ui/frame");
//var pagesModule = require("ui/page");
var view = require("ui/core/view");
var pageNavigator = require("~/common/page-navigator");

var pageModules = (function() {
	var segmentedBar;
	var pageModules = {
		 pageLoaded:function(args) {
		    var page = args.object;
		    //page.bindingContext = vmModule.mainViewModel;

		    segmentedBar = view.getViewById(page, "segments");
            segmentedBar.selectedIndex = 0;
            pageNavigator.attachNavigation(segmentedBar);
		}
	}

	return pageModules;
})();

exports.pageLoaded = pageModules.pageLoaded;