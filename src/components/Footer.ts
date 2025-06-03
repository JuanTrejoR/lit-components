import { css, html, LitElement } from "lit"
import { customElement } from "lit/decorators.js"

@customElement('my-footer')
export class Header extends LitElement {
    static styles = css`
        div {
            width: 100%;
            text-align:center;
        }
        img{
            width: 40%;
            object-fit: cover;
        }
        p {
            text-align: end;
            font-weight: 800;
            font-size: 20px;
        }
    `
    render() {
        return html`
            <div>
                <img src="https://in.portal-pokemon.com/special/pokemonrun_carnival/assets/img/footer_img_sp.png">                
            </div>
            <p>Juan Trejo Ramirez</p>
        `
    }

}
