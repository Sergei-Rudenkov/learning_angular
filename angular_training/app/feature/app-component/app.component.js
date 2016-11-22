(function () {
    "use strict";

    angular.module("feature")
        .component('app', {
            templateUrl: "feature/app-component/app.html",
            controller: "AppComponentController",
            transclude: true
        });

})();
