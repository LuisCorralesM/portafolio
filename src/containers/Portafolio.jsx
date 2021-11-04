import React, {useEffect} from 'react';
import NavBar from '../components/NavBar';
import { AcercaDeMi } from '../components/AcercaDeMi'
import { Proyectos } from '../components/Proyectos';
import { Certificados } from '../components/Certificados';
import { Contacto } from '../components/Contacto';
import Footer from '../components/Footer';

// Animacion
import { animacionFondo } from '../helpers/animacionFondo';
import '../style/animacionFondo.css'

function Portafolio() {
  useEffect(() => {
    const d = document;

    const
    img1 = d.querySelector('.img1'),
    img2 = d.querySelector('.img2'),
    img3 = d.querySelector('.img3'),
    img4 = d.querySelector('.img4'),
    img5 = d.querySelector('.img5'),
    img6 = d.querySelector('.img6'),
    img7 = d.querySelector('.img7');


    animacionFondo(img1,img2,img3,img4,img5,img6,img7)
  }, [])

  return (
    <div id="largo-total">
      <div className="conten-gif">
          <img className="imagen1 logo-imagen img1" src="./assets/imagenes/logo-bootstrap.png" alt="" />
          <img className="imagen2 logo-imagen img2" src="./assets/imagenes/logo-css.png" alt="" />
          <img className="imagen3 logo-imagen img3" src="./assets/imagenes/logo-github.png" alt="" />
          <img className="imagen4 logo-imagen img4" src="./assets/imagenes/logo-html.png" alt="" />
          <img className="imagen5 logo-imagen img5" src="./assets/imagenes/logo-js.png" alt="" />
          <img className="imagen6 logo-imagen img6" src="./assets/imagenes/logo-react.png" alt="" />
          <img className="imagen7 logo-imagen img7" src="./assets/imagenes/logo-vsc.png" alt="" />
      </div>

      <NavBar />
      <AcercaDeMi />
      <Proyectos />
      <Certificados />
      <Contacto />
      {/* <Footer /> */}
    </div>
  );
}

export default Portafolio;
