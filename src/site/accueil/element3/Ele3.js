import React from 'react';
import './css.css';
import fond from './fond.png';
import { NavLink } from 'react-router-dom';


const Ele3 = (props) => (
    <>
   
        <div class="row globe">
        
        
       
            <div class="col-6 block">
                <div class="titreorg"><h6>SERVICES ET ACTIVITES D'ISOLATION
                </h6></div> 

                <div class="slogan2"> <h2>L'une des plus importantes <br />
                    sociétés de calorifugeage en Tunisie
                </h2></div>

                
                
                    <div class="para" id="txt">
                        <p>
                            Fondée en 2009 en tant que société de
                            services,nous sommes devenus un important
                            spécialiste dans le domaine du calorifugeage,
                            isolation frigorifique et la fabrication
                            et pose de gains de ventilation.
                        </p>
                        <p className="special"> 
                            Nous activités comprenant plusieurs
                            spécialités et prestations.Notre but est
                            d'executer notre travail de maniere
                            responsables dans les régles de l'art en
                            respectant la sécurité et l'environnement.
                        </p>
                    </div>


                
                <div className="details"><NavLink to="/quisommesnous"><div className="row" id="details"><h4>Plus de détails</h4></div></NavLink> </div>
            </div>
            <div className="block col-6 list">
                <ul>
                    <li><h3>Etude</h3></li>
                    <li ><h3>Installation</h3></li>
                    <li ><h3>Maintenance</h3></li>
                    <li ><h3>Controle</h3></li>

                </ul>
            </div>


        </div>

    </>


);

export default Ele3

