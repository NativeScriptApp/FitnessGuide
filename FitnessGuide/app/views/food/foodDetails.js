'use strict';
var observableModule = require("data/observable");
var source = new observableModule.Observable();
var vm = require("~/views/food/foodDetails-view-model");

function onNavigatedTo(args){

	var page = args.object;	
	var food = args.context;
	page.bindingContext = vm.create(food);
}

// function zoomInDescription(args) {
//   args.object.fontSize += 1;
// }

// function zoomOutDescription(args) {
//   args.object.fontSize -= 1;
// }

exports.onNavigatedTo = onNavigatedTo;
// exports.zoomInDescription = zoomInDescription;
// exports.zoomOutDescription = zoomOutDescription;
