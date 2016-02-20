
var vmModule = require("~/views/location/location-view-model");
var pagesModule = require("ui/page");
var view = require("ui/core/view");
var pageNavigator = require("~/common/page-navigator");

var pageModules = (function() {
	var segmentedBar;
	var pageModules = {
		 pageLoaded:function(args) {
		    var page = args.object;
		    page.bindingContext = vmModule.locationViewModel;

		    segmentedBar = view.getViewById(page, "segments");
            segmentedBar.selectedIndex = 4;
            pageNavigator.attachNavigation(segmentedBar);
		}
	}

	return pageModules;
})();

exports.pageLoaded = pageModules.pageLoaded;
exports.enableLocationTap = vmModule.enableLocationTap;
exports.getLocationTap = vmModule.getLocationTap;
