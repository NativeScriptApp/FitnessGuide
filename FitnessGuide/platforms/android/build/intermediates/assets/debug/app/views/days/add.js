var observableArrayModule = require("data/observable-array");

var data = require("~/common/data");

function onNavigatedTo(args){

	var page = args.object;

	var listView = page.getViewById("listViewId");

    data.get("Exercise");
	listView.items = global.exercises;

	page.bindingContext = page.navigationContext;

}

function onPageClosed() {
	global.exercises = new observableArrayModule.ObservableArray();
}

exports.onNavigatedTo = onNavigatedTo;
exports.onPageClosed = onPageClosed;