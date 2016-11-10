/**
 * Created by sergei_rudenkov on 11/11/16.
 */
(function () {
    "use strict";

    angular.module("todo-feature")
        .controller('TodoHeader', TodoHeader);

    function TodoHeader($scope, $controller) {
        $controller('TodoTable as $ctrl', {$scope: $scope});
    }
})();