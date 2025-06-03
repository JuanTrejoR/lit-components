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
        p{
            margin: 0;
        }
        img{
            width: 300px;
        }
    `
    render() {
        return html`
        <div class="wrapper">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/International_Pok%C3%A9mon_logo.svg/2560px-International_Pok%C3%A9mon_logo.svg.png">
        </div>
        `
    }

}
