(function () {
    "use strict";

    angular.module("feature")
        .controller('AppComponentController', AppComponentController);

    function AppComponentController(model, todoService) {
        let $ctrl = this;
        Object.assign($ctrl, todoService);
        $ctrl.setTableItems(model.items);
    }
})();