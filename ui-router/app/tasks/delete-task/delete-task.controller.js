(function() {

    angular
        .module("tasks")
        .controller("DeleteTask", DeleteTask);

    DeleteTask.$inject = ["tasksSrv", "$stateParams", "stateRouter"];

    function DeleteTask(taskSrv, $stateParams, stateRouter) {
        let $ctrl = this;

        init();

        function init() {
            $ctrl.deleteTask = deleteTask;
            $ctrl.navigate = stateRouter.navigate;
            $ctrl.task = taskSrv.getTask($stateParams["taskId"]);

            // usersSrv.getData()
            // .then((users) => { $ctrl.users = users });
        }

        function deleteTask(taskToDelete) {
            taskSrv.deleteTask(taskToDelete);
            $ctrl.navigate('home');
        }
    }

})();