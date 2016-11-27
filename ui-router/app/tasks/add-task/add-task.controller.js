(function() {

	angular
		.module("tasks")
		.controller("AddTask", AddTask);

	AddTask.$inject = ["tasksSrv", "usersSrv", "stateRouter"];
	
	function AddTask(taskSrv, usersSrv, stateRouter) {
		let $ctrl = this;
		
		init();

		function init() {
			$ctrl.addNewTask = addNewTask;
			$ctrl.navigate = stateRouter.navigate;
			// usersSrv.getData()
				// .then((users) => { $ctrl.users = users });
		}

		function addNewTask(taskToAdd) {
			taskSrv.add(taskToAdd);
			taskToAdd.action = "";
			taskToAdd.user = "";
		}
	}

})();