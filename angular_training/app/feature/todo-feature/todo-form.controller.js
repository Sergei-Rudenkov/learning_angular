/**
 * Created by sergei_rudenkov on 11/11/16.
 */
(function () {
    "use strict";

    angular.module("todo-feature")
        .controller('TodoForm', TodoForm);

    function TodoForm($scope, $controller) {
        $controller('TodoTable as $ctrl', {$scope: $scope});
    }
})();