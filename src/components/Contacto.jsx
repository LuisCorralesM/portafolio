import React, { Component } from 'react'

export default class Contacto extends Component {
    render() {
        return (
            <div className="contacto">
                <div className="content-form">
                    <h2>Contacto</h2>
                    <p>Si está interesado en trabajar conmigo en su próximo proyecto, no dude en contactarme</p>
                    <input type="text" placeholder="Nombre completo"/>
                    <input type="email" placeholder="Correo electrónico" />
                    <textarea name="mensaje" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>
                    <button>Enviar mensaje</button>
                </div>
            </div>
        )
    }
}
