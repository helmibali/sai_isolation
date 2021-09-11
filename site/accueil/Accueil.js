import React, { Component } from 'react';
import Slide2 from './Slider/Slide2';
import Element2 from './element2/Element2';
import Element3 from './element3/element3';
import Element4 from './element4/Element4';
import Ele3 from './element3/Ele3';
import Caroussel from './carusel/caroussel';
import './accueil.css';



class Accueil extends Component {

    componentDidMount = () =>{
        document.title = "SAI Isolation";
    }

    render(){
    return (
        <>
        <div className="slider"><Slide2/></div>
        
       
        <Ele3/>    
        <Element2/>
        <Caroussel/>
        <Element4/>
        
        
         </>
        );
    }
}
export default Accueil;
