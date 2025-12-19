import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import type { Components } from 'stencil-library/components';
import * as i0 from "@angular/core";
export declare class MyComponent {
    protected z: NgZone;
    protected el: HTMLMyComponentElement;
    /**
   * The first name
   */
    set first(_: Components.MyComponent['first']);
    /**
   * The middle name
   */
    set middle(_: Components.MyComponent['middle']);
    /**
   * The last name
   */
    set last(_: Components.MyComponent['last']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, { "first": { "alias": "first"; "required": false; }; "last": { "alias": "last"; "required": false; }; "middle": { "alias": "middle"; "required": false; }; }, {}, never, ["*"], true, never>;
}
export declare interface MyComponent extends Components.MyComponent {
}
