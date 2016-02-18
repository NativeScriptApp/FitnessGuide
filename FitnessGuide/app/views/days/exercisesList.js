var observableModule = require("data/observable");
var source = new observableModule.Observable();

var list;
var day;

function onNavigatedTo(args){

	var page = args.object;
	page.bindingContext = page.navigationContext;
	list = page.navigationContext.items;
	day = page.navigationContext.listTitle;
}


exports.onItemTapped = function(args){
//console.log(args.index);

     var navigationEntry = {
     	moduleName: "./views/days/details",
     	context: {TEXT: list[args.index].firstName +" "+ list[args.index].lastName,
                  TEXT2: list[args.index].lastName,
                  Title:"Details",
                  imgSource:list[args.index].pics},
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