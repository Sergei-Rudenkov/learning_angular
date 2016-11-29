(function() {

	angular
		.module("users")
		.factory("usersSrv", usersSrv);

	usersSrv.$inject = ["$http", "$q"];

	function usersSrv($http, $q) {
		let users = getData();
		return {
			getData,
			getUsers,
			addUser
		};

		function getUsers() {
			return users;
		}
		function getData() {
			return $http
				.get("./data/users.json")
				.then(function(response) {
					return response.data;
				})
				.catch(function(response) {
					$q.reject(`Error: can not retrive data ${response.status}`)
				});
		}
		function addUser(user) {
			let id = users.$$state.value[users.$$state.value.length - 1].id++;
			users.$$state.value.push({
				id: 100,
				name: user.name,
				location: "dsdsd"
			})
		}
	}
	
})();