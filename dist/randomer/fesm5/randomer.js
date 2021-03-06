import { createCommonjsModule, unwrapExports } from ' commonjsHelpers';
import '@angular/core';
import core_1 from ' commonjs-proxy:@angular/core';
import randomer_component_1 from ' commonjs-proxy:./randomer.component';
import randomer_service_1 from ' commonjs-proxy:./lib/randomer.service';
import randomer_component_1$1 from ' commonjs-proxy:./lib/randomer.component';
import randomer_module_1 from ' commonjs-proxy:./lib/randomer.module';
import public_api_1 from ' commonjs-proxy:./public_api';

var randomer_service = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });

var i0 = core_1;
var RandomerService = /** @class */ (function () {
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

unwrapExports(randomer_service);
var randomer_service_1$1 = randomer_service.RandomerService;

var randomer_component = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });

var RandomerComponent = /** @class */ (function () {
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

unwrapExports(randomer_component);
var randomer_component_1$2 = randomer_component.RandomerComponent;

var randomer_module = createCommonjsModule(function (module, exports) {
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
Object.defineProperty(exports, "__esModule", { value: true });


var RandomerModule = /** @class */ (function () {
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

unwrapExports(randomer_module);
var randomer_module_1$1 = randomer_module.RandomerModule;

var public_api = createCommonjsModule(function (module, exports) {
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

unwrapExports(public_api);
var public_api_1$1 = public_api.RandomerService;
var public_api_2 = public_api.RandomerComponent;
var public_api_3 = public_api.RandomerModule;

var randomer = createCommonjsModule(function (module, exports) {
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

var randomer$1 = unwrapExports(randomer);
var randomer_1 = randomer.RandomerService;
var randomer_2 = randomer.RandomerComponent;
var randomer_3 = randomer.RandomerModule;

export default randomer$1;
export { randomer_1 as RandomerService, randomer_2 as RandomerComponent, randomer_3 as RandomerModule };

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFuZG9tZXIuanMubWFwIiwic291cmNlcyI6WyJuZzovL3JhbmRvbWVyL2xpYi9yYW5kb21lci5zZXJ2aWNlLnRzIiwibmc6Ly9yYW5kb21lci9saWIvcmFuZG9tZXIuY29tcG9uZW50LnRzIiwibmc6Ly9yYW5kb21lci9saWIvcmFuZG9tZXIubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgUmFuZG9tZXJTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxufVxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZW5sLXJhbmRvbWVyJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8cD5cbiAgICAgIHJhbmRvbWVyIHdvcmtzIVxuICAgIDwvcD5cbiAgYCxcbiAgc3R5bGVzOiBbXVxufSlcbmV4cG9ydCBjbGFzcyBSYW5kb21lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG4iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUmFuZG9tZXJDb21wb25lbnQgfSBmcm9tICcuL3JhbmRvbWVyLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbUmFuZG9tZXJDb21wb25lbnRdLFxuICBleHBvcnRzOiBbUmFuZG9tZXJDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIFJhbmRvbWVyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQU9FO0tBQWlCOztnQkFMbEIsaUJBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7OzBCQUpEOztBQUthLDBDQUFlOzs7Ozs7Ozs7Ozs7Ozs7O0lDUTFCO0tBQWlCOzs7O0lBRWpCLG9DQUFROzs7SUFBUjtLQUNDOztnQkFkRixnQkFBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxjQUFjO29CQUN4QixRQUFRLEVBQUUsZ0RBSVQ7b0JBQ0QsTUFBTSxFQUFFLEVBQUU7aUJBQ1g7Ozs7NEJBVkQ7O0FBV2EsOENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkNSN0IsZUFBUSxTQUFDO29CQUNSLE9BQU8sRUFBRSxFQUNSO29CQUNELFlBQVksRUFBRSxDQUFDLHNDQUFpQixDQUFDO29CQUNqQyxPQUFPLEVBQUUsQ0FBQyxzQ0FBaUIsQ0FBQztpQkFDN0I7O3lCQVJEOztBQVNhLHdDQUFjOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7In0=