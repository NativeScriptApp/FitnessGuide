'use strict';
var observable = require("data/observable");
var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");
var observableArrayModule = require("data/observable-array");
var enums = require("ui/enums");
var data = require("~/common/data");


var cameraModule = require("camera");

var localImagesArray = new observableArrayModule.ObservableArray();
var directory = "/../../res/";


function imageFromSource(imageName) {
    return imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + imageName));// tuka +".jpg"
};

var item1 = {itemImage: imageFromSource("1.jpg")}; 
var item2 = {itemImage: imageFromSource("2.png")}; 


global.photos.push([item1, item2]);


var photoAlbumModel = new observable.Observable();

Object.defineProperty(photoAlbumModel, "photoItems", {
    get: function () {
        return global.photos;
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
    data.postGallery("Gallery",picture);
    global.photos.push(item);
});

};
photoAlbumModel.set("message", "Add new photos");

exports.photoAlbumModel = photoAlbumModel;

