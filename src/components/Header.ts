import { css, html, LitElement, type CSSResultGroup } from "lit"
import { customElement } from "lit/decorators.js"

@customElement('my-header')
export class Header extends LitElement {
    static styles = css`
        .wrapper {
            width: 100%;
            height: 100%;
            text-align: center;
            font-size: 20px;
            font-weight: 700;
        }
    `
    render() {
        return html`
        <div class="wrapper">
            <p>VISUALIZADOR DE POKEMON</p>
        </div>
        `
    }

}
