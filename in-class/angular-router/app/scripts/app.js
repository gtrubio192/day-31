/* jshint devel:true */
// ui.router is another dependency
angular.module('app', ['app.controllers', 'ui.router'])
// provider is 3 types of services
// can only use providers inside of .config
.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
	$stateProvider
    // chaining .state(name, { config object about this route });
    // another anular method, just like .controller or .factory
	.state('home', {
        // name in url, what will appear in browser appended to url
		url: "/home",
        // passing in template file path, could write it in on ln 10 if you wanted
		templateUrl: "templates/home.html",
        // specify what controller to use
		controller: "HomeCtrl"
	})
	.state('resume', {
		url: "/resume",
		templateUrl: "templates/resume.html",
		controller: "ResumeCtrl"
	})
	.state('bio', {
		url: "/bio",
		templateUrl: "templates/bio.html",
		controller: "BioCtrl"
	});
// specifies what the defualt page is
	$urlRouterProvider.otherwise("/home");
});