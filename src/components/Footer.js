import React from 'react';
import './footer.css'
import classesCss from './footer.css';
import facebook from '../Assets/facebook-logo.png'
import linkedin from '../Assets/linkedin.png'
import Logo from '../Assets/logo.png';
import { NavLink } from 'react-router-dom';

let apropos = 
       "A Propos \n"+
        "Qui sommes nous\n"+
        "Expertise \n"+
        "Domaine d'application" ; 

    const Footer = (props) => (
        
        <footer>
        <div className="row">
        <div className="col-2">
        <div className="title">A Propos</div>
        <NavLink to="/quisommesnous" className= {["nav-link", "p-0",classesCss.p_footerLink].join(" ")} id="navlink" >-Qui sommes nous</NavLink>
        <NavLink to="/expertise" className= {["nav-link", "p-0",classesCss.p_footerLink].join(" ")} id="navlink"  >-Expertise</NavLink>
        <NavLink to="/domainedapplication" className= {["nav-link", "p-0",classesCss.p_footerLink].join(" ")} id="navlink" >-Domaine d'application</NavLink>
        <NavLink to="/qualite" className= {["nav-link", "p-0",classesCss.p_footerLink].join(" ")} id="navlink"  >-Qualite</NavLink>
        </div>
        <div className="col-2">
        <div className="title">Services</div>
        <NavLink to="/etude" className= {["nav-link", "p-0",classesCss.p_footerLink].join(" ")} id="navlink" >-Etude</NavLink>
        <NavLink to="/installation" className= {["nav-link", "p-0",classesCss.p_footerLink].join(" ")} id="navlink"  >-Installation</NavLink>
        <NavLink to="/maintenance" className= {["nav-link", "p-0",classesCss.p_footerLink].join(" ")} id="navlink" >-Maintenance</NavLink>
        <NavLink to="/contole" className= {["nav-link", "p-0",classesCss.p_footerLink].join(" ")} id="navlink"  >-Controle</NavLink>
        </div>
        <div className="col-2">
        <div className="title">Ingenierie</div>
        <NavLink to="/thermique" className= {["nav-link", "p-0",classesCss.p_footerLink].join(" ")} id="navlink" >-Thermique</NavLink>
        <NavLink to="/frigorifique" className= {["nav-link", "p-0",classesCss.p_footerLink].join(" ")} id="navlink"  >-Frigorifique</NavLink>
        <NavLink to="/calorifugeage" className= {["nav-link", "p-0",classesCss.p_footerLink].join(" ")} id="navlink" >-Calorifugeage</NavLink>
        <NavLink to="/aerolique" className= {["nav-link", "p-0",classesCss.p_footerLink].join(" ")} id="navlink"  >-Aerolique</NavLink>
        <NavLink to="/acoustique" className= {["nav-link", "p-0",classesCss.p_footerLink].join(" ")} id="navlink"  >-Acoustique</NavLink>
        </div>
        <div className="col-2">
        <div className="title">QHSE</div>
        <NavLink to="/hse
        " className= {["nav-link", "p-0",classesCss.p_footerLink].join(" ")} id="navlink" >-HSE</NavLink>
        <NavLink to="/qualite" className= {["nav-link", "p-0",classesCss.p_footerLink].join(" ")} id="navlink"  >-Qualite</NavLink>
        
        </div>
        <div className="col-1">
        <NavLink to="/projet" className= {["nav-link", "p-0",classesCss.p_footerLink].join(" ")} id="navlink_empty" ><div className="title">Projet</div></NavLink>
        </div>
        <div className="col-1">
        <NavLink to="/contact" className= {["nav-link", "p-0",classesCss.p_footerLink].join(" ")} id="navlink_empty" ><div className="title">Contact</div></NavLink>
        </div>
        <div className="col-2">
        <a href="https://www.facebook.com/sai.isolation" className="d-block" target="_blank" rel="noreferrer">
             <img src={facebook} alt="logo fb" className="imgFB"/>
         </a>
         <a href="https://www.facebook.com/sai.isolation" className="d-block" target="_blank" rel="noreferrer">
             <img src={linkedin} alt="logo fb" className="imgldn"/>
         </a>
        </div>
        </div> 
        <div className="text-white text-center copyright" id="copyright"><img src={Logo} alt="logo du site" className="logo-f"/>&nbsp;  Sai Isolation - Tout droits réservés</div>
        </footer>  
    );

export default Footer;