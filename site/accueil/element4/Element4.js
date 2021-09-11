import React from 'react';

import filtre from './filtre.png';
import fleche from '../element3/fleche.png';
import { NavLink } from 'react-router-dom';
import './ele4.css';

const Element4 = (props) => (
    <div className="bg4">
        <div className="filtre4">
            <div className="block txt4">
                <p>QHSE</p>
                <h3>
                    Le systéme de management<br />
                    de la qualité est un vecteur de management<br />
                    de satisfaction client.

                </h3>
                <p>En effet SAI s'est engagé dans la mise en place du SMQ pour atteindre sa politique ses objectifs qualité<br />
                    et dans le but d'aboutir à la certification Iso 9001 aussi ISO 14001 et OHSAS 18001
                </p>
                <div className="link"><NavLink to="/quisommesnous">
                    <h4><i class="fas fa-plus">  &nbsp; </i> Plus de détails</h4>  </NavLink>
                    </div>
                </div>

        </div>
    </div>





);

export default Element4;