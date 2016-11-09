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
            deleteAllCompletedItems,
            deleteItem,
            editItem,
            incompleteCount,
            warningLevel,
        };

        //IMPL
        function addNewItem(items, newItem) {
            if (newItem && newItem.action) {
                items.push({
                    action: newItem.action,
                    deadline: newItem.deadline,
                    estimation: newItem.estimation,
                    done: false
                });
                newItem.action = "";
                newItem.deadline = "";
                newItem.estimation = "";
            }
        }

        function deleteAllCompletedItems(items) {
            for (var i = 0; i < items.length;) {
                if (items[i].done === true) {
                    deleteItem(items[i], items);
                } else {
                    i++;
                }
            }
        }

        function deleteItem(item, items) {
            var index = items.indexOf(item);
            items.splice(index, 1)
        }

        function editItem(editedItem, newItem, items) {
            newItem.action = editedItem.action;
            newItem.deadline = editedItem.deadline;
            newItem.estimation = editedItem.estimation;
            deleteItem(editedItem, items)
        }

        function incompleteCount(items) {
            let count = 0;

            angular.forEach(items, (item) => {
                if (!item.done) count++;
            });
            return count;
        }

        function warningLevel(items) {
            return incompleteCount(items) < 3
                ? "label-success"
                : "label-warning";
        }
    }

})
();

