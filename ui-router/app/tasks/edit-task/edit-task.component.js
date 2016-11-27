(function() {

    angular
        .module("tasks")
        .component("editTask", {
            templateUrl: "tasks/edit-task/edit-task.html",
            controller: "EditTask",
            bindings: {
                users: "<"
            }
        });
})();
