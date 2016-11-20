/**
 * Created by sergei_rudenkov on 11/6/16.
 */
(function () {
    "use strict";

    angular.module("todo-feature")
        .controller('Todo', Todo);

    function Todo(model, todoService, lsService) {
        let $ctrl = this;
        $ctrl.todo = model;
        $ctrl.newItem = {};
        Object.assign($ctrl, todoService);
        Object.assign($ctrl, lsService);
        // Object.assign($ctrl, starServiceProvider);
        // console.log(starServiceProvider.evaluate(980));
        // $ctrl.showComplete = false;
        // $ctrl.startFrom = 0;
        // $ctrl.limit = 2;
        // $ctrl.sortItemsReverse = false;
        // $ctrl.decrementPage = function () {
        //     if ($ctrl.startFrom - $ctrl.limit >= 0) {
        //         $ctrl.startFrom = $ctrl.startFrom - $ctrl.limit;
        //     }
        // };
        // $ctrl.incrementPage = function () {
        //     if ($ctrl.todo.items[$ctrl.startFrom + $ctrl.limit]) {
        //         $ctrl.startFrom = $ctrl.startFrom + $ctrl.limit;
        //     }
        // };

    }
})();