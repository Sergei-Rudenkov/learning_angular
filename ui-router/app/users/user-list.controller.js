(function() {

	angular
		.module("users")
		.controller("UserList", UserList);

	UserList.$inject = ["usersSrv", "stateRouter", "users"];

	function UserList(usersSrv, stateRouter, users) {
		let $ctrl = this;
		
		init();

		function init() {
			$ctrl.navigate = stateRouter.navigate;

			// usersSrv.getData().then( (data) => $ctrl.users = data );

			// 2-nd case
			$ctrl.users = users;
		
		}
	}

})();