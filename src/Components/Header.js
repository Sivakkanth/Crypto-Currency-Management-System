//import { AppBar, Container, Toolbar, Typography } from '@material-ui/core'
import React from 'react'
import logo from "../photos/logo.png"

const Header = () => {
    return(
        <main class='main'>
            <section class="main_section">
                <img className='img' src={logo}
                alt="Crypto Currency Wallet"/>
            </section>
            <section class="main_section">
                <h1 className="h1">CRYPTO CURRENCIES WALLET</h1>
            </section>
        </main>
    )
};

export default Header;