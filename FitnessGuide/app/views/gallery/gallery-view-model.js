'use strict';
var observable = require("data/observable");
var imageSourceModule = require("image-source");
var fileSystemModule = require("file-system");
var observableArrayModule = require("data/observable-array");
var enums = require("ui/enums");
var data = require("~/common/data");
var cameraModule = require("camera");
var localDb = require("~/services/gallerySqliteService");

var localImagesArray = new observableArrayModule.ObservableArray();
var directory = "/../../res/";


function imageFromSource(imageName) {
    return imageSourceModule.fromFile(fileSystemModule.path.join(__dirname, directory + imageName));// tuka +".jpg"
};

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
    data.postGallery(picture);
    //global.photos.push(item);
    data.getGallery();
    localDb.Gallery.addPicture(picture.toBase64String('.jpg', 100), new Date());
    //localDb.Gallery.getAll();
});

};
photoAlbumModel.set("message", "Add new photos");

exports.photoAlbumModel = photoAlbumModel;

