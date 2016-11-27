(function() {

	angular
		.module("app")
		.config(configAppRouter)
		.run(runApp);

	function configAppRouter($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise("/");

		$stateProvider
			.state("home", {
				url: "/",
				template: "<task-list tasks='$resolve.tasks'></task-list>",
				resolve: {
					tasks: function(tasksSrv) {
						return tasksSrv.getAllTasks()
					}
				},
				nav: 1
			})
			.state("users", {
				url: "/users",
				templateUrl: "users/user-list.html",
				controller: "UserList",
				controllerAs: "$ctrl",
				resolve: {
					users: function(usersSrv) {
						return usersSrv.getData();
					}
				},
				nav: 2
			})
			.state("addTask", {
				url: "/addTask",
				template: "<add-task users='$resolve.users'></add-task>",
				resolve: {
					users: function(usersSrv) {
						return usersSrv.getData()//.then( (data) => data );
					}
				},
			})
			.state("editTask", {
				url: "/editTask/:taskId",
				template: "<edit-task users='$resolve.users'></edit-task>",
				component: "editTask",
				resolve: {
					users: function(usersSrv) {
						return usersSrv.getData()//.then( (data) => data );
					}
				}
			})
			.state("editUser", {
				url: "/editUser",
				templateUrl: "users/edit-user.html",
				controller: "EditUser",
				controllerAs: "$ctrl"
			})
			.state("userTasks", {
				url: "/userTasks/:userId",
				templateUrl: "user-tasks/user-task-list.html",
				controller: "UserTaskList",
				controllerAs: "$ctrl"
			})
			.state("addUser", {
				url: "/addUser",
				templateUrl: "users/add-user.html",
				controller: "AddUser",
				controllerAs: "$ctrl",
				abstract: true
			})
				.state("addUser.General", {
					url: "/General",
					templateUrl: "users/add-user-general.html",
					controller: "AddUserDetails",
					controllerAs: "$ctrl",
				})
				.state("addUser.Cost", {
					url: "/Cost",
					templateUrl: "users/add-user-cost.html",
					controller: "AddUserDetails",
					controllerAs: "$ctrl",
				})
				.state("addUser.Notes", {
					url: "/Notes",
					templateUrl: "users/add-user-notes.html",
					controller: "AddUserDetails",
					controllerAs: "$ctrl",
				})
	}

	
	function runApp() {
		
	}
})();