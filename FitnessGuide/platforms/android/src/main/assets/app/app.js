var application = require("application");
var observableArrayModule = require("data/observable-array");
global.exercises = new observableArrayModule.ObservableArray();
global.mondayExercises = new observableArrayModule.ObservableArray();
global.tuesdayExercises = new observableArrayModule.ObservableArray();
global.wednesdayExercises = new observableArrayModule.ObservableArray();
global.thursdayExercises = new observableArrayModule.ObservableArray();
global.fridayExercises = new observableArrayModule.ObservableArray();
global.saturdayExercises = new observableArrayModule.ObservableArray();
global.sundayExercises = new observableArrayModule.ObservableArray();
application.mainModule = "views/main/main-page";
application.cssFile = "./styles/app.css";
application.start();