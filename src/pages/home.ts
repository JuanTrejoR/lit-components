import { css, html, LitElement, type CSSResultGroup } from "lit";
import { customElement } from "lit/decorators.js";
import '../components/Header.ts'
import '../components/Main.ts'
import '../components/Footer.ts'

@customElement('my-home')
export class Home extends LitElement{

    static styles = css`
        .header{
            margin: 0;
        }
        div {
            background-color: rgba(172, 224, 255, 0.3);
        }
    `
    render(){
        return html`
            <div>
                <header class="header">
                    <my-header></my-header>
                </header>
                <main>
                    <my-main></my-main>
                </main>
                <footer>
                    <my-footer></my-footer>
                </footer>
            </div>
        
        `
    }
}