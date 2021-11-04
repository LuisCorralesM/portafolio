import React, {useEffect} from 'react';
import '../style/acercaDe.css'
import { animacion1 } from '../helpers/animaciones'

export const AcercaDeMi = () => {
    useEffect(() => {
        const 
        d = document,
        imagen = d.querySelector('.imagen-desarrollador');
        // posicion = imagen.getBoundingClientRect().top
        // console.log(posicion);
        animacion1(imagen)    
    }, [])
    return (
        <main>
            <div className="contenedor">
                <div className="grid-acercaDeMi">
                    <div className="col-foto">
                        <img className="imagen-desarrollador z-index" src="https://res.cloudinary.com/academia-geek/image/upload/v1635394242/me_lafr5f.png" alt="" />
                    </div>
                    <div className="col-descrip-perfil">
                        <h1 className="nombre-programador z-index">Luis Corrales</h1>
                        <p className="profesion-programador z-index">Frontend Developer</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

