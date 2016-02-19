var observableModule = require("data/observable");
var source = new observableModule.Observable();


var observableArrayModule = require("data/observable-array");


var listt; 


var day;

function onNavigatedTo(args){

	var page = args.object;
	page.bindingContext = page.navigationContext;
     listt =  page.navigationContext.items; 
	day = page.navigationContext.listTitle;
}


exports.onItemTapped = function(args){


     var navigationEntry = {
     	moduleName: "./views/days/details",
     	context: {mainMuscle: listt[args.index].mainMuscle +" "+ listt[args.index].subMuscle,
                  subMuscle: listt[args.index].subMuscle,
                  Title:"Details",
                  pics:listt[args.index].pics},
     	animated: true
     };

     topmost.navigate(navigationEntry);
};
exports.goToAddPage = function(args){
     
     var navigationEntry = {
     	moduleName: "./views/days/add",
     	context: {addText: day},//tova day e za add-page zashto shte ni trqbva za klas name za DB
     	animated: true
     };

     topmost.navigate(navigationEntry);
};
exports.onNavigatedTo = onNavigatedTo;