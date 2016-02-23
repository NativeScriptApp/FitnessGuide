'use strict';
var modelModule = require("./gallery-view-model");
var model = modelModule.photoAlbumModel;
var data = require("~/common/data");
var items;
var imageView;
var pagesModule = require("ui/page");
var view = require("ui/core/view");
var pageNavigator = require("~/common/page-navigator");

var pageModules = (function() {
	var segmentedBar;
	var pageModules = {
		 pageLoaded:function(args) {
		    var page = args.object;
		    data.getGallery();
		    console.log(global.photos.length);

		    page.bindingContext = model;
			imageView = page.getViewById("swipe");

		    segmentedBar = view.getViewById(page, "segments");
            segmentedBar.selectedIndex = 3;
            pageNavigator.attachNavigation(segmentedBar);

		},
		onItemTapped: function(args){
	  		imageView.on('swipe', function (direction) {

		      if (direction.direction == 2) {
		        var objectId = items.getItem(args.index).objectId;

		        data.deleteGallery(objectId);
		        items.splice(args.index,1);
		      }
		    	});
			}
	}

	return pageModules;
})();
exports.pageLoaded = pageModules.pageLoaded;
exports.onItemTapped = pageModules.onItemTapped;