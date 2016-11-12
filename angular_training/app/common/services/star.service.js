/**
 * Created by sergei-rudenkov on 12.11.16.
 */

(function () {
    "use strict";

    angular.module("commonServices")
        .constant("defaultSymbol", "*")
        .config(appConfig)
        .provider("starService", starService)
        .controller("Test", Test)
        .config(appConfig);


    function Test(starService) {
        console.log(starService);
        starService.evaluate(350);
    }


    function appConfig(starServiceProvider, defaultSymbol) {
        starServiceProvider.configSymbol("#");
    };

    function starService(defaultSymbol) {
        let symbol = defaultSymbol; //*

        return { // provider object
            $get,
            configSymbol
        };

        function $get() {
            return { // service object
                evaluate
            };

            function evaluate(number) {
                if(number < 100 & number >= 0){
                    console.log(symbol);
                }else if(number < 200 & number >= 100){
                    console.log(Array(2).join(symbol));
                }else if(number < 200 & number >= 100){
                    console.log(Array(3).join(symbol));
                }else if(number < 500 & number >= 200){
                    console.log(Array(4).join(symbol));
                }else if(number < 1000 & number >= 500){
                    console.log(Array(5).join(symbol));
                }
            }
        }

        function configSymbol(s) {
            if (s) {
                symbol = s;
                return this;
            }
            else {
                return symbol;
            }
        }
    }

})();