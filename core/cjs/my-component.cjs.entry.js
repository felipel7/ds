'use strict';

var index = require('./index-Bo6n4ojn.js');

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

const MyComponent = class {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
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
        return (index.h(index.Host, { key: '8cf589014845f4807e81895b24dec2fbe6f931ec' }, index.h("div", { key: '8d17a25a5ae0c3fa8ab0902e9b9176095cdfe308' }, "Hello, World! I'm", ' ', format(this.first, this.middle, this.last))));
    }
};
MyComponent.style = myComponentCss();

exports.my_component = MyComponent;
