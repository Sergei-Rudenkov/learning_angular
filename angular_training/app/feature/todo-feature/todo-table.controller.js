/**
 * Created by sergei_rudenkov on 11/6/16.
 */
(function () {
    "use strict";

    angular.module("todo-feature")
        .controller('TodoTable', TodoTable);

    function TodoTable(model, todoService) {
        let $ctrl = this;
        $ctrl.todo = model;
        $ctrl.newItem = {};
        console.log($ctrl.todo);
        Object.assign($ctrl, todoService);
        $ctrl.showComplete = false;
        $ctrl.sortItemsReverse = false;
    }
})();