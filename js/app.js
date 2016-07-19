angular.module("PeacefulValleyFarmApp", ["ngRoute", "ngAnimate"])
	.config(["$routeProvider", function($routeProvider) {
		$routeProvider.when("/", {
			templateUrl: "templates/home.html",
			controller: "HomeController",
			controllerAs: "vm"
		})
		.when("/home", {
			redirectTo: "/"
		})
		.when("/market", {
			templateUrl: "templates/market.html",
			controller: "MarketController",
			controllerAs: "vm"
		})
		.when("/bb", {
			templateUrl: "templates/bb.html",
			controller: "BBController",
			controllerAs: "vm"
		})
		.when("/directions", {
			templateUrl: "templates/directions.html",
			controller: "DirectionsController",
			controllerAs: "vm"
		})
		.when("/checkout", {
			templateUrl: "templates/checkout.html",
			controller: "CheckoutController",
			controllerAs: "vm"
		})
		.when("/animals", {
			templateUrl: "templates/animals.html",
			controller: "AnimalsController",
			controllerAs: "vm"
		})
		.when("/events", {
			templateUrl: "templates/events.html",
			controller: "EventsController",
			controllerAs: "vm"
		})
		.when("/FAQ", {
			templateUrl: "templates/faq.html",
			controller: "FAQController",
			controllerAs: "vm"
		})
		.when("/error", {
			templateUrl: "templates/error.html",
			controller: "ErrorController",
			controllerAs:"vm"
		})
		.otherwise({
			redirectTo: "/error"
		});
	}])

	.controller("HomeController", function() {
		var vm = this;

	// return the name of the weekday
		vm.d = new Date();
		vm.dayNumber = vm.d.getDay();

		var weekday = new Array(7);
		weekday[0] = "Sunday";
		weekday[1] = "Monday";
		weekday[2] = "Tuesday";
		weekday[3] = "Wednesday";
		weekday[4] = "Thursday";
		weekday[5] = "Friday";
		weekday[6] = "Saturday";
		vm.currentDay = weekday[vm.dayNumber];

	// return current time
		vm.currentHours = vm.d.getHours();
		vm.currentMinutes = vm.d.getMinutes();

	// add zero in front of minutes less than 10 to account for zero placeholder
		if (vm.currentMinutes < 10) {
			vm.currentMinutes = vm.currentMinutes.toString();
			vm.currentMinutes = 0 + vm.currentMinutes;
		}

	// change hours and minutes to string
		vm.currentTime = vm.currentHours.toString() + vm.currentMinutes.toString();
		vm.currentTime = Number(vm.currentTime);

	// set opening times
		var openingTimes = new Array(7);
		openingTimes[0] = 1200;
		openingTimes[1] = 1000;
		openingTimes[2] = 1000;
		openingTimes[3] = 1000;
		openingTimes[4] = 1000;
		openingTimes[5] = 1200;
		openingTimes[6] = 1000;

	// set closing times
		var closingTimes = new Array(7);
		closingTimes[0] = 1800;
		closingTimes[1] = 1700;
		closingTimes[2] = 1700;
		closingTimes[3] = 1700;
		closingTimes[4] = 1700;
		closingTimes[5] = 1700;
		closingTimes[6] = 1700;

	// set status to open or closed depending on current time and schedule
	if ((vm.currentTime < openingTimes[vm.dayNumber]) || (vm.currentTime >= closingTimes[vm.dayNumber])) {
			vm.status = "closed";
		} else {
			vm.status = "open";
		}

	// check date info
		console.log("current hours: " + vm.currentHours);
		console.log("current minutes: " + vm.currentMinutes);
		console.log("current time: " + vm.currentTime);
	})

	.controller("MarketController", ["$scope", function($scope) {
		var vm = this;

	// declare new Date object
		vm.d = new Date();

	// get day of the week number
		vm.dayOfWeekNumber = vm.d.getDay();

	// set weekday names array
		var weekday = new Array(7);
		weekday[0] = "Sunday";
		weekday[1] = "Monday";
		weekday[2] = "Tuesday";
		weekday[3] = "Wednesday";
		weekday[4] = "Thursday";
		weekday[5] = "Friday";
		weekday[6] = "Saturday";

	// get day of the week name
		vm.dayOfTheWeek = weekday[vm.dayOfWeekNumber];

	// get month number
		vm.monthNumber = vm.d.getMonth();

	// set month names array
		var month = new Array(12);
		month[0] = "January";
		month[1] = "February";
		month[2] = "March";
		month[3] = "April";
		month[4] = "May";
		month[5] = "June";
		month[6] = "July";
		month[7] = "August";
		month[8] = "September";
		month[9] = "October";
		month[10] = "November";
		month[11] = "December";
		
// get month name
		vm.month = month[vm.monthNumber];

// get day number
		vm.date = vm.d.getDate();

// get year number
		vm.year = vm.d.getFullYear();

// set $watchGroup for changes to multiple variables on market order form	
		$scope.$watchGroup(["vm.qty1", "vm.qty2", "vm.qty3"], function(newQty, oldQty) {
			vm.itemTotal1 = newQty[0] * vm.price1;
			vm.itemTotal2 = newQty[1] * vm.price2;
			vm.itemTotal3 = newQty[2] * vm.price3;
			vm.subtotal = vm.itemTotal1 + vm.itemTotal2 + vm.itemTotal3;
			const TAX_RATE = 6 / 100;
			vm.tax = vm.subtotal * TAX_RATE;	
			vm.grandTotal = vm.subtotal + vm.tax;
		});	
		
			vm.item1 = "Eggs (one dozen)";
			vm.price1 = 3.50;
			vm.qty1 = "";

			vm.item2 = "Apples (per lb.)";
			vm.price2 = 2.49;
			vm.qty2 = "";

			vm.item3 = "Peaches (per lb.)";
			vm.price3 = 2.79;
			vm.qty3 = "";

	// create checkout function


// set item names, price, and quantity - only updates subtotal calculations whenever qty1 is updated, not for other fields
		// $scope.$watch(function() {
		// 	return vm.qty1;
		// 	return vm.qty2;
		// 	return vm.qty3;
		// }, function(newSubtotal) {
		// 	console.log(newSubtotal);
		// 	vm.subtotal1 = vm.qty1 * vm.price1;
		// 	vm.subtotal2 = vm.qty2 * vm.price2;
		// 	vm.subtotal3 = vm.qty3 * vm.price3;
		//  vm.subtotal = vm.subtotal1 + vm.subtotal2 + vm.subtotal3;
		// });
			
		// $scope.qty1 = "qty1";
		// $scope.qty2 = "qty2";
		// $scope.qty3 = "qty3";
		// $scope.price1 = "price1";
		// $scope.price2 = "price2";
		// $scope.price3 = "price3";


	}])

	.controller("CheckoutController", function() {
		vm.getGrandTotal = function() {

		};
	});

