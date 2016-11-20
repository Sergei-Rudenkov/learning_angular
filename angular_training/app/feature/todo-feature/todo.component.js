/**
 * Created by sergei_rudenkov on 11/6/16.
 */
(function () {
    "use strict";

    angular.module("todo-feature")
        .component("taskList", {
            templateUrl: "feature/todo-feature/todo_table.html",
            controller: "Todo",
            require: {
                "parent": "paging"
            }
        });
})();