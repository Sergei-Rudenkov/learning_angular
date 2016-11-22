(function () {
    "use strict";

    angular.module("paging-module")
        .component('paging', {
            templateUrl: "feature/todo-table/paging/paging.html",
            controller: "PagingController",
            binding: {
                "perpage": "="
            },
            require: {
                parent: "^taskList"
            }
        });

})();