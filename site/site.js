import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

//pages
import Services from './services/Services';
import Qhse from './QHSE/Qhse';
import Contact from './contact/Contact';
import Ingenierie from './ingennierie/Ingennierie';
import Accueil from './accueil/Accueil';
import Projet from './projet/Projet';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import Error from '../components/Error';
import Etude from './services/etude';
import Thermique from './ingennierie/thermique';
import Calorifugeage from './ingennierie/Calorifugeage';
import Acoustique from './ingennierie/Acoustique';
import Frigorifique from './ingennierie/Frigorifique';
import Aeraulique from './ingennierie/Aeraulique';
import Ingennierie from './ingennierie/Ingennierie';
import Quisommesnous from './Apropos/Quisommesnous';
import Expertise from './Apropos/Expertise';
import Domainedapplication from './Apropos/Domainedapplication';




class Site extends Component {
    render() {
        return (
            <>
            <div className="site">
            <Menu />
                <Switch>
                    <Route path='/' exact render={() => <Accueil/>} /> 
                    <Route path='/contact' exact render={() => <Contact/>} />
                    <Route path='/services' exact render={() => <Services/>} />
                    <Route path='/qhse' exact render={() => <Qhse/>} />
                    <Route path='/ingennierie' exact render={() => <Ingenierie/>} />
                    <Route path='/projet' exact render={() => <Projet/>} />
                    <Route path="/mentionLegales" exact render={() => <h1>mention legales</h1>} />
                    <Route path="/" exact render={() => <Accueil />} />
                    <Route path="/etude" exact render={() => <Etude />} />
                    <Route path="/thermique" exact render={() => <Thermique />} />
                    <Route path="/calorifugeage" exact render={() => <Calorifugeage />} />
                    <Route path="/acoustique" exact render={() => <Acoustique />} />
                    <Route path="/frigorifique" exact render={() => <Frigorifique />} />
                    <Route path="/aeraulique" exact render={() => <Aeraulique />} />
                    <Route path="/ingennierie" exact render={() => <Ingennierie />} />
                    <Route path="/quisommesnous" exact render={() => <Quisommesnous />} />
                    <Route path="/expertise" exact render={() => <Expertise/>} />
                    <Route path="/domainedapplication" exact render={() => <Domainedapplication/>} />


                    
                    <Route render={()=> <Error type="404">La page n'existe pas</Error>} />
                </Switch>
                <div className="minsite"></div>
            </div>
            
            <Footer/>
            
         
                
            </>
        );
    }
}

export default Site