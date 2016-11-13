/**
 * Created by sergei_rudenkov on 11/6/16.
 */
(function () {
    "use strict";

    angular.module("todo-feature")
        .controller('Todo', Todo);

    function Todo(model, todoService, lsService, $filter) {
        let $ctrl = this;
        $ctrl.todo = model;
        $ctrl.newItem = {};
        console.log($ctrl.todo);
        Object.assign($ctrl, todoService);
        Object.assign($ctrl, lsService);
        // Object.assign($ctrl, starServiceProvider);
        // console.log(starServiceProvider.evaluate(980));
        $ctrl.showComplete = false;
            $ctrl.startFrom = 0;
        $ctrl.limit = 2;
        $ctrl.sortItemsReverse = false;
        $ctrl.decrementPage = function () {
            $ctrl.startFrom = $ctrl.startFrom - $ctrl.limit;
            console.log($ctrl.startFrom);
        };
        $ctrl.incrementPage = function () {
            $ctrl.startFrom = $ctrl.startFrom + $ctrl.limit;
            console.log($ctrl.startFrom);
        };
        $ctrl.todo.paginatedItems = $filter('paginationFilter')([$ctrl.todo, $ctrl.limit, $ctrl.startFrom]);
        $ctrl.todo.paginatedItems.forEach(function (item) {
            console.log(item)
        })

    }
})();