import React, { Component } from 'react';
import '../style/acercaDe.css'

class AcercaDeMi extends Component{
    render(){
        return(
            <main>
                <div className="contenedor">
                    <div className="grid-acercaDeMi">
                        <div className="col-foto">
                            <img src="https://res.cloudinary.com/academia-geek/image/upload/v1635394242/me_lafr5f.png" alt="" />
                        </div>
                        <div className="col-descrip-perfil">
                            <h1 className="nombre-programador">Luis Corrales</h1>
                            <p className="profesion-programador">Frontend Developer</p>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default AcercaDeMi;