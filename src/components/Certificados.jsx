import React from 'react'
import certificados from '../data/certificados.json'
import '../style/certificados.css'

export const Certificados = () => {    
    document.addEventListener('scroll', () => {
        const d = document;
        const altoPantalla = window.innerHeight;
        const $cardCertificado = d.querySelectorAll('.freedCodeCamp__certificado');

        $cardCertificado.forEach(img => {

            let topImg = Math.round(img.getBoundingClientRect().top);

            if (topImg <= Math.round(altoPantalla/2)) {
                img.classList.add('activarAnimacion')
            }
        })

    })

    return (
        <>
            <div className="certificados" id="certificados">
                <h2 className="titulos-principales z-index">Certificados</h2>
                <div className="freeCodeCamp grid-cards">
                    {
                        certificados.map(el => (
                            <div className="freedCodeCamp__certificado cards-con-sombras z-index">
                                <h3 className="freedCodeCamp__titulo">FreedCodeCamp</h3>
                                <h3 className="freedCodeCamp__certificado-nombre">{el.nombre}</h3>
                                <img src={el.imagen} className="freedCodeCamp__certificado-imagen" alt={el.nombre} />
                                <p>{el.descripcion}</p>
                                <a href={el.enlace} target="_blank" rel="noopener noreferrer">FreedCodeCamp</a>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}
