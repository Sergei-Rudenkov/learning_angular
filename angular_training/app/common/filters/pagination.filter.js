/**
 * Created by sergei_rudenkov on 11/13/16.
 */


(function () {
    "use strict";

    angular.module("commonFilters")
        .filter("paginationFilter", paginationFilter);

    function paginationFilter() {
        return function (items, limit, startFrom) {
            if (items && startFrom >=0 && limit >= 0) {
                return items.slice(startFrom, startFrom + limit);
            }else if(items && limit >= 0){
                return items.slice(0, limit);
            }
            return items;
        }
    }

})();