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
        console.log($ctrl.todo);
        Object.assign($ctrl, todoService);
        $ctrl.showComplete = false;

        $ctrl.delete = function (item) {
            var index = $ctrl.todo.items.indexOf(item);
            $ctrl.todo.items.splice(index, 1)
        }
    }
})();