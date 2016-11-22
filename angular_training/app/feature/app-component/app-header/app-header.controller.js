(function () {
    "use strict";

    angular.module("feature")
        .controller('AppHeaderController', AppHeaderController);

    function AppHeaderController(model, todoService) {
        let $ctrl = this;
        $ctrl.model = model;
        Object.assign($ctrl, todoService);
        $ctrl.setTableItems(model.items);
    }
})();