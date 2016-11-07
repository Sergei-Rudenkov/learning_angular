/**
 * Created by sergei_rudenkov on 11/6/16.
 */
(function () {
    "use strict";
    angular.module("todo-feature", [])
        .run(runApp)
        .value("model", {
            "user": "Sergei",
            "userPhoto": "./images/SR.png"
        });

    function runApp($http, model) {
        $http
            .get("./feature/todo-feature/todo.json")
            .then((response) => model.items = response.data);
    }
})();