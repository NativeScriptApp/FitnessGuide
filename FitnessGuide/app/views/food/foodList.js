var observableModule = require("data/observable");
var source = new observableModule.Observable();
var observableArrayModule = require("data/observable-array");

function onNavigatedTo(args){

  var page = args.object;
  page.bindingContext = page.navigationContext;
}


exports.onItemTapped = function(args){
//console.log(args.index);

     var navigationEntry = {
     	moduleName: "./views/days/details",
     	context: {TEXT: list[args.index].firstName +" "+ list[args.index].lastName,
                  TEXT2: list[args.index].lastName,
                  Title:"Details"},
     	animated: true
     };

     topmost.navigate(navigationEntry);
};
exports.onNavigatedTo = onNavigatedTo;