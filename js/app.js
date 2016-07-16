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
	// click to go to market
		vm.goToMarket = function() {
			alert("going to market!");
		};

		// vm.status = function() {
		// 	if() {

		// 	}
		// };
	});