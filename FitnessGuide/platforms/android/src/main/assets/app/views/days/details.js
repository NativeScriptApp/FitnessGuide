var observableModule = require("data/observable");
var source = new observableModule.Observable();

function onNavigatedTo(args){

	var page = args.object;
	page.bindingContext = page.navigationContext;

	var label = page.getViewById("explanation");
	label.fontSize = 14;
    label.animate({opacity:0,
                   duration: 0});
	label.animate({
            translate: {
                x: 0,
                y: -40
            },
            opacity: 1,
            duration: 2000,
            translate: {
                x: 0,
                y: 40
            },
        });



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
