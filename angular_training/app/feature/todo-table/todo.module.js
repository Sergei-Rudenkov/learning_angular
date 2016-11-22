/**
 * Created by sergei_rudenkov on 11/6/16.
 */
(function () {
    "use strict";
    angular.module("todo-feature", ["paging-module"])
        .run(runApp)
        .value("model", {
            "user": "Sergei",
            "userPhoto": "./images/SR.png"
        });

    function runApp($http, model) {
        $http
            .get("./feature/todo-table/todo.json")
            .then((response) => model.items = response.data);
    }
})();