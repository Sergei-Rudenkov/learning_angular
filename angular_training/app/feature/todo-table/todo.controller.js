/**
 * Created by sergei_rudenkov on 11/6/16.
 */
(function () {
    "use strict";

    angular.module("todo-feature")
        .controller('Todo', Todo);

    function Todo(model, todoService, lsService) {
        let $ctrl = this;
        Object.assign($ctrl, todoService);
        Object.assign($ctrl, lsService);
        $ctrl.setTableItems(model.items);
    }
})();