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
				views: {
					"tasks": {
						template: "<task-list tasks='$resolve.tasks'></task-list>",
						resolve: {
							tasks: function(tasksSrv) {
								return tasksSrv.getAllTasks()
							}
						},
					},
					"users": {
						templateUrl: "users/user-list.html",
						controller: "UserList",
						controllerAs: "$ctrl",
						resolve: {
							users: function(usersSrv) {
								return usersSrv.getData();
							}
						}
					}
				}
			})
	}

	
	function runApp() {
		
	}
})();