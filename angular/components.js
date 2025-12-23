import { __decorate } from "tslib";
/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProxyCmp } from './angular-component-lib/utils';
import { defineCustomElement as defineMyComponent } from '@gapin-ds/core/components/my-component.js';
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
};
MyComponent = __decorate([
    ProxyCmp({
        defineCustomElementFn: defineMyComponent,
        inputs: ['first', 'last', 'middle']
    }),
    Component({
        selector: 'my-component',
        changeDetection: ChangeDetectionStrategy.OnPush,
        template: '<ng-content></ng-content>',
        // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
        inputs: ['first', 'last', 'middle'],
    })
], MyComponent);
export { MyComponent };
