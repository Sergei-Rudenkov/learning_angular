(function () {
    "use strict";

    angular.module("feature")
        .component('customHeader', {
            templateUrl: "feature/app-component/app-header/app-header.html",
            controller: "AppHeaderController"
        });

})();