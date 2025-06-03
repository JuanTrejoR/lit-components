import { LitElement, css, html } from "lit";
import { customElement, property, query } from "lit/decorators.js";
import '../pages/home.ts'

@customElement('mi-login')
export class MiLogin extends LitElement {
    static styles = css`
        #wrapper {
            background-color: rgb(201, 26, 26);
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        #container {
            width: 400px;
            height: 70%;
            background-color: white;
            box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.42); 
            border-radius: 8px
        }
        
        .input-icon{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        h1 {
            text-align: center;
            margin-bottom: 40px;
            font-family: 'Roboto', sans-serif;
            font-weight: 900;
        }

        input {
            margin: 15px 0;
            margin-left: 10px;
            padding: 5px 0;
            font-size: 18px;
            width: 300px;
            border: none;
            border-bottom: 2px solid red;
        }
        
        .forgot-login {
            display: flex;
            margin-top: 50px;
            flex-direction: column;
            align-items: center;
        }
        .forgot-login span {
            font-size: 18px;
            margin-bottom: 10px;
            text-decoration: underline;
            cursor: pointer;

        }
        .forgot-login button {
            font-size: 20px;
            margin: 5px 0 20px;
            border: none;
            border-radius: 5px;
            padding: 10px 30px;
            background-color: rgb(227, 77, 77); 
            cursor: pointer;
            font-weight: 700;
        }
        .forgot-login button:hover {
            background-color: rgb(222, 147, 147); 
        }
        img{
            width: 30pxpx;
            height: 30px;
        }
    `

    @query('#userInput')
    userInput!: HTMLInputElement ;
    @query('#passInput')
    passInput!: HTMLInputElement ;
    @property()
    login = false;

    getUser(){
        const usuarios = JSON.parse(localStorage.getItem('usuarios') || '')
        return usuarios;
    }

    handleClick() {
        const {usuario, password} = this.getUser()
        const user = this.userInput.value;
        const pass = this.passInput.value;
        
        if(user !== usuario || pass!==password){
            alert('Usuario o contraseña incorrectos')
        }
        else{
            alert('CORRECTO!!')
            this.login = false
        }
    }
    

    name = 'World'
    render() {
        return html`
            ${this.login ? html`
                <div id="wrapper">
                    <div id='container'>
                        <h1>Login</h1>
                        <div class="input-icon">
                            <img src="usuario.png" alt="icono de usuario">
                            <input type="text" placeholder="Username" id='userInput'>
                        </div>
                        <div class="input-icon">
                            <img src="candado.png" alt="icono de usuario">
                            <input type="password" placeholder="Password" id="passInput">
                        </div>
                        
                        <div class="forgot-login">
                            <span>Forgot your password?</span>
                            <button @click=${this.handleClick}>Login</button>
                        </div>
                    </div>
                </div>`
            : html`<my-home/>`
            }


            
        `
    }
}

