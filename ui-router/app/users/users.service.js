(function() {

	angular
		.module("users")
		.factory("usersSrv", usersSrv);

	usersSrv.$inject = ["$http", "$q"];

	function usersSrv($http, $q) {
		let users = getData().then(function (data) {
				users = data;
			});
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
					$q.reject(`Error: can not retrieve data ${response.status}`)
				});
		}
		function addUser(user) {
			let id = Math.max.apply(Math, users.map(function(o){return o.id})) + 1;
			users.push({
				id: id,
				name: user.name,
				location: user.location
			})
		}
	}
	
})();