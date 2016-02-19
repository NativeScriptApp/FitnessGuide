var frameModule = require("ui/frame");
var segmentedBar;

var pageNavigator = (function() {

    var pageNavigator = {

        navigateTo: function(toPage,context) {
            console.log(toPage);
            var navigateToPage = {
                moduleName: toPage,
                context: context,                
                animated: true
            };

            var topmost = frameModule.topmost();
            topmost.navigate(navigateToPage);
        },

        attachNavigation:function(segmentedBar){
            segmentedBar.on('propertyChange', function(){
            if (segmentedBar.selectedIndex === 0){
                pageNavigator.navigateTo("./views/main/main-page");
            }else if (segmentedBar.selectedIndex === 1){
                pageNavigator.navigateTo("./views/days/days");
            }else if (segmentedBar.selectedIndex === 2){
                pageNavigator.navigateTo("./views/food/food");
            }else if (segmentedBar.selectedIndex === 3){
                pageNavigator.navigateTo("./views/gallery/gallery");
            }else if (segmentedBar.selectedIndex === 4){
                pageNavigator.navigateTo("./views/location/location");
            }
            });
        }        
    }
    
    return pageNavigator;
})();

exports.navigateTo = pageNavigator.navigateTo;
exports.attachNavigation = pageNavigator.attachNavigation;