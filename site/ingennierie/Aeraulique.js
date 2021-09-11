import ReactReact, { Component } from 'react';
import aeraulique from '../../Assets/Aéraulique.jpg'

   class Aeraulique extends Component {


    componentDidMount = () =>{
        document.title = "Aeraulique";
    }

       render(){
       return (
        <>
        <img src={aeraulique} width="100%" height="400px"/>
        <p>
        
        SAI conçoit, fabrique dans ces ateliers  et installe des gaines de ventilation, conduits de fumée et coupe-feu  pour les industries et les collectivités
Notre savoir-faire, ainsi nos équipes qualifiées nous ont permis de gagner la confiance des prescripteurs de ce domaine
Aussi nous assurons la fabrication et pose des gaines conformément aux normes, aux plans et cahiers des charges spécifiques des clients
Nous réalisons les Gaines de ventilation généralement en acier galvanisé, aluminium, mais également en inox, voire souple (gaine textile ou flexible). 
Nos gaines de ventilation sont de section rectangulaire, circulaire ou le réseau aéraulique étant constitué de longueurs droites et de pièces singulières telles que coudes, réductions, piquages. 
Elle peut être isolée thermiquement à l'intérieur comme à l'extérieur. 
Certaines gaines sont réalisées entièrement en matériaux isolant compact, comme les gaines en fibair ou panneaux isolés. Ces gaines sont plus légères et permettent une atténuation acoustique supérieure à la gaine métallique 


        </p>
    </>
           );
       }
   }
   export default Aeraulique;
   
     
    

