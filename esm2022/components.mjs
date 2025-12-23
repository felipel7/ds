var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProxyCmp } from './angular-component-lib/utils';
import { defineCustomElement as defineMyComponent } from '@gapin-ds/core/components/my-component.js';
import * as i0 from "@angular/core";
const _c0 = ["*"];
let MyComponent = class MyComponent {
    z;
    el;
    /**
   * O primeiro nome
   */
    set first(_) { }
    ;
    /**
   * O nome do meio
   */
    set middle(_) { }
    ;
    /**
   * O último nome
   */
    set last(_) { }
    ;
    constructor(c, r, z) {
        this.z = z;
        c.detach();
        this.el = r.nativeElement;
    }
    static ɵfac = function MyComponent_Factory(__ngFactoryType__) { return new (__ngFactoryType__ || MyComponent)(i0.ɵɵdirectiveInject(i0.ChangeDetectorRef), i0.ɵɵdirectiveInject(i0.ElementRef), i0.ɵɵdirectiveInject(i0.NgZone)); };
    static ɵcmp = /*@__PURE__*/ i0.ɵɵdefineComponent({ type: MyComponent, selectors: [["my-component"]], inputs: { first: "first", last: "last", middle: "middle" }, ngContentSelectors: _c0, decls: 1, vars: 0, template: function MyComponent_Template(rf, ctx) { if (rf & 1) {
            i0.ɵɵprojectionDef();
            i0.ɵɵprojection(0);
        } }, encapsulation: 2, changeDetection: 0 });
};
MyComponent = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineMyComponent,
        inputs: ['first', 'last', 'middle']
    })
], MyComponent);
export { MyComponent };
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassMetadata(MyComponent, [{
        type: Component,
        args: [{
                selector: 'my-component',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: '<ng-content></ng-content>',
                // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
                inputs: ['first', 'last', 'middle'],
            }]
    }], () => [{ type: i0.ChangeDetectorRef }, { type: i0.ElementRef }, { type: i0.NgZone }], null); })();
(() => { (typeof ngDevMode === "undefined" || ngDevMode) && i0.ɵsetClassDebugInfo(MyComponent, { className: "MyComponent", filePath: "components.ts", lineNumber: 21 }); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2xpYnMvd2MtYW5ndWxhci9zcmMvY29tcG9uZW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxvQkFBb0I7QUFDcEIsOENBQThDO0FBQzlDLE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFzQixNQUFNLGVBQWUsQ0FBQztBQUUxRyxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFJekQsT0FBTyxFQUFFLG1CQUFtQixJQUFJLGlCQUFpQixFQUFFLE1BQU0sMkNBQTJDLENBQUM7OztBQVk5RixJQUFNLFdBQVcsR0FBakIsTUFBTSxXQUFXO0lBY3FDO0lBYmpELEVBQUUsQ0FBeUI7SUFDbkM7O0tBRUM7SUFDSCxJQUFJLEtBQUssQ0FBQyxDQUFrQyxJQUFHLENBQUM7SUFBQSxDQUFDO0lBQy9DOztLQUVDO0lBQ0gsSUFBSSxNQUFNLENBQUMsQ0FBbUMsSUFBRyxDQUFDO0lBQUEsQ0FBQztJQUNqRDs7S0FFQztJQUNILElBQUksSUFBSSxDQUFDLENBQWlDLElBQUcsQ0FBQztJQUFBLENBQUM7SUFDL0MsWUFBWSxDQUFvQixFQUFFLENBQWEsRUFBWSxDQUFTO1FBQVQsTUFBQyxHQUFELENBQUMsQ0FBUTtRQUNsRSxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDWCxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxhQUFhLENBQUM7SUFDNUIsQ0FBQztxR0FqQlUsV0FBVzs2REFBWCxXQUFXOztZQUpYLGtCQUF5Qjs7O0FBSXpCLFdBQVc7SUFYdkIsUUFBUSxDQUFDO1FBQ1IscUJBQXFCLEVBQUUsaUJBQWlCO1FBQ3hDLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBRSxNQUFNLEVBQUUsUUFBUSxDQUFDO0tBQ3BDLENBQUM7R0FRVyxXQUFXLENBa0J2Qjs7aUZBbEJZLFdBQVc7Y0FQdkIsU0FBUztlQUFDO2dCQUNULFFBQVEsRUFBRSxjQUFjO2dCQUN4QixlQUFlLEVBQUUsdUJBQXVCLENBQUMsTUFBTTtnQkFDL0MsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMsdUVBQXVFO2dCQUN2RSxNQUFNLEVBQUUsQ0FBQyxPQUFPLEVBQUUsTUFBTSxFQUFFLFFBQVEsQ0FBQzthQUNwQzs7a0ZBQ1ksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbIi8qIHRzbGludDpkaXNhYmxlICovXG4vKiBhdXRvLWdlbmVyYXRlZCBhbmd1bGFyIGRpcmVjdGl2ZSBwcm94aWVzICovXG5pbXBvcnQgeyBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgQ2hhbmdlRGV0ZWN0b3JSZWYsIENvbXBvbmVudCwgRWxlbWVudFJlZiwgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFByb3h5Q21wIH0gZnJvbSAnLi9hbmd1bGFyLWNvbXBvbmVudC1saWIvdXRpbHMnO1xuXG5pbXBvcnQgdHlwZSB7IENvbXBvbmVudHMgfSBmcm9tICdAZ2FwaW4tZHMvY29yZS9jb21wb25lbnRzJztcblxuaW1wb3J0IHsgZGVmaW5lQ3VzdG9tRWxlbWVudCBhcyBkZWZpbmVNeUNvbXBvbmVudCB9IGZyb20gJ0BnYXBpbi1kcy9jb3JlL2NvbXBvbmVudHMvbXktY29tcG9uZW50LmpzJztcbkBQcm94eUNtcCh7XG4gIGRlZmluZUN1c3RvbUVsZW1lbnRGbjogZGVmaW5lTXlDb21wb25lbnQsXG4gIGlucHV0czogWydmaXJzdCcsICdsYXN0JywgJ21pZGRsZSddXG59KVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbXktY29tcG9uZW50JyxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2gsXG4gIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50PicsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAYW5ndWxhci1lc2xpbnQvbm8taW5wdXRzLW1ldGFkYXRhLXByb3BlcnR5XG4gIGlucHV0czogWydmaXJzdCcsICdsYXN0JywgJ21pZGRsZSddLFxufSlcbmV4cG9ydCBjbGFzcyBNeUNvbXBvbmVudCB7XG4gIHByb3RlY3RlZCBlbDogSFRNTE15Q29tcG9uZW50RWxlbWVudDtcbiAgICAvKipcbiAgICogTyBwcmltZWlybyBub21lXG4gICAqL1xuICBzZXQgZmlyc3QoXzogQ29tcG9uZW50cy5NeUNvbXBvbmVudFsnZmlyc3QnXSkge307XG4gICAgLyoqXG4gICAqIE8gbm9tZSBkbyBtZWlvXG4gICAqL1xuICBzZXQgbWlkZGxlKF86IENvbXBvbmVudHMuTXlDb21wb25lbnRbJ21pZGRsZSddKSB7fTtcbiAgICAvKipcbiAgICogTyDDumx0aW1vIG5vbWVcbiAgICovXG4gIHNldCBsYXN0KF86IENvbXBvbmVudHMuTXlDb21wb25lbnRbJ2xhc3QnXSkge307XG4gIGNvbnN0cnVjdG9yKGM6IENoYW5nZURldGVjdG9yUmVmLCByOiBFbGVtZW50UmVmLCBwcm90ZWN0ZWQgejogTmdab25lKSB7XG4gICAgYy5kZXRhY2goKTtcbiAgICB0aGlzLmVsID0gci5uYXRpdmVFbGVtZW50O1xuICB9XG59XG5cblxuZXhwb3J0IGRlY2xhcmUgaW50ZXJmYWNlIE15Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50cy5NeUNvbXBvbmVudCB7fVxuXG5cbiJdfQ==