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
        console.log($ctrl.todo);
        Object.assign($ctrl, todoService);
        Object.assign($ctrl, lsService);
        // Object.assign($ctrl, starServiceProvider);
        // console.log(starServiceProvider.evaluate(980));
        $ctrl.showComplete = false;
        $ctrl.sortItemsReverse = false;
    }
})();