import React from 'react';
import img1 from './Imgs/img1.jpg';
import img2 from './Imgs/img2.jpg';
import img3 from './Imgs/img3.jpg';
import './slide.css';

    const Slide2 = (props) => (
        <>  
         
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
          
         
  <ol className="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div className="carousel-inner">
    <div className="carousel-item active ">
     <img className="d-block w-100 imgslide3" src={img1} alt="First slide"/> 
     <div className="fil"><div className="sologan-slide">Sai isolation</div></div> 
    </div>
    <div className="carousel-item">
    
    <img className="d-block w-100 imgslide3" src={img2} alt="Second slide"/> 
    <div className="fil"><div className="sologan-slide">Sai isolation</div></div> 
    </div>
    <div className="carousel-item">
    <img className="d-block w-100 imgslide3" src={img3} alt="Third slide"/> 
    <div className="fil"><div className="sologan-slide">Sai isolation</div></div>
      
    </div>
  </div>
  {/* <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
  </a>
  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>

  </a> */}
  </div>

  



    </>
    );

export default Slide2;