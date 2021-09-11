import React from 'react';
import iconcal from '../../Assets/iconcali.png'
import calorifugeage from '../../Assets/calorifugeage.jpg';
import frigorifique from '../../Assets/frigorifique.jpg';
import acoustique from '../../Assets/acoustique.jpg';
import aeraulique from '../../Assets/Aéraulique.jpg';
import { NavLink } from 'react-router-dom';
import './ing.css';



    const Ingenierie = (props) => (
        
       

         <>
         <NavLink to="/thermique" exact> <div className="calo">
         <div className="three"><i class="fas fa-thermometer-quarter iconfa"></i>thermique</div>
         
         
         <div className="para-ing">
         
         L’isolation thermique désigne l'ensemble des techniques mises en œuvre pour limiter les transferts de chaleur entre un milieu chaud et un milieu froid. L'isolation thermique est utilisée dans de nombreux domaines incluant notamment ...
         
         </div>
         <div className="plus"><i class="fas fa-plus iconfa "></i> Plus de details</div>
         <div className="two"></div>
         <div className="one1"></div>
         </div></NavLink>
         
         <NavLink to="/frigorifique" exact> <div className="calo">
         <div className="three"><i class="fas fa-snowflake iconfa"></i>frigorifique</div>
         
         
         <div className="para-ing">
         Les tuyauteries d’eau froide doivent être isolées pour éviter la condensation et la formation de givre ou de glace...
         </div>
         <div className="plus"><i class="fas fa-plus iconfa "></i> Plus de details</div>
         <div className="two"></div>
         <div className="one2"></div>
         </div></NavLink>

         <NavLink to="/calorifugeage" exact> <div className="calo">
         <div className="three">calorifugeage
         </div>
         <div className="para-ing">
         Le calorifugeage est l'isolation thermique (quelquefois acoustique) des équipements stockant ou transportant des fluides thermiques chauds ou froids...
         </div>
         <div className="plus"><i class="fas fa-plus iconfa "></i> Plus de details</div>
         <div className="two"></div>
         <div className="one3"></div>
         </div></NavLink>

         <NavLink to="/aeraulique" exact> <div className="calo">
         <div className="three">aeraulique
         
         </div>
         <div className="para-ing">
         SAI conçoit, fabrique dans ces ateliers  et installe des gaines de ventilation, conduits de fumée et coupe-feu  pour les industries et les collectivités
Notre savoir-faire, ainsi nos équipes qualifiées nous ont permis de gagner la confiance des prescripteurs de ce domaine...
</div>

<div className="plus"><i class="fas fa-plus iconfa "></i> Plus de details</div>
         <div className="two"></div>
         <div className="one4"></div>
         </div></NavLink>

         <NavLink to="/acoustique" exact> <div className="calo">
         <div className="three">acoustique</div>
         <div className="para-ing">
         Le calorifugeage est l'isolation thermique (quelquefois acoustique) des équipements stockant ou transportant des fluides thermiques chauds ou froids.</div>
         <div className="plus"><i class="fas fa-plus iconfa "></i> Plus de details</div>
         
         
         
         <div className="two"></div>
         <div className="one5"></div>
         </div></NavLink>

         
         </>

        
        
        
        
    );

export default Ingenierie;