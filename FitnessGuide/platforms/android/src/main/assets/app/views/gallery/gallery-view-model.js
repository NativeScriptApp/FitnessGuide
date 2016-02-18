var observable = require("data/observable");
var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");
var observableArrayModule = require("data/observable-array");
var enums = require("ui/enums");

var cameraModule = require("camera");

var localImagesArray = new observableArrayModule.ObservableArray();
var directory = "/../../res/";


function imageFromSource(imageName) {
    return imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + imageName));// tuka +".jpg"
};

var item1 = {itemImage: imageFromSource("1.jpg")}; 
var item2 = {itemImage: imageFromSource("2.png")}; 
var item3 = {itemImage: imageFromSource("1.jpg")}; 
var item4 = {itemImage: imageFromSource("2.png")}; 
var item5 = {itemImage: imageFromSource("1.jpg")}; 
var item6 = {itemImage: imageFromSource("2.png")}; 

localImagesArray.push([item1, item2, item3, item4, item5, item6]);

var item7 = {itemImage: imageFromSource("01.jpg")}; 
var item8 = {itemImage: imageFromSource("01jpg")};

var photoAlbumModel = new observable.Observable();

Object.defineProperty(photoAlbumModel, "photoItems", {
    get: function () {
        return localImagesArray;
    },
    enumerable: true,
    configurable: true
});

photoAlbumModel.tapAction = function () {
    cameraModule.takePicture({
    width: 200,
    height: 200,
    keepAspectRatio: true
}).then(function (picture) {
    var item = {
        itemImage: picture
    };
    localImagesArray.push(item);
});

};
photoAlbumModel.set("message", "Add new photos");

exports.photoAlbumModel = photoAlbumModel;

