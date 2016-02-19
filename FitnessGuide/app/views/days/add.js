var observableArrayModule = require("data/observable-array");

var data = require("~/common/data");
var className;
function onNavigatedTo(args){

	var page = args.object;

	var listView = page.getViewById("listViewId");

    data.get("Exercise");
	listView.items = global.exercises;

	page.bindingContext = page.navigationContext;
	className = page.navigationContext.className;

}

function onPageClosed() {
	global.exercises = new observableArrayModule.ObservableArray();
}

function addButton (){
	console.log(className);
}

exports.onNavigatedTo = onNavigatedTo;
exports.onPageClosed = onPageClosed;
exports.addButton = addButton;