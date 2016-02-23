var geolocation = require("nativescript-geolocation");
var fs = require("file-system");
var frame = require("ui/frame");
var observable = require("data/observable");
var observable_array = require("data/observable-array");
var pageNavigator = require("~/common/page-navigator");

var LocationViewModel = (function (_super) {
    __extends(LocationViewModel, _super);
    function LocationViewModel() {
        _super.apply(this, arguments);
    }
    Object.defineProperty(LocationViewModel.prototype, "locations", {
        get: function () {
            if (!this._locations) {
                this._locations = new observable_array.ObservableArray();
            }
            return this._locations;
        },
        enumerable: true,
        configurable: true
    });

    return LocationViewModel;

})(observable.Observable);

exports.LocationViewModel = LocationViewModel;

var model = new LocationViewModel();



function showOnMap(args) {
    var toView = "views/location/mapPage"
    var context = new observable.Observable({location: model.locations.getItem(model.locations.length - 1)});
    
    pageNavigator.navigateTo(toView,context);
}


exports.showOnMap = showOnMap;
