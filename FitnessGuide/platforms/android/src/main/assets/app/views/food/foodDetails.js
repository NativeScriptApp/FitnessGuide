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

	explanation = page.getViewById("explanation");
	image = page.getViewById("img");
	attachEvents();
}

function attachEvents(){
	explanation.on('doubleTap', function (args) {		
		args.object.fontSize += 1;		
	});

	explanation.on('longPress', function (args) {		
		args.object.fontSize -= 1;		
	});

	image.on('pinch', function (args) {
		image.width *= args.scale;			
	});
}

exports.onNavigatedTo = onNavigatedTo;
exports.attachEvents = attachEvents;
