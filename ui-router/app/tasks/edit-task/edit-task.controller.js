(function () {

    angular
        .module("tasks")
        .controller("EditTask", EditTask);

    EditTask.$inject = ["tasksSrv", "$stateParams", "stateRouter"];

    function EditTask(taskSrv, $stateParams, stateRouter) {
        let $ctrl = this;

        $ctrl.navigate = stateRouter.navigate;
        $ctrl.task = taskSrv.getTask($stateParams["taskId"]);
        $ctrl.user = $ctrl.users.filter(function (obj) {
            return obj.name === $ctrl.task.userName;
        })[0];

        $ctrl.updateTask = function (task) {
            taskSrv.update(task);
            $ctrl.navigate('home');
        }
    }

})();