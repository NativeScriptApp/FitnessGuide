var application = require("application");
var platform = require("platform");
var observableArrayModule = require("data/observable-array");
global.exercises = new observableArrayModule.ObservableArray();
global.mondayExercises = new observableArrayModule.ObservableArray();
global.tuesdayExercises = new observableArrayModule.ObservableArray();
global.wednesdayExercises = new observableArrayModule.ObservableArray();
global.thursdayExercises = new observableArrayModule.ObservableArray();
global.fridayExercises = new observableArrayModule.ObservableArray();
global.saturdayExercises = new observableArrayModule.ObservableArray();
global.sundayExercises = new observableArrayModule.ObservableArray();
global.dbData = new observableArrayModule.ObservableArray();
global.pictures = new observableArrayModule.ObservableArray();
global.photos = new observableArrayModule.ObservableArray();

application.mainModule = "views/main/main-page";
application.cssFile = "./styles/app.css";

application.on(application.launchEvent, function(args) {
    if (platform.device.os === platform.platformNames.ios) {
        // Google API key for iOS
        GMSServices.provideAPIKey("AIzaSyDzHeE14CPMuQrN1z9EuebwLhsmOTn2T_E");
    }
});
application.start();