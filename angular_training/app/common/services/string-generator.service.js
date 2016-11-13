/**
 * Created by sergei_rudenkov on 11/13/16.
 */

(function () {

    "use strict";

    angular.module("commonServices")
        .factory('stringGenerator', stringGenerator);

    function stringGenerator() {

        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        //API
        return {
            generate
        };

        //IMPL
        function generate() {
            let text = "";
            for( let i=0; i < 5; i++ )
                text += possible.charAt(Math.floor(Math.random() * possible.length));
            return text;
        }
    }
})();