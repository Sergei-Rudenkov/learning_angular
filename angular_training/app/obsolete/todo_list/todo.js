(function () {
    "use strict";
    angular.module('todo', [])
        .controller('Todo', Todo)
        .directive("taskList", function taskList() {
            return {
                restrict: "EA",
                templateUrl: "obsolete/todo_table.html"
            };
        })
        .factory("todoService", todoService)
        .filter("checkedItems", checkedItems)
        .run(runApp)
        .value("model", {
            "user": "Sergei",
            "userPhoto": "./images/SR.png"
        });


    function Todo(model, todoService) {
        let $ctrl = this;
        $ctrl.todo = model;
        console.log($ctrl.todo);
        Object.assign($ctrl, todoService);
        $ctrl.showComplete = false;
    }

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

    function checkedItems() {
        return function (items, showComplete) {
            let result = [];

            if (angular.isArray(items)) {
                angular.forEach(items, (item) => {
                    if (!item.done || showComplete) {
                        result.push(item);
                    }
                });
                return result;
            }
            else {
                return items;
            }
        }

    }

    function runApp($http, model) {
        $http
            .get("./obsolete/todo-feature.json")
            .then((response) => model.items = response.data);

    }
})();


