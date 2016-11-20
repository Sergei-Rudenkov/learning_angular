/**
 * Created by sergei_rudenkov on 11/13/16.
 */

(function () {
    "use strict";

    angular.module("commonFilters")
        .filter("twoColumnsFilter", twoColumnsFilter);

    function twoColumnsFilter() {
        return function(items, input) {
            // If no array is given, exit.
            if (!items) {
                return;
            }
            // If no search term exists, return the array unfiltered.
            else if (!input) {
                return items;
            }
            return items.filter(function(item){
                var firstMatches = item.action.toLowerCase().indexOf(input.toLowerCase()) > -1;
                var secondMatches = item.deadline.toLowerCase().indexOf(input.toLowerCase()) > -1;
                return firstMatches || secondMatches;
            });
        };
    }

})();