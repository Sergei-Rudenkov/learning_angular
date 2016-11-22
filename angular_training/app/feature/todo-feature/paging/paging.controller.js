(function() {
    "use strict";

    angular
        .module("paging-module")
        .controller("PagingController", PagingController);

    function PagingController(todoService) {
        Object.assign($ctrl, todoService);
        $ctrl.decrementPage = function () {
            if ($ctrl.getStartPagingFrom() - $ctrl.getPagingLimit >= 0) {
                $ctrl.setStartPagingFrom($ctrl.startFrom - $ctrl.limit);
            }
        };
        $ctrl.incrementPage = function () {
            if ($ctrl.parent.todo.items[$ctrl.startFrom + $ctrl.limit]) {
                $ctrl.startFrom = $ctrl.startFrom + $ctrl.limit;
            }
        };
    }

})();