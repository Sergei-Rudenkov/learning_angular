/**
 * Created by sergei_rudenkov on 11/6/16.
 */
(function () {
    "use strict";

    angular.module("todo-feature")
        .factory("todoService", todoService);


    function todoService() {
        //API
        return {
            addNewItem,
            incompleteCount,
            warningLevel
        };

        //IMPL
        function addNewItem(items, newItem) {
            if (newItem && newItem.action) {
                items.push({
                    action: newItem.action,
                    done: false
                });
                newItem.action = "";
            }

        }

        function incompleteCount(items) {
            let count = 0;

            angular.forEach(items, (item) => {
                if (!item.done) count++;
            });

            return count;
        };

        function warningLevel(items) {
            return incompleteCount(items) < 3
                ? "label-success"
                : "label-warning";
        };
    }

})();

