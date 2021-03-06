(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require(' commonjsHelpers'), require('@angular/core'), require(' commonjs-proxy:@angular/core'), require(' commonjs-proxy:./randomer.component'), require(' commonjs-proxy:./lib/randomer.service'), require(' commonjs-proxy:./lib/randomer.component'), require(' commonjs-proxy:./lib/randomer.module'), require(' commonjs-proxy:./public_api')) :
    typeof define === 'function' && define.amd ? define('randomer', ['exports', ' commonjsHelpers', '@angular/core', ' commonjs-proxy:@angular/core', ' commonjs-proxy:./randomer.component', ' commonjs-proxy:./lib/randomer.service', ' commonjs-proxy:./lib/randomer.component', ' commonjs-proxy:./lib/randomer.module', ' commonjs-proxy:./public_api'], factory) :
    (factory((global.randomer = {}),null,global.ng.core,null,null,null,null,null,null));
}(this, (function (exports,commonjsHelpers,core,core_1,randomer_component_1,randomer_service_1,randomer_component_1$1,randomer_module_1,public_api_1) { 'use strict';

    core_1 = core_1 && core_1.hasOwnProperty('default') ? core_1['default'] : core_1;
    randomer_component_1 = randomer_component_1 && randomer_component_1.hasOwnProperty('default') ? randomer_component_1['default'] : randomer_component_1;
    randomer_service_1 = randomer_service_1 && randomer_service_1.hasOwnProperty('default') ? randomer_service_1['default'] : randomer_service_1;
    randomer_component_1$1 = randomer_component_1$1 && randomer_component_1$1.hasOwnProperty('default') ? randomer_component_1$1['default'] : randomer_component_1$1;
    randomer_module_1 = randomer_module_1 && randomer_module_1.hasOwnProperty('default') ? randomer_module_1['default'] : randomer_module_1;
    public_api_1 = public_api_1 && public_api_1.hasOwnProperty('default') ? public_api_1['default'] : public_api_1;

    var randomer_service = commonjsHelpers.createCommonjsModule(function (module, exports) {
        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        Object.defineProperty(exports, "__esModule", { value: true });
        var i0 = core_1;
        var RandomerService = (function () {
            function RandomerService() {
            }
            RandomerService.decorators = [
                { type: core_1.Injectable, args: [{
                            providedIn: 'root'
                        },] },
            ];
            /** @nocollapse */
            RandomerService.ctorParameters = function () { return []; };
            /** @nocollapse */ RandomerService.ngInjectableDef = i0.defineInjectable({ factory: function RandomerService_Factory() { return new RandomerService(); }, token: RandomerService, providedIn: "root" });
            return RandomerService;
        }());
        exports.RandomerService = RandomerService;
        
    });
    commonjsHelpers.unwrapExports(randomer_service);
    var randomer_service_1$1 = randomer_service.RandomerService;

    var randomer_component = commonjsHelpers.createCommonjsModule(function (module, exports) {
        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        Object.defineProperty(exports, "__esModule", { value: true });
        var RandomerComponent = (function () {
            function RandomerComponent() {
            }
            /**
             * @return {?}
             */
            RandomerComponent.prototype.ngOnInit = /**
             * @return {?}
             */
                function () {
                };
            RandomerComponent.decorators = [
                { type: core_1.Component, args: [{
                            selector: 'enl-randomer',
                            template: "\n    <p>\n      randomer works!\n    </p>\n  ",
                            styles: []
                        },] },
            ];
            /** @nocollapse */
            RandomerComponent.ctorParameters = function () { return []; };
            return RandomerComponent;
        }());
        exports.RandomerComponent = RandomerComponent;
        
    });
    commonjsHelpers.unwrapExports(randomer_component);
    var randomer_component_1$2 = randomer_component.RandomerComponent;

    var randomer_module = commonjsHelpers.createCommonjsModule(function (module, exports) {
        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        Object.defineProperty(exports, "__esModule", { value: true });
        var RandomerModule = (function () {
            function RandomerModule() {
            }
            RandomerModule.decorators = [
                { type: core_1.NgModule, args: [{
                            imports: [],
                            declarations: [randomer_component_1.RandomerComponent],
                            exports: [randomer_component_1.RandomerComponent]
                        },] },
            ];
            return RandomerModule;
        }());
        exports.RandomerModule = RandomerModule;
        
    });
    commonjsHelpers.unwrapExports(randomer_module);
    var randomer_module_1$1 = randomer_module.RandomerModule;

    var public_api = commonjsHelpers.createCommonjsModule(function (module, exports) {
        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        /*
         * Public API Surface of randomer
         */
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.RandomerService = randomer_service_1.RandomerService;
        exports.RandomerComponent = randomer_component_1$1.RandomerComponent;
        exports.RandomerModule = randomer_module_1.RandomerModule;
        
    });
    commonjsHelpers.unwrapExports(public_api);
    var public_api_1$1 = public_api.RandomerService;
    var public_api_2 = public_api.RandomerComponent;
    var public_api_3 = public_api.RandomerModule;

    var randomer = commonjsHelpers.createCommonjsModule(function (module, exports) {
        /**
         * @fileoverview added by tsickle
         * @suppress {checkTypes} checked by tsc
         */
        /**
         * Generated bundle index. Do not edit.
         */
        Object.defineProperty(exports, "__esModule", { value: true });
        exports.RandomerService = public_api_1.RandomerService;
        exports.RandomerComponent = public_api_1.RandomerComponent;
        exports.RandomerModule = public_api_1.RandomerModule;
        
    });
    var randomer$1 = commonjsHelpers.unwrapExports(randomer);
    var randomer_1 = randomer.RandomerService;
    var randomer_2 = randomer.RandomerComponent;
    var randomer_3 = randomer.RandomerModule;

    exports.default = randomer$1;
    exports.RandomerService = randomer_1;
    exports.RandomerComponent = randomer_2;
    exports.RandomerModule = randomer_3;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tZXIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibmc6Ly9yYW5kb21lci9saWIvcmFuZG9tZXIuc2VydmljZS50cyIsIm5nOi8vcmFuZG9tZXIvbGliL3JhbmRvbWVyLmNvbXBvbmVudC50cyIsIm5nOi8vcmFuZG9tZXIvbGliL3JhbmRvbWVyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIFJhbmRvbWVyU2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cbn1cbiIsImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2VubC1yYW5kb21lcicsXG4gIHRlbXBsYXRlOiBgXG4gICAgPHA+XG4gICAgICByYW5kb21lciB3b3JrcyFcbiAgICA8L3A+XG4gIGAsXG4gIHN0eWxlczogW11cbn0pXG5leHBvcnQgY2xhc3MgUmFuZG9tZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gIH1cblxufVxuIiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhbmRvbWVyQ29tcG9uZW50IH0gZnJvbSAnLi9yYW5kb21lci5jb21wb25lbnQnO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1JhbmRvbWVyQ29tcG9uZW50XSxcbiAgZXhwb3J0czogW1JhbmRvbWVyQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBSYW5kb21lck1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFPRTthQUFpQjs7d0JBTGxCLGlCQUFVLFNBQUM7NEJBQ1YsVUFBVSxFQUFFLE1BQU07eUJBQ25COzs7OztrQ0FKRDs7UUFLYSwwQ0FBZTs7Ozs7Ozs7Ozs7OztZQ1ExQjthQUFpQjs7OztZQUVqQixvQ0FBUTs7O2dCQUFSO2lCQUNDOzt3QkFkRixnQkFBUyxTQUFDOzRCQUNULFFBQVEsRUFBRSxjQUFjOzRCQUN4QixRQUFRLEVBQUUsZ0RBSVQ7NEJBQ0QsTUFBTSxFQUFFLEVBQUU7eUJBQ1g7Ozs7b0NBVkQ7O1FBV2EsOENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7O3dCQ1I3QixlQUFRLFNBQUM7NEJBQ1IsT0FBTyxFQUFFLEVBQ1I7NEJBQ0QsWUFBWSxFQUFFLENBQUMsc0NBQWlCLENBQUM7NEJBQ2pDLE9BQU8sRUFBRSxDQUFDLHNDQUFpQixDQUFDO3lCQUM3Qjs7aUNBUkQ7O1FBU2Esd0NBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzsifQ==