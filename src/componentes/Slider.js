import React from 'react'
import img1 from '../assets/colibris2.jpg'
import img2 from '../assets/aretes_hojas_perla.jpg'
import img3 from '../assets/tortuga2.jpg'

const Slider = () => {
  return (

    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="colibris" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Detalles Excepcionales</h5>
            <p>Conoce los conjuntos de plata y microperla.</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="aretes perla" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Joyeria Artesanal Mexicana</h5>
            <p>Plata 9.25 ley .</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="tortuga" />
          <div className="carousel-caption d-none d-md-block">
            <h5>Conoce la nueva coleccion Compañeros</h5>
            <p>Detalles que te acompañan.</p>
          </div>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  )
}

export default Slider
