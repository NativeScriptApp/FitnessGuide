//import page = require("ui/page");
//import observableModule = require("data/observable");

var view = require("ui/core/view");
var observableModule = require("data/observable");
var listPickerModule = require("ui/list-picker");


function onNavigatedTo(args){

	var page = args.object;	
	page.bindingContext = {
        items: ["Breakfats","Lunch","Dinner","Avoid Food"],
        selectedIndex: 2
    };
}



exports.onNavigatedTo = onNavigatedTo;
