// Navbar 
import React from 'react'
import '../style/navBar.css'

const Navbar = () => {

    // Menu hamburguesa
    const cambiarClase = () => {
        let siteNav = document.getElementById('site-nav');
        siteNav.classList.toggle('site-nav-open');
        let menuOpen = document.getElementById('menu-toggle');
        menuOpen.classList.toggle('menu-open');
    }

    return (
        <div className="contedor-nav-bar">
            <div id="animacion" className="animacion"></div>
            <header>
                <div className="container">
                    <h1 className="logo">LC</h1>
                </div>
                <nav id="site-nav" className="site-nav">
                    <ul>
                        <li className="list-item-nav">Proyectos</li>
                        <li className="list-item-nav">Certificados</li>
                        <li className="list-item-nav">Contacto</li>
                        {/* <li className="list-item-nav">Admin</li> */}
                    </ul>
                </nav>
                <div id="menu-toggle" className="menu-toggle" onClick={(e) => cambiarClase(e)}>
                    <div className="hamburger"></div>
                </div>
            </header>

        </div>
    )
}

export default (Navbar)
