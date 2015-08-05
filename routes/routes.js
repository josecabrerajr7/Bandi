
(function(){
	// Created the module and named it bandiApp
		// Also included ngRoute for all the routing needs
	var bandiApp = angular.module('bandiApp', ['ngRoute', 'ngAnimate']);

	// bandiApp routes
	bandiApp.config(function($routeProvider, $locationProvider) {
		$routeProvider

		// route for the features page
		.when('/', {
			templateUrl : 'views/home.html',
			controller : 'mainController'
		})

		// route for the features page
		.when('/features', {
			templateUrl : 'views/features.html',
			controller : 'featuresController'
		})

		// route for the works page
		.when('/works', {
			templateUrl : 'views/works.html',
			controller : 'worksController'
		})

		// route for the team page
		.when('/team', {
			templateUrl : 'views/team.html',
			controller : 'teamController'
		})

		// route for the contact page
		.when('/contact', {
			templateUrl : 'views/contact.html',
			controller : 'contactController'
		});
		
	});

	






})();