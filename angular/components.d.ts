import { ChangeDetectorRef, ElementRef, NgZone } from '@angular/core';
import type { Components } from '@gapin-ds/core/components';
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
}
export declare interface MyComponent extends Components.MyComponent {
}
