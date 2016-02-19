var application = require("application");
var observableArrayModule = require("data/observable-array");
global.exercises = new observableArrayModule.ObservableArray();
application.mainModule = "views/main/main-page";
application.cssFile = "./styles/app.css";
application.start();