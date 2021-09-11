import React from 'react';
import etude from '../../Assets/etude.jpg';
import calorifugeage from '../../Assets/calorifugeage.jpg';
import frigorifique from '../../Assets/frigorifique.jpg';
import acoustique from '../../Assets/acoustique.jpg';
import aeraulique from '../../Assets/Aéraulique.jpg';
import { NavLink } from 'react-router-dom';
import './services.css';



    const Ingenierie = (props) => (
        
       

         <>
         <NavLink to="/etude" exact> <div className="scalo">
         <div className="sthree"><i class="fas fa-lightbulb"></i>etude</div>
         <div className="stwo"></div>
         <div className="sone1"></div>
         </div></NavLink>
         
         <NavLink to="/frigorifique" exact> <div className="scalo">
         <div className="sthree"><i class="fas fa-industry"></i>installation</div>
         <div className="stwo"></div>
         <div className="sone2"></div>
         </div></NavLink>

         <NavLink to="/maintenance" exact> <div className="scalo">
         <div className="sthree"><i class="fas fa-cogs"></i> maintenance</div>
         <div className="stwo"></div>
         <div className="sone3"></div>
         </div></NavLink>

         <NavLink to="/controle" exact> <div className="scalo">
         <div className="sthree">  <i class="fas fa-business-time"></i>controle</div>
         <div className="stwo"></div>
         <div className="sone4"></div>
         </div></NavLink>

         

         
         </>

        
        
        
        
    );

export default Ingenierie;