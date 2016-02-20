var observableModule = require("data/observable");
var source = new observableModule.Observable();

function onNavigatedTo(args){

	var page = args.object;
	page.bindingContext = page.navigationContext;

	var label = page.getViewById("explanation");
	label.fontSize = 14;

	label.on('doubleTap', function (args) {

		label.fontSize = 14;
	});

	label.on('pinch', function (args) {

		if (label.fontSize <30 ) {
			label.fontSize += args.scale;
		}
		
	});

}

exports.onNavigatedTo = onNavigatedTo;
