(function() {
	"use strict";

	angular
		.module("userTasks")
		.controller("UserTaskList", UserTaskList);

	function UserTaskList($stateParams, tasksSrv) {
		let $ctrl = this;

		$ctrl.tasks = tasksSrv.getUserTasks($stateParams["userId"]);
	}

})();