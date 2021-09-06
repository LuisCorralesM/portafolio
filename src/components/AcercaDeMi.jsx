import React, { Component } from 'react';

class AcercaDeMi extends Component{
    render(){
        return(
            <main>
                <div className="contenedor">
                    <div className="grid-acercaDeMi">
                        <div className="col-descrip-perfil">
                            <h1 className="saludo-bienvenida">¡Hola a todos! <br/> Soy Luis Corrales</h1>
                            <p className="mensaje-bienvenida">Frontend Developer apasionado por la programación.<br/> ¡ven y échale un vistazo a mis proyectos!</p>
                        </div>
                        <div className="col-foto">
                            <img src="https://res.cloudinary.com/academia-geek/image/upload/v1630895488/samples/FotosPersonales/foto-portafolio_dugzzt.png" alt="" />
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default AcercaDeMi;