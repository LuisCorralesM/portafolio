import React, { Component } from 'react'
import certificados from '../data/certificados.json'
import '../style/certificados.css'

export const Certificados = () => {
    return (
        <>
            <div className="certificados" id="certificados">
                <h2 className="titulos-principales">Certificados</h2>
                <div className="freeCodeCamp grid-cards">
                    {
                        certificados.map(el => (
                            <div className="freedCodeCamp__certificado cards-con-sombras">
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
