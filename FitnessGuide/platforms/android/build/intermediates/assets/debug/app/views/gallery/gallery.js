var modelModule = require("./gallery-view-model");
var model = modelModule.photoAlbumModel;



var pagesModule = require("ui/page");
var view = require("ui/core/view");
var pageNavigator = require("~/common/page-navigator");

var pageModules = (function() {
	var segmentedBar;
	var pageModules = {
		 pageLoaded:function(args) {
		    var page = args.object;
		    
		    page.bindingContext = model;


		    segmentedBar = view.getViewById(page, "segments");
            segmentedBar.selectedIndex = 3;
            pageNavigator.attachNavigation(segmentedBar);


		}
	}

	return pageModules;
})();
exports.pageLoaded = pageModules.pageLoaded;
