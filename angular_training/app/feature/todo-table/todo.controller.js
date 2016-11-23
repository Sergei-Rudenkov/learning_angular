/**
 * Created by sergei_rudenkov on 11/6/16.
 */
(function () {
    "use strict";

    angular.module("todo-feature")
        .controller('Todo', Todo);

    function Todo(model, todoService, lsService, $q) {
        let $ctrl = this;
        Object.assign($ctrl, todoService);
        Object.assign($ctrl, lsService);
        todoService.readJsonData();

        let userPromise = todoService.getUsers(),
            jsonTasks = todoService.readJsonData();

        $q.all([userPromise, jsonTasks])
            .then(getAllDataSuccess)
            .catch(getTasksError)
            .finally(getTasksComplete);

        function getAllDataSuccess(dataArray) {
            console.log(dataArray[0]);
            model.items = dataArray[1].data;
            $ctrl.setTableItems(model.items);
        }

        function getTasksError(reason) {
            console.log(reason);
        }

        function getTasksComplete() {
            console.log("Get Tasks is Completed");
        }
    }
})();