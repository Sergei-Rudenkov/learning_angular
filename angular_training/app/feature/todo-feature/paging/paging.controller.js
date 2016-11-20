(function() {
    "use strict";

    angular
        .module("paging-module")
        .controller("PagingController", PagingController);

    function PagingController() {
        let $ctrl = this;
        $ctrl.showComplete = false;
        $ctrl.startFrom = 0;
        $ctrl.limit = 2;
        $ctrl.sortItemsReverse = false;
        $ctrl.decrementPage = function () {
            if ($ctrl.startFrom - $ctrl.limit >= 0) {
                $ctrl.startFrom = $ctrl.startFrom - $ctrl.limit;
            }
        };
        $ctrl.incrementPage = function () {
            console.log($ctrl.data[0]);
            if ($ctrl.parent.todo.items[$ctrl.startFrom + $ctrl.limit]) {
                $ctrl.startFrom = $ctrl.startFrom + $ctrl.limit;
            }
        };
    }

})();