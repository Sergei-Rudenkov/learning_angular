(function () {
    "use strict";

    angular.module("paging-module")
        .component('paging', {
            templateUrl: "feature/todo-feature/paging/paging.html",
            controller: "PagingController",
            require: {
                "parent": "taskList"
            }
        });

})();