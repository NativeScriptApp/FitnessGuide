var vmModule = require("~/views/location/location-view-model");
//var pagesModule = require("ui/page");
var geolocation = require("nativescript-geolocation");
var http = require("http");
var view = require("ui/core/view");
var webViewModule = require("ui/web-view");
var pageNavigator = require("~/common/page-navigator");
var webView;
var lat, long, src;

var pageModules = (function() {
    var segmentedBar;
    var pageModules = {
         pageLoaded:function(args) {
            var page = args.object;
            page.bindingContext = {
                lat : lat,
                long : long,
                src: src
            };
            webView = view.getViewById(page,"webView");

            segmentedBar = view.getViewById(page, "segments");
            segmentedBar.selectedIndex = 4;
            pageNavigator.attachNavigation(segmentedBar);
        },
         
         enableLocationTap:function(args) {
            var isEnabled = geolocation.isEnabled();
            if (!isEnabled) {
                geolocation.enableLocationRequest();
            }
         },

         getLocationTap:function(args) {
            var location = geolocation.getCurrentLocation({
                desiredAccuracy: 3, 
                updateDistance: 10, 
                maximumAge: 20000, 
                timeout: 5000
            }).
            then(function(loc) {
                if (loc) {                    
                    lat = loc.latitude;
                    long = loc.longitude;
                    src = "https://maps.google.com/?q=@" + lat + "," + long;
                }                    
            });
        }
    }

    return pageModules;
})();

exports.pageLoaded = pageModules.pageLoaded;
exports.enableLocationTap = pageModules.enableLocationTap;
exports.getLocationTap = pageModules.getLocationTap;
exports.showOnMap = vmModule.showOnMap;
