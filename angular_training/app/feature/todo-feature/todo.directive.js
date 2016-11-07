/**
 * Created by sergei_rudenkov on 11/6/16.
 */
(function () {
    "use strict";

    angular.module("todo-feature")
        .directive("taskList", taskList);

    function taskList() {
        return {
            restrict: "EA",
            templateUrl: "feature/todo-feature/todo_table.html"
        };
    }
})();