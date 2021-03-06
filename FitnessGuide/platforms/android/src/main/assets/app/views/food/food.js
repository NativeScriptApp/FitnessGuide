var view = require("ui/core/view");
var pageNavigator = require("~/common/page-navigator");
var data = require("~/services/foodServices");
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

			data.get(className);
			items = global.dbData;
			var context = {
				listTitle: className,
				items: items
			};
			
			pageNavigator.navigateTo(toView,context);
		},

		goToAddFood:function (){
			pageNavigator.navigateTo("./views/food/addFood");
		}
	};

	return pageModules;
})();

exports.pageLoaded = pageModules.pageLoaded;
exports.onBtnTapped = pageModules.onBtnTapped;
exports.goToAddFood = pageModules.goToAddFood;
