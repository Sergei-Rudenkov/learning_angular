(function() {
	"use strict";

	angular
		.module("users")
		.controller("AddUserParent", AddUserParent);

	AddUserParent.$inject = ["usersSrv", "stateRouter"];
	function AddUserParent(usersSrv, stateRouter) {
		let $ctrl = this;
		$ctrl.navigate = stateRouter.navigate;
		$ctrl.user = {};

		$ctrl.addUser = function() {
			usersSrv.addUser($ctrl.user);
			console.log($ctrl.user);
			$ctrl.navigate('home');
		}
	}

})();