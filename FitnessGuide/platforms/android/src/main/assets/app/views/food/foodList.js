var observableModule = require("data/observable");
var source = new observableModule.Observable();
var observableArrayModule = require("data/observable-array");
var pageNavigator = require("~/common/page-navigator");
var items;

function onNavigatedTo(args){

  var page = args.object;
  page.bindingContext = page.navigationContext;
  items = page.navigationContext.items;
}

function goToAddFood(){
	pageNavigator.navigateTo("./views/food/addFood");
}

exports.onItemTapped = function(args){
    var index = args.index;
    var toView = "./views/food/foodDetails";
    pageNavigator.navigateTo(toView,items.getItem(index));
};

exports.onNavigatedTo = onNavigatedTo;
exports.goToAddFood = goToAddFood;