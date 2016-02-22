'use strict';
var observableArrayModule = require("data/observable-array");
var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");
var directory = "/../../images/";
var frameModule = require("ui/frame");
var data = require("~/common/data");
var className;
var mainMuscle;
var subMuscle;
var image;
var explanation;
var topmost;

function onNavigatedTo(args){

	var page = args.object; 
	var listView = page.getViewById("listViewId");
  topmost = frameModule.topmost();
  
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
  if (mainMuscle != undefined) {

    data.post(className,mainMuscle,subMuscle,image,explanation);
    var objectId = global.objectId;

    console.log(objectId);
   
    var obj = {mainMuscle: mainMuscle,
    subMuscle: subMuscle ,
    objectId: objectId,
    pics : imageFromSource(image),
    explanation: explanation};

    global.all.push(obj);
    obj = {};
  } 
  else {
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