//var backgroundTasks = require("background-tasks");
var view = require("ui/core/view");
var pageNavigator = require("~/common/page-navigator");

var pageModules = (function() {
	var segmentedBar;
	var pageModules = {
		 pageLoaded:function(args) {
		    var page = args.object;
		    //page.bindingContext = vmModule.mainViewModel;

		    segmentedBar = view.getViewById(page, "segments");
            segmentedBar.selectedIndex = 0;
            pageNavigator.attachNavigation(segmentedBar);


       

        var app = require('application');
        var packageName = app.android.context.getPackageName();
        var launchIntent = app.android.context.getPackageManager().getLaunchIntentForPackage(packageName);
        var className = launchIntent.getComponent().getClassName();
        var tns = className + '.class';

        var intent = new android.content.Intent(app.android.context, eval(tns));

        // var pIntent = android.app.PendingIntent.getActivity(app.android.context, 0, intent, 0);
        var pIntent;
        var resImg = app.android.context.getResources().getIdentifier('icon' , 'drawable', app.android.context.getPackageName());

        var mBuilder = new android.support.v4.app.NotificationCompat.Builder(app.android.context);
        mBuilder.setSmallIcon(resImg);
        mBuilder.setContentTitle('Fitness Guide');
        mBuilder.setContentText('It is time to change your program !');
        mBuilder.addAction(resImg, 'Do it !', pIntent);

        var mNotificationId = 001;
        var sytemservice = app.android.context.getSystemService(android.content.Context.NOTIFICATION_SERVICE);
        
        

        sytemservice.notify(mNotificationId, mBuilder.build());
        
//         backgroundTasks.doInBackground(function() {
//           timer.setInterval(function () {

// //------------------------------------------------------------------------------

//               //tuka e mqstoto kadeto trqbva da se buildva notifikaciqta s background task
//               // prez opredeleno vreme , no ne namira modula background-task...
            
// //-------------------------------------------------------------------------------
//             console.log("OK");   
//             }, 5000);

//            }).then(function(data){
//               // data = result that you return from callback above
//            }).catch(function(exception) {
//              // exception = native exception or exception that you throw in callback
//        });


        }
    }

	return pageModules;
})();

exports.pageLoaded = pageModules.pageLoaded;