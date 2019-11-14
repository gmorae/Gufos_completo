import React from 'react'
import '../assets/css/cabecalho.css';
import logo from '../assets/img/icon-login.png'

function Navbar() {
    return (
        <div>
            <header className="cabecalhoPrincipal">
                <div className="container">
                    <img src={logo} alt="logo" />

                    <nav className="cabecalhoPrincipal-nav">
                        <a>Home</a>
                        <a>Eventos</a>
                        <a>Contato</a>
                        <a className="cabecalhoPrincipal-nav-login" href="login.html">Login</a>
                    </nav>
                </div>
            </header>
        </div>
    )
}
export default Navbar