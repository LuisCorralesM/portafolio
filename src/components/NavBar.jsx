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
                        <a href="#proyectos">
                            <li className="list-item-nav">Proyectos</li>
                        </a>
                        <a href="#certificados">
                            <li className="list-item-nav">Certificados</li>
                        </a>
                        <a href="#servicios">
                            <li className="list-item-nav">Servicios</li>
                        </a>
                        <a href="#contacto">
                            <li className="list-item-nav">Contacto</li>
                        </a>
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
