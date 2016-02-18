
 var exercises = [
 {firstName:"John", lastName:"Doe", pics:"~/images/Abs/downPartAbs.png"},
{firstName:"Pesho", lastName:"Poe", pics:"~/images/Abs/downPartAbs.png"},
{firstName:"Misho", lastName:"Moe", pics:"~/images/Abs/downPartAbs.png"},
{firstName:"Bibo", lastName:"Boe", pics:"~/images/Abs/downPartAbs.png"},
{firstName:"Bibo", lastName:"Boe", pics:"~/images/Abs/downPartAbs.png"},
{firstName:"Bibo", lastName:"Boe", pics:"~/images/Abs/downPartAbs.png"},
{firstName:"Bibo", lastName:"Boe", pics:"~/images/Abs/downPartAbs.png"},
{firstName:"Bibo", lastName:"Boe", pics:"~/images/Abs/downPartAbs.png"}
];

function onNavigatedTo(args){

	var page = args.object;

	var listView = page.getViewById("listViewId");
 	listView.items = exercises;

	page.bindingContext = page.navigationContext;

}

exports.onNavigatedTo = onNavigatedTo;
