var application = require("application");
var platform = require("platform");
var observableArrayModule = require("data/observable-array");
var dbModule = require("./common/sqliteDb");
global.exercises = new observableArrayModule.ObservableArray();
global.dbData = new observableArrayModule.ObservableArray();
global.pictures = new observableArrayModule.ObservableArray();
global.photos = new observableArrayModule.ObservableArray();
global.objectId;
global.all = new observableArrayModule.ObservableArray();

application.mainModule = "views/main/main-page";
application.cssFile = "./styles/app.css";
dbModule.initSQLite();
application.on(application.launchEvent, function(args) {
    if (platform.device.os === platform.platformNames.ios) {
        // Google API key for iOS
        GMSServices.provideAPIKey("AIzaSyDzHeE14CPMuQrN1z9EuebwLhsmOTn2T_E");
    }
});
application.start();