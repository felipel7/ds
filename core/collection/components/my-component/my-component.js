import { h, Host } from "@stencil/core";
import { format } from "../../utils/utils";
export class MyComponent {
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
    static get is() { return "my-component"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() {
        return {
            "$": ["my-component.scss"]
        };
    }
    static get styleUrls() {
        return {
            "$": ["my-component.css"]
        };
    }
    static get properties() {
        return {
            "first": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "O primeiro nome"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "first"
            },
            "middle": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "O nome do meio"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "middle"
            },
            "last": {
                "type": "string",
                "mutable": false,
                "complexType": {
                    "original": "string",
                    "resolved": "string",
                    "references": {}
                },
                "required": false,
                "optional": false,
                "docs": {
                    "tags": [],
                    "text": "O \u00FAltimo nome"
                },
                "getter": false,
                "setter": false,
                "reflect": false,
                "attribute": "last"
            }
        };
    }
}
