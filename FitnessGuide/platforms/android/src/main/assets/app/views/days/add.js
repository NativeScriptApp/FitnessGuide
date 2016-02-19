var observableArrayModule = require("data/observable-array");
var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");
var directory = "/../../images/";


var data = require("~/common/data");
var className;
var mainMuscle;
var subMuscle;
var image;
var explanation;
function onNavigatedTo(args){

	var page = args.object;

	var listView = page.getViewById("listViewId");

  data.get("Exercise");
  listView.items = global.exercises;

  page.bindingContext = page.navigationContext;
  className = page.navigationContext.className + "Exercise";

}

function onPageClosed() {
	global.exercises = new observableArrayModule.ObservableArray();
}


function onItemTapped(args){
  var index = args.index;

  mainMuscle = global.exercises.getItem(index).mainMuscle;
  subMuscle = global.exercises.getItem(index).subMuscle;
  image = global.pictures.getItem(index);
  explanation = global.exercises.getItem(index).explanation;


};
function imageFromSource(imageName) {
 return imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + imageName + ".jpg"));
};

function addButton (){
	console.log(className);
	console.log(mainMuscle);
	console.log(subMuscle);
	console.log(image);
	console.log(explanation);
  if (mainMuscle != undefined) {

   data.post(className,mainMuscle,subMuscle,image,explanation);


   var obj = {mainMuscle: mainMuscle,
    subMuscle: subMuscle ,
    pics : imageFromSource(image),
    explanation: explanation};
    if (className == "MondayExercise") {
    	global.mondayExercises.push(obj);
      obj = {};
    }
    else if (className == "TuesdayExercise") {
    	global.tuesdayExercises.push(obj);
       obj = {};
    }
    else if (className == "WednesdayExercise") {
    	global.wednesdayExercises.push(obj);
       obj = {};
    }
    else if (className == "ThursdayExercise") {
    	global.thursdayExercises.push(obj);
       obj = {};
    }
    else if (className == "FridayExercise") {
    	global.fridayExercises.push(obj);
       obj = {};
    }
    else if (className == "SaturdayExercise") {
    	global.saturdayExercises.push(obj);
       obj = {};
    }
    else if (className == "SundayExercise") {
    	global.sundayExercises.push(obj);
       obj = {};
    }
  } else {
    alert('Not added! You did not select an exercise! ');
  }
  mainMuscle = undefined;
  subMuscle = undefined;
  image = undefined;
  explanation = undefined;
  
  topmost.goBack();
}

exports.onNavigatedTo = onNavigatedTo;
exports.onPageClosed = onPageClosed;
exports.addButton = addButton;
exports.onItemTapped = onItemTapped;