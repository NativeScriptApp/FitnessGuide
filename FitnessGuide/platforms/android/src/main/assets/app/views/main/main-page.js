//var vmModule = require("./main-view-model");
//var actionBarModule = require("ui/action-bar");
//var frameModule = require("ui/frame");
//var pagesModule = require("ui/page");
 var pushPlugin = require("nativescript-push-notifications");
 var self = this;



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


           //notifications
            pushPlugin.register({ senderID: 'yyiYli6L5Kpr4DxaNdzBxX8sw4PzS28PMIOuaywU' }, function (data){
            	self.set("message", "" + JSON.stringify(data));
            }, function() { });

            pushPlugin.onMessageReceived(function callback(data) {	
            	self.set("message", "" + JSON.stringify(data));
            });

        }
    }

	return pageModules;
})();

exports.pageLoaded = pageModules.pageLoaded;