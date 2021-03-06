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
                <nav id="site-nav" className="site-nav">
                    <ul>
                        <a href="#proyectos" className="scroll">
                            <li className="list-item-nav titulos-principales">Proyectos</li>
                        </a>
                        <a href="#certificados" className="scroll">
                            <li className="list-item-nav titulos-principales">Certificados</li>
                        </a>
                        <a href="#contacto" className="scroll">
                            <li className="list-item-nav titulos-principales">Contacto</li>
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
