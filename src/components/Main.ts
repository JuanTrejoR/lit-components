import { css, html, LitElement } from "lit";
import { customElement, state } from "lit/decorators.js";
import type { Result, Root } from "../interfaces/Interfaces";



@customElement('my-main')
export class Main extends LitElement {
    @state() private result: Result[] = [];

    static styles = css`
        .wrapper{
            display: flex;
            flex-wrap: wrap;
        }
        .container-pkm{
            width: 33%;
            text-align: center;
        }
        
    `

    constructor() {
        super()
        this.getData();
    }

    async getData() {
        const res = await fetch('https://pokeapi.co/api/v2/pokemon')
        const data: Root = await res.json()
        this.result = data.results;
        console.log(this.result)
    }

    render() {
        return html`
            <div class="wrapper">
                ${this.result.map((pokemon, index) => {
                    return html`
                            <div class='container-pkm'>
                                <p># ${index+1} ${pokemon.name.toUpperCase()}</p>
                                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${index+1}.png">
                            </div>
                        `
                    })}
            </div>
        `
    }
}