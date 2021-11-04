import React, { Component } from 'react'
import '../style/contacto.css'

export const Contacto = () => {
    const handleChatWsp = () => {
        let
            numero = 573126505633,
            mensaje = 'Hola Luis, quiero saber más de tí';
        mensaje.replaceAll(" ", '%')
        window.open(`https://wa.me/+${numero}?text=${mensaje}`)
    }

    return (
        <div className="contacto" id="contacto">
            <h2 className="contacto-titulo titulos-principales z-index">Contacto</h2>
            <p className="z-index color-negro-oscuro">Si está interesado en trabajar conmigo en su próximo proyecto, no dude en contactarme</p>
            <div className="enlacer-contacto z-index">
                {/* btn linkedin */}
                <div className="btn-linkedin">
                    <a href="https://www.linkedin.com/in/luiscorralesmarin/" target="_blank" rel="noopener noreferrer">
                        <img src="assets/imagenes/Linkedin.jpg" alt="Perfil de linkedin" width="60px" />
                    </a>
                </div>
                {/* btn-whatsap */}
                <div className="btn-whatsapp">
                    <img src="assets/imagenes/WhatsApp.png" alt="chat de whatsapp-whatsapp-chat" width="60px" onClick={() => handleChatWsp()} />
                </div>
                {/* btn github */}
                <div className="btn-github">
                    <a href="https://github.com/LuisCorralesM" target="_blank" rel="noopener noreferrer">
                        <img src="assets/imagenes/Github.jpg" alt="Perfil de github" width="60px" />
                    </a>
                </div>
            </div>
            {/* btn email */}
            <hr />
            <div className="btn-email">
                <img className="z-index" src="assets/imagenes/Email.png" alt="Email" width="60px" />
                <p><b className="z-index color-negro-oscuro">luiscorrales5012@outlook.com</b></p>
            </div>
        </div>
    )
}
