(function() {

    angular
        .module("tasks")
        .component("deleteTask", {
            templateUrl: "tasks/delete-task/delete-task.html",
            controller: "DeleteTask",
            bindings: {
                users: "<"
            }
        });
})();