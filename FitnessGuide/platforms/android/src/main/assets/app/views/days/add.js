var data = require("~/common/data");

function onNavigatedTo(args){

	var page = args.object;

	var listView = page.getViewById("listViewId");

    data.get("Exercise");
	listView.items = global.exercises;

	page.bindingContext = page.navigationContext;

}

exports.onNavigatedTo = onNavigatedTo;
