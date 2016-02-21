'use strict';
var Observable = require("data/observable").Observable;

class FoodDetailsViewModel extends Observable {
  constructor(food) {
    super();
    this.title = food.firstFood;
    this.products = food.firstFood + ", "+ food.secondFood + ", "+ food.thirdFood;
    this.explanation = food.explanation;
    this.picture = food.picture;
  }

}

module.exports = {
  create: function(object) {
    return new FoodDetailsViewModel(object);
  }
};