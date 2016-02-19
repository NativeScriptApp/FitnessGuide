var view = require("ui/core/view");
var pageNavigator = require("~/common/page-navigator");
var data = require("~/common/data");

var pageModules = (function() {
	var segmentedBar;
	var pageModules = {
		 pageLoaded:function(args) {
		    var page = args.object;

		    segmentedBar = view.getViewById(page, "segments");
            segmentedBar.selectedIndex = 2;
            pageNavigator.attachNavigation(segmentedBar);
			data.get();	
			data.post();			
		}
	};

	return pageModules;
})();

exports.pageLoaded = pageModules.pageLoaded;
