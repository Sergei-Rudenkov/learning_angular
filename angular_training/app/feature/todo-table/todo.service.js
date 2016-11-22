/**
 * Created by sergei_rudenkov on 11/6/16.
 */
(function () {
    "use strict";

    angular.module("todo-feature")
        .factory("todoService", todoService);


    function todoService() {

        let pagingLimit = 2;
        let startPagingFrom = 0;
        let showComplete;
        let sortItemsReverse;
        let tableItems = [];
        let newItem = {};
        let searchText;


        //API
        return {
            addNewItem,
            deleteAllCompletedItems,
            deleteItem,
            editItem,
            incompleteCount,
            warningLevel,
            getPagingLimit,
            setPagingLimit,
            getStartPagingFrom,
            setStartPagingFrom,
            getShowComplete,
            setShowComplete,
            setSortItemsReverse,
            getSortItemsReverse,
            getTableItems,
            setTableItems,
            getNewItem,
            setNewItem,
            getSearchText,
            setSearchText
        };

        function getSearchText() {
            return searchText;
        }

        function setSearchText(text) {
            searchText = text;
        }

        function getNewItem() {
            return newItem;
        }

        function setNewItem(item) {
            newItem = item;
        }

        function getTableItems() {
            return tableItems;
        }

        function setTableItems(newTableItems) {
            tableItems = newTableItems;
        }

        function getPagingLimit() {
            return pagingLimit;
        }

        function setPagingLimit(newLimit) {
            pagingLimit = newLimit;
        }

        function getStartPagingFrom() {
            return startPagingFrom;
        }

        function setStartPagingFrom(newStartPagingForm) {
            startPagingFrom = newStartPagingForm;
        }

        function getShowComplete() {
            return showComplete;
        }

        function setShowComplete(newShowComplete) {
            showComplete = newShowComplete;
        }

        function getSortItemsReverse() {
            return sortItemsReverse;
        }

        function setSortItemsReverse(newSortItemsReverse) {
            sortItemsReverse = newSortItemsReverse;
        }

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

