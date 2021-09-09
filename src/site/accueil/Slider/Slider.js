import React from 'react';
import span from './icons/span.png';
import NavLink from 'react-router-dom';
import './slide.css';


const Slider = (props) => (
  <div className="filtreslide">
  <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="d-block w-100" alt="First slide" id="slide"></div>
        <div className="carousel-caption d-none d-md-block">
          <button className="btn btn-warning" id="btn">Contacter-nous</button>
          <h5>SERVICES ET ACTIVITES D'ISOLATION</h5>
          <p>Calirufige, Isolation et Frigorifique et la fabrication et pose de gaine de ventilation</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="d-block w-100" alt="First slide" id="slide2"></div>
        <div className="carousel-caption d-none d-md-block">
          <button className="btn btn-warning" id="btn">Contacter-nous</button>
          <h5>SERVICES ET ACTIVITES D'ISOLATION</h5>
          <p>Calirufige, Isolation et Frigorifique et la fabrication et pose de gaine de ventilation</p>
        </div>
      </div>
      <div className="carousel-item">
        <div className="d-block w-100" alt="First slide" id="slide3"></div>
        <div className="carousel-caption d-none d-md-block">
          <button className="btn btn-warning" id="btn">Contacter-nous</button>
          <h5>SERVICES ET ACTIVITES D'ISOLATION</h5>
          <p>Calirufige, Isolation et Frigorifique et la fabrication et pose de gaine de ventilation</p>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
  </div>
);

export default Slider;
