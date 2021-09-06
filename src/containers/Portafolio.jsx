import React from 'react';
import NavBar from '../components/NavBar';
import AcercaDeMi from '../components/AcercaDeMi'
import Proyectos from '../components/Proyectos';
import Servicios from '../components/Servicios';
import Contacto from '../components/Contacto';
import Footer from '../components/Footer';

function Portafolio() {
  return (
    <div>
      <NavBar/>
      <AcercaDeMi />
      <Proyectos />
      <Servicios />
      <img src="https://res.cloudinary.com/academia-geek/image/upload/v1630901117/samples/FotosPersonales/img_ox5yiu.png" alt="" />
      <Contacto />
      <Footer />
    </div>
  );
}

export default Portafolio;
