import { css, html, LitElement, type CSSResultGroup } from "lit";
import { customElement } from "lit/decorators.js";
import '../components/Header.ts'
import '../components/Main.ts'
import '../components/Footer.ts'

@customElement('my-home')
export class Home extends LitElement{
    static styles = css`
        
    `
    render(){
        return html`
            <header>
                <my-header></my-header>
            </header>
            <main>
                <my-main></my-main>
            </main>
            <footer>
                <my-footer></my-footer>
            </footer>
        
        `
    }
}