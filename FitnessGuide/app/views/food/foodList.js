var observableModule = require("data/observable");
var source = new observableModule.Observable();
var observableArrayModule = require("data/observable-array");
var pageNavigator = require("~/common/page-navigator");
var data = require("~/services/foodServices");
var items;
var listView;

function onNavigatedTo(args){

  var page = args.object;
  page.bindingContext = page.navigationContext;
  items = page.navigationContext.items;
  listView = page.getViewById("foodList");
}

function goToAddFood(){
	pageNavigator.navigateTo("./views/food/addFood");
}

exports.onItemTapped = function(args){
		listView.on('swipe', function (direction) {

		      if (direction.direction == 2) {
		        var objectId = items.getItem(args.index).objectId;

		        data.delete(objectId);
		        items.splice(args.index,1);
		      }
		});
			

    var index = args.index;
    var toView = "./views/food/foodDetails";
    pageNavigator.navigateTo(toView,items.getItem(index));
};

exports.onNavigatedTo = onNavigatedTo;
exports.goToAddFood = goToAddFood;