/**
 * Created by sergei_rudenkov on 11/6/16.
 */
(function () {
    "use strict";
    angular.module("todo-feature", ["paging-module"])
        .value("model", {
            "user": "Sergei",
            "userPhoto": "./images/SR.png"
        });
})();