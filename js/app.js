angular.module("PeacefulValleyFarmApp", ["ngRoute"])
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
	if ((vm.currentTime < openingTimes[vm.dayNumber]) || (vm.currentTime > closingTimes[vm.dayNumber])) {
			vm.status = "closed";
		} else {
			vm.status = "open";
		}

	// check date info
		console.log("current hours: " + vm.currentHours);
		console.log("current minutes: " + vm.currentMinutes);
		console.log("current time: " + vm.currentTime);	

	})

	.controller("MarketController", function() {


	});


