(function() {

	angular
		.module("tasks")
		.controller("TaskList", TaskList);

	TaskList.$inject = ["$state", "tasksSrv", "stateRouter"];
	
	function TaskList($state, tasksSrv, stateRouter) {
		let $ctrl = this;

		init();

		function init() {
			$ctrl.navigate = stateRouter.navigate;
			$ctrl.refreshTaskList = refreshTaskList;

			// $ctrl.tasks = tasksSrv.getAllTasks()
			// console.log($state);
			// $ctrl.tasks = $state.current.resolve.tasks;
		}

		function refreshTaskList() {
			$state.reload();
			console.log("state is reloaded");
		}
	}

})();