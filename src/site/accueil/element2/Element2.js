import React from 'react';
import './cssele2.css';
import { NavLink } from 'react-router-dom';
import isolation from './isolation.png'



const ing1ment2 = (props) => (
    <>

        <div className="row root">
            <div className="col-6 orange">
              <div className="block txt-org">
                  <h3>Ingennierie</h3>
                  <NavLink to="/thermique"><p><i class="fas fa-check"></i>&nbsp;Thermique</p></NavLink>
                  <NavLink to="/frigorifique"><p><i class="fas fa-check"></i>&nbsp;Frigorifique</p></NavLink>
                  <NavLink to="/calorifugeage"><p><i class="fas fa-check"></i>&nbsp;Calorifugeage</p></NavLink>
                  <NavLink to="/aeraulique"><p><i class="fas fa-check"></i>&nbsp;Aeraulique</p></NavLink>
                  <NavLink to="/acoustique"><p><i class="fas fa-check"></i>&nbsp;Acoustique</p></NavLink>
              </div>

            </div>
            <div className="col-6 bgimage">
            
                 

                  
                <div className="filtre">
                <div className="block isolation">
                   <h1>isolation</h1>  
                  </div>
                </div>
              </div>
            </div> 
    


    </>
);

export default ing1ment2;