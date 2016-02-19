var view = require("ui/core/view");
var pageNavigator = require("~/common/page-navigator");
var data = require("~/common/data");
var items;

var pageModules = (function() {
	var segmentedBar;
	var pageModules = {
		 pageLoaded:function(args) {
		    var page = args.object;
			global.dbData.length = 0;
		    segmentedBar = view.getViewById(page, "segments");
            segmentedBar.selectedIndex = 2;
            pageNavigator.attachNavigation(segmentedBar);
		},

		onBtnTapped:function(args){
			
			var toView = "./views/food/foodList";
			var className = args.object.text;
			if (className=="Avoid This") {
				className="AvoidFood";
			};

			data.getAll(className);
			items = global.dbData;
			var context = {
				listTitle: className,
				items: items
			};
			
			pageNavigator.navigateTo(toView,context);
		}
	};

	return pageModules;
})();

exports.pageLoaded = pageModules.pageLoaded;
exports.onBtnTapped = pageModules.onBtnTapped;
