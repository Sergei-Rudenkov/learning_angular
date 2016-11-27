(function() {
	"use strict";

	angular.module("app", [
		"ui.router",
		"tasks",
		"users",
		"userTasks"
	]);

	angular.element(document).ready(() => {
		angular.bootstrap(document, ["app"]);
	});

})();