import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import type { Components } from '@gapin-ds/core/components';
import * as i0 from "@angular/core";
export declare class MyComponent {
    protected z: NgZone;
    protected el: HTMLMyComponentElement;
    /**
   * O primeiro nome
   */
    set first(_: Components.MyComponent['first']);
    /**
   * O nome do meio
   */
    set middle(_: Components.MyComponent['middle']);
    /**
   * O último nome
   */
    set last(_: Components.MyComponent['last']);
    constructor(c: ChangeDetectorRef, r: ElementRef, z: NgZone);
    static ɵfac: i0.ɵɵFactoryDeclaration<MyComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<MyComponent, "my-component", never, { "first": { "alias": "first"; "required": false; }; "last": { "alias": "last"; "required": false; }; "middle": { "alias": "middle"; "required": false; }; }, {}, never, ["*"], false, never>;
}
export declare interface MyComponent extends Components.MyComponent {
}
//# sourceMappingURL=components.d.ts.map