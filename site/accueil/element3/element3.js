import React from 'react';
import '../element2/Element2.css';
import fond from './fond.png';
import SAI from './SAI.png';
import decosai from './decosai.png';
import fleche from './fleche.png';
import { NavLink } from 'react-router-dom';

const Element3 = (props) => (
    <div className="" id="ele3">
        <img src={fond} className="fond" />
        <img src={SAI} className="SAI" />
        <img src={decosai} className="decosai" />
        <NavLink to="/quisommesnous"><div className="row" id="detail"><h4>Plus de détails</h4>&nbsp;<img src={fleche} className="fleche2" /></div></NavLink>
        <div className="services">
            <h6>SERVICES ET ACTIVITES D'ISOLATION
            </h6>
        </div>
        <div className="slogan">
            <h2>L'une des plus importantes <br />
                sociétés de calorifugeage en Tunisie
            </h2>
        </div>
        <div className="présentation">
            <>Fondée en 2009 en tant que société de<br />
                services,nous sommes devenus un important<br />
                spécialiste dans le domaine du calorifugeage,<br />
                isolation frigorifique et la fabrication<br />
                et pose de gains de ventilation.
            </>
        </div>
        <div className="présentation2">
            <>Nous activités comprenant plusieurs<br />
                spécialités et prestations.Notre but est <br />
                d'executer notre travail de maniere <br />
                responsables dans les régles de l'art en <br />
                respectant la sécurité et l'environnement. <br />

            </>
        </div>
        <ul className="ul">
            <li id="li2"><h3>Etude</h3></li>
            <li id="li2"><h3>Installation</h3></li>
            <li id="li2"><h3>Maintenance</h3></li>
            <li id="li2"><h3>Controle</h3></li>

        </ul>

    </div>
);

export default Element3;