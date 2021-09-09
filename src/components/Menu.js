import React from 'react';
import Logo from '../../src/Assets/logo.png';
import rect from '../../src/Assets/rect_menu.jpg';
import tel from '../../src/Assets/tel.png';
import { NavLink } from 'react-router-dom';
import './menu.css'
    const Menu = (props) => (
        
<nav className="navbar navbar-expand-lg navbar-light bg-light">
<div className="container-fluid">
<img src={rect} alt="logo du site"  className="rect"/>
  <NavLink className="navbar-brand" to="/" exact>
  <img src={Logo} alt="logo du site" className="logo"/></NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
    <ul className="navbar-nav">
    <li className="nav-item dropdown" id="apropos">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          A Propos
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
       
          <NavLink className="dropdown-item" to="/quisommesnous" exact>Qui Somme nous</NavLink>
          <NavLink className="dropdown-item" to="/expertise" exact>Expertise</NavLink>
          <NavLink className="dropdown-item" to="/domainedapplication" exact>Domaine d'application</NavLink>
          <NavLink className="dropdown-item" to="/qualite" exact>Qualité</NavLink>
        </div>
      </li>
      <li className="nav-item dropdown" id="services">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Services
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <NavLink className="dropdown-item" to="/etude" exact>Etude</NavLink>
          <NavLink className="dropdown-item" to="/installation" exact>Installation</NavLink>
          <NavLink className="dropdown-item" to="/maintenance" exact>Maintenance</NavLink>
          <NavLink className="dropdown-item" to="/controle" exact>Controle</NavLink>
        </div>
      </li>
      <li className="nav-item dropdown" id="Ingennierie" >
        <NavLink className="nav-link dropdown-toggle" to="/ingennierie" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Ingennierie
        </NavLink>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <NavLink className="dropdown-item" to="/thermique" exact>Thermique</NavLink>
          <NavLink className="dropdown-item" to="/frigorifique" exact>Frigorifique</NavLink>
          <NavLink className="dropdown-item" to="/calorifugeage" exact>Calorifugeage</NavLink>
          <NavLink className="dropdown-item" to="/aeraulique" exact>Aeraulique</NavLink>
          <NavLink className="dropdown-item" to="/acoustique" exact>Acoustique</NavLink>
        </div>
      </li>
      <li className="nav-item dropdown" id="QHSE">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          QHSE
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
        <NavLink className="dropdown-item" to="/qualite" exact>Qualite</NavLink>
          <NavLink className="dropdown-item" to="/hse" exact>HSE</NavLink>
         
        </div>
      </li>
      <li className="nav-item" id="projet">
        <NavLink to="/projet" exact className="nav-link" exact>Projet</NavLink>
      </li>
      
      <li className="nav-item" id="contact">
      <NavLink to="/contact" exact className="nav-link" exact>Contact</NavLink>
      </li>
      
    </ul>
  </div>
  </div> 
</nav>
    );

export default Menu;