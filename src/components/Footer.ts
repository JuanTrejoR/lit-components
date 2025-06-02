import { html, LitElement } from "lit"
import { customElement } from "lit/decorators.js"

@customElement('my-footer')
export class Header extends LitElement {
    render() {
        return html`
            <p>Footer</p>
        `
    }

}
