'use strict';
var observableModule = require("data/observable");
//var source = new observableModule.Observable();
var vm = require("~/views/food/foodDetails-view-model");
var explanation;
var image;

function onNavigatedTo(args){

	var page = args.object;	
	var food = args.context;
	page.bindingContext = vm.create(food);

	explanation = page.getViewById("explanationText");
	explanation.fontSize = 14;
	image = page.getViewById("img");
	image.width = 100;
	image.heigth = 100;
	attachEvents();
}

function attachEvents(){
	explanation.on('doubleTap', function (args) {		
		explanation.fontSize += 4;		
	});

	explanation.on('longPress', function (args) {		
		if (explanation.fontSize > 14) {
		explanation.fontSize -= 4;	
		}	
	});

	image.on('pinch', function (args) {
		image.width *= args.scale;
		image.heigth *= args.scale;			
	});
}

exports.onNavigatedTo = onNavigatedTo;
exports.attachEvents = attachEvents;
