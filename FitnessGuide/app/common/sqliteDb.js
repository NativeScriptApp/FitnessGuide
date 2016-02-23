var Sqlite = require("nativescript-sqlite");

exports.initSQLite = function() {

    var newDb = new Sqlite("FitnessGuide.sqlite", function(err, db) {
        if (err) {
            console.error("open database failed", err);
        } else {
            global.db = db;
        }

        global.db.execSQL("CREATE TABLE 'Gallery' ('PictureUrl' TEXT NOT NULL, 'Date' DATE NOT NULL )");

        console.log("table created!");
    });
};