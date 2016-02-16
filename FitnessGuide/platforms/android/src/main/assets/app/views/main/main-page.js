var vmModule = require("./main-view-model");
//var actionBarModule = require("ui/action-bar");
var frameModule = require("ui/frame");
var pagesModule = require("ui/page");
var topmost;

var pageModules = (function() {
	
	var pageModules = {
		 pageLoaded:function(args) {
		    var page = args.object;
		    page.bindingContext = vmModule.mainViewModel;
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
