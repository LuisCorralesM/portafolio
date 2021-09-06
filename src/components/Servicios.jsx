import React, { Component } from 'react'

export default class Servicios extends Component {
    render() {
        return (
            <div className="contenedor-gird-servicios">
                <h2>Servicios</h2>
                <div className="grid-servicios">
                    <div className="col-diseño">
                        <ul>
                            <p>DISEÑO</p>
                            <li>Experiencia de usuario</li>
                            <li>Interfaz de usuario</li>
                            <li>Aplicación web</li>
                            <li>Prueba de concepto</li>
                        </ul>
                        <button>Ver servicios de diseño</button>
                    </div>
                    <div className="col-desarrollo">
                        <ul>
                            <p>DESARROLLO</p>
                            <li>Aplicaciones móbiles</li>
                            <li>Sitios web</li>
                            <li>Aplicaciones web progresivas</li>
                        </ul>
                        <button>Ver servicios de desarrollo</button>
                    </div>
                    <div className="col-marca">
                        <ul>
                            <p>MARCA</p>
                            <li>Identidad de la marca</li>
                            <li>Estrategia de marca</li>
                        </ul>
                        <button>Ver servicios de marca</button>
                    </div>
                </div>
            </div>
        )
    }
}
