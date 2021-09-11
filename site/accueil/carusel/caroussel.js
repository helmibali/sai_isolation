import React from 'react';
import './caroussel.css';
import bizerte from './caroussel-imgs/1.jpg';
import Tunis from './caroussel-imgs/2.jpg';
import sousse from './caroussel-imgs/3.jpg';
import Zaghouen from './caroussel-imgs/4.jpg';


    const Caroussel = (props) => (
        <>
        <div className="container">
            <h1 className="text-center mt-4 mb-4 mytextcenter title-caroussel">Nos Projets</h1>
        </div>
        <div id="scrolle" className="slider-par">
            <div className="card">
                <img src={bizerte} className="card-img-top" alt="tisch4.jpg"/>
                <div className="card-body">
                    <h5 className="card-title">Bizerte</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-outline-warning">Go somewhere</a>
                </div>
            </div>
            <div className="card">
                <img src={Tunis} className="card-img-top" alt="tisch4.jpg"/>
                <div className="card-body">
                    <h5 className="card-title">Tunis</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-outline-warning">Go somewhere</a>
                </div>
            </div>
            <div className="card">
                <img src={sousse} className="card-img-top" alt="tisch4.jpg"/>
                <div className="card-body">
                    <h5 className="card-title">Sousse</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-outline-warning">Go somewhere</a>
                </div>
            </div>
            <div className="card">
                <img src={Zaghouen} className="card-img-top" alt="tisch4.jpg"/>
                <div className="card-body">
                    <h5 className="card-title">Zaghouene</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-outline-warning">Go somewhere</a>
                </div>
            </div>
            <div className="card">
                <img src={bizerte} className="card-img-top" alt="tisch4.jpg"/>
                <div className="card-body">
                    <h5 className="card-title">Nabeul</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-outline-warning">Go somewhere</a>
                </div>
            </div>
            
           
   
        </div> 
        </>
    );

export default Caroussel;