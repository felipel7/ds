import { proxyCustomElement, HTMLElement, h, Host, transformTag } from '@stencil/core/internal/client';

/**
 * Formata uma string com o nome completo
 *
 * @param first - O primeiro nome
 * @param middle - O nome do meio
 * @param last - O último nome
 *
 * @returns A string com o nome completo
 */
function format(first, middle, last) {
    return (first || '') + (middle ? ` ${middle}` : '') + (last ? ` ${last}` : '');
}

const myComponentCss = () => `:host{display:block;color:#000000}`;

const MyComponent$1 = /*@__PURE__*/ proxyCustomElement(class MyComponent extends HTMLElement {
    constructor(registerHost) {
        super();
        if (registerHost !== false) {
            this.__registerHost();
        }
        this.__attachShadow();
    }
    /**
     * O primeiro nome
     */
    first;
    /**
     * O nome do meio
     */
    middle;
    /**
     * O último nome
     */
    last;
    /**
     * Renderiza o componente
     *
     * @returns O JSX do componente
     */
    render() {
        return (h(Host, { key: '8cf589014845f4807e81895b24dec2fbe6f931ec' }, h("div", { key: '8d17a25a5ae0c3fa8ab0902e9b9176095cdfe308' }, "Hello, World! I'm", ' ', format(this.first, this.middle, this.last))));
    }
    static get style() { return myComponentCss(); }
}, [769, "my-component", {
        "first": [1],
        "middle": [1],
        "last": [1]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["my-component"];
    components.forEach(tagName => { switch (tagName) {
        case "my-component":
            if (!customElements.get(transformTag(tagName))) {
                customElements.define(transformTag(tagName), MyComponent$1);
            }
            break;
    } });
}

const MyComponent = MyComponent$1;
const defineCustomElement = defineCustomElement$1;

export { MyComponent, defineCustomElement };
