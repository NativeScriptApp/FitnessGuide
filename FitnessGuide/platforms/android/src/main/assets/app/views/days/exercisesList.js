var observableModule = require("data/observable");
var source = new observableModule.Observable();


function onNavigatedTo(args){

	var page = args.object;
	page.bindingContext = page.navigationContext;
}

exports.onNavigatedTo = onNavigatedTo;