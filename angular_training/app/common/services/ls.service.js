/**
 * Created by sergei-rudenkov on 12.11.16.
 */

(function () {
    "use strict";

    angular.module("commonServices")
        .factory("lsService", lsService);

    function lsService() {

        let columns = ["Description", "Deadline", "Estimation", "Done", "Commands"];

        //API
        return {
            setColumnsToLocalStorage,
            getColumnsFromLocalStorage
        };

        function setColumnsToLocalStorage(columnNames) {
            for (let [key, value] of entries(columnNames)) {
                localStorage.setItem(key, value);
            }
        }

        function getColumnsFromLocalStorage() {
            let columnsFromLS = [];
            columns.forEach(function (column) {
                if (localStorage.getItem(column)) {
                    columnsFromLS.push(column);
                }
            })
            return columnsFromLS;
        }
    }
})();