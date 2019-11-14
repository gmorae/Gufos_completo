import React from 'react'
import '../assets/css/cabecalho.css';
import logo from '../assets/img/icon-login.png'

function NavbarAdm() {
    return (
        <div>
            <header class="cabecalhoPrincipal">
                <div class="container">
                    <img src={logo} />
                    <nav class="cabecalhoPrincipal-nav">
                        Administrador
                    </nav>
                </div>
            </header>
        </div>
    )
}

export default NavbarAdm