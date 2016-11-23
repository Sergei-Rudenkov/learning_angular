(function() {
    "use strict";

    angular
        .module("paging-module")
        .controller("PagingController", PagingController);

    function PagingController(todoService, $scope) {
        let $ctrl = this;
        Object.assign($ctrl, todoService);
        $ctrl.decrementPage = function () {
            if (parseInt(todoService.getStartPagingFrom()) - parseInt(todoService.getPagingLimit()) >= 0) {
                todoService.setStartPagingFrom(parseInt(todoService.getStartPagingFrom()) - parseInt(todoService.getPagingLimit()));
            }
        };
        $ctrl.incrementPage = function () {
            if (todoService.getTableItems()[parseInt(todoService.getStartPagingFrom()) + parseInt(todoService.getPagingLimit())]) {
                todoService.setStartPagingFrom(parseInt(todoService.getStartPagingFrom()) + parseInt(todoService.getPagingLimit()));
            }
        };

        $scope.$watch('$ctrl.limit', function(newVal, oldVal){
            if(newVal) {
                todoService.setPagingLimit(parseInt(newVal));
            }
        }, true);
        $scope.$watch('$ctrl.searchText', function(newVal, oldVal){
            if(newVal) {
                todoService.setSearchText(newVal);
            }else{
                todoService.setSearchText("");
            }
        }, true);
        $scope.$watch('$ctrl.showComplete', function(newVal, oldVal){
            todoService.setShowComplete(newVal);

        }, true);
    }

})();