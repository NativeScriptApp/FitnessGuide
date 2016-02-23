var dbModule = require("nativescript-sqlite");
var imageSourceModule = require("image-source");

var Gallery = (function (_super) {
    __extends(Gallery, _super);
    function Gallery() {
        _super.call(this);
    }

    Gallery.prototype.addPicture = function (pictureUrl, date) {
        return global.db.execSQL("insert into Gallery values (?, ?)", [pictureUrl, date])
            .then(function(id){
                console.log("added:", id);
            }, function(err){
                console.log(err);
            });
    };

    Gallery.prototype.getAll = function () {
        return global.db.all("select * from Gallery")
            .then(function(result) {
                global.photos.length = 0;
console.log("sqlite"+result.length);
                  for (var i = 0; i < result.length; i++) {
console.log(imageSourceModule.fromBase64(result[i][0]));
console.log(result[i][1]);
                     var pic = {
                           itemImage: imageSourceModule.fromBase64(result[i][0]),
                           date: moment(result[i][1]).format("DD MMMM YYYY")
                        };

                     global.photos.push(pic); 
                  }
            }, function(err){
                console.log(err);
            });
    };

    return Gallery;

})(Object);

exports.Gallery = new Gallery();