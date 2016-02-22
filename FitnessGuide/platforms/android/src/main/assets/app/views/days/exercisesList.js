var observableModule = require("data/observable");
var source = new observableModule.Observable();
var data = require("~/common/data");
var observableArrayModule = require("data/observable-array");
var listt; 
var day;
var swipe
function onNavigatedTo(args){

	  var page = args.object;
	  page.bindingContext = page.navigationContext;
    listt =  page.navigationContext.items;
	  day = page.navigationContext.listTitle;

    swipe = page.getViewById("swipe");
    
}

exports.onItemTapped = function(args){

swipe.on('swipe', function () {
  //delete
      listt.splice(args.index,1);
    
});

     var navigationEntry = {
     	moduleName: "./views/days/details",
     	context: {mainMuscle: listt.getItem(args.index).mainMuscle +" "+ listt.getItem(args.index).subMuscle,
                  subMuscle: listt.getItem(args.index).subMuscle,
                  explanation: listt.getItem(args.index).explanation,
                  Title:"Details",
                  pics:listt.getItem(args.index).pics},
     	animated: true
     };

     topmost.navigate(navigationEntry);
};
exports.goToAddPage = function(args){
     
     var navigationEntry = {
     	moduleName: "./views/days/add",
     	context: {className: day},//tova day e za add-page zashto shte ni trqbva za klas name za DB
     	animated: true
     };

     topmost.navigate(navigationEntry);
};

exports.onNavigatedTo = onNavigatedTo;