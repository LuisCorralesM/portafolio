import React from 'react'
import '../style/proyectos.css'
import proyectos from '../data/proyectos.json'
export const Proyectos = () => {
    document.addEventListener('scroll', () => {
        const d = document;
        const altoPantalla = window.innerHeight;
        const $cardCertificado = d.querySelectorAll('.contenedor-proyectos');

        $cardCertificado.forEach(img => {

            let topImg = Math.round(img.getBoundingClientRect().top);

            if (topImg < Math.round(altoPantalla/2)) {
                img.classList.add('activarAnimacion')
            }
        })
        
    })
    return (
        <div className="content-proyect" id="proyectos">
            <h1 className="titulos-principales z-index">Proyectos</h1>
            {/* proyecto 1 */}
            <div className="grid-cards">
                {proyectos.map((pro, i) => (
                    <div key={i} className="contenedor-proyectos cards-con-sombras z-index">
                        <h2 className="nombre-proyecto">{pro.nombre}</h2>
                        <a href={pro.enlace} className="contenr-proyecto1" target="_blank" rel="noopener noreferrer">
                            <div >
                                <img className="img-proyect1" src={pro.imagen} alt="" />
                            </div>
                            <div className="descripcion-proyecto">
                                <h1 className="titulo-proyecto1">{pro.encabezado}</h1>
                                <p className="descripcion-proyecto1">{pro.descripcion}</p>
                            </div>
                        </a>
                    </div>
                ))
                }

            </div>
        </div>
    )
}
