'use strict';
var observableArrayModule = require("data/observable-array");
var observableModule = require("data/observable");
var pageNavigator = require("~/common/page-navigator");
var cameraModule = require("camera");
var imageModule = require("ui/image");
var view = require("ui/core/view");
var imageSource = require("image-source");
var fileSystemModule = require("file-system");
var directory = "/../../images/";
var frameModule = require("ui/frame");
var data = require("~/services/foodServices");
var tf_firstFood, tf_secondFood, tf_thirdFood, tf_proteins, tf_carbs, tf_fats, tf_calories, imageView, tf_explanation,listPicker,
firstFood, secondFood, thirdFood, proteins, carbs, fats, calories, image, explanation,category;
var items = ["Breakfats","Lunch","Dinner","Avoid Food"];

var addModule = (function() {

  var addModule = {
    pageLoaded:function(args) {
        var page = args.object;
        page.bindingContext = {
        items: items,
        selectedIndex: 1
    	};

        tf_firstFood = view.getViewById(page, "first");
        tf_secondFood = view.getViewById(page, "second");
        tf_thirdFood = view.getViewById(page, "third");
        tf_proteins = view.getViewById(page, "proteins");
        tf_carbs = view.getViewById(page, "carbs");
        tf_fats = view.getViewById(page, "fat");
        tf_calories = view.getViewById(page, "calories");
        listPicker = view.getViewById(page, "categories");
        imageView = view.getViewById(page, "img");
        tf_explanation = view.getViewById(page, "explanation");
    },

    onAddBtnTapped:function(args){
      firstFood = tf_firstFood.text;
      secondFood = tf_secondFood.text; 
      thirdFood = tf_thirdFood.text;
      proteins = parseInt(tf_proteins.text);
      carbs = parseInt(tf_carbs.text);
      fats = parseInt(tf_fats.text);
      calories = parseInt(tf_calories.text);
      //image = imageView.imageSource;
      explanation = tf_explanation.text;
      category = items[listPicker.selectedIndex];
      if (category=="Avoid Food") {
				category="AvoidFood";
			};
      console.log(image);
      
      //image = imageSource.fromFile("~/images/1.jpg").toBase64String('.jpg', 100);
      
      var newFood = {
	      "firstFood": firstFood,
	      "secondFood": secondFood,
	      "thirdFood": thirdFood, 
	      "proteins":proteins, 
	      "carbohydrates":carbs, 
	      "fats":fats, 
	      "calories":calories, 
	      "picture":image, 
	      "explanation":explanation,
	      "category":category
      };
console.log(firstFood + secondFood+thirdFood+proteins+carbs+fats+calories+category+explanation+image);
    	data.post(newFood);
      	pageNavigator.navigateTo("./views/food/food");
    },	

	onTakePictureBtnTap:function(){
		cameraModule.takePicture({
		    width: 50,
		    height: 50,
		    keepAspectRatio: true
		})
		.then(function(picture) {
	    	imageView.imageSource = picture;
	    	image = imageView.imageSource.toBase64String('.jpg', 3);
		});
	},

    onCancelBtnTapped:function(args){
    	pageNavigator.navigateTo("./views/food/food");
    }

  };

  return addModule;
})();

exports.pageLoaded = addModule.pageLoaded;
exports.onAddBtnTapped = addModule.onAddBtnTapped;
exports.onCancelBtnTapped = addModule.onCancelBtnTapped;
exports.onTakePictureBtnTap = addModule.onTakePictureBtnTap;