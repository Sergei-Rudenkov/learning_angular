/**
 * Created by sergei_rudenkov on 11/13/16.
 */

(function () {
    "use strict";

    angular.module("commonServices")
        .constant("appName", "todo")
        .decorator("$log", extendedLog);

    function extendedLog($delegate, appName) {

        let log = $delegate.log;
        $delegate.log = function(msg) {
            console.log(`${new Date()}`);
            return log(msg);
        };

        let info = $delegate.info;
        $delegate.info = function(msg) {
            console.log(`${new Date()}`);
            return info(msg);
        };

        let warn = $delegate.warn;
        $delegate.warn = function(msg) {
            console.log(`${new Date()}`);
            return warn(msg);
        };

        let error = $delegate.error;
        $delegate.error = function(msg) {
            console.log(`${new Date()}`);
            return error(msg);
        };

        let debug = $delegate.debug;
        $delegate.debug = function(msg) {
            console.log(`${new Date()}`);
            return debug(msg);
        };

        $delegate.myLog = function(msg) {
            console.log(appName);
            return log(msg);
        };

        return $delegate;
    }

})();