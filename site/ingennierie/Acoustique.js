import React, { Component } from 'react';
import acoustique from '../../Assets/acoustique.jpg'

class Acoustique extends Component {

    componentDidMount = () =>{
        document.title = "Acoustique";
    }

    render(){
    return (
        <>
        <img src={acoustique} width="100%" height="400px"/>
        <p>Le bruit fait partie des principales nuisances du monde contemporain. De nombreuses règlementations visent à limiter le niveau sonore, que ce soit dans les ERP, sur les lieux de travail ou encore dans les bâtiments à usage d’habitation. 
Pour être efficace, l’isolation acoustique doit s’adapter aux différents bruits produits et aux caractéristiques de chaque bâtiment et des activités qu’il abrite.

Nous assurons l’isolation acoustique pour : 
- l’industrie
L’environnement industriel est souvent générateur de bruit : machines outil, chaines de production, ventilation, sirènes et alarmes sont bruyantes. 
L’isolation acoustique dans l’industrie vise aussi bien à amoindrir les bruits de l’intérieur vers l’extérieur, que ceux se transmettant entre les différentes zones intérieures. Elle est réalisée au moyen d’isolants classiques : laine de roche, habillage ou panneau acoustique, isolant sous chape en caoutchouc, isolant en dalles, mousse de polyuréthane etc.
 
- pour les voiries
Les bruits de trafic routier ou ferroviaires causent des nuisances sonores aux riverains. La mise en place de murs anti bruit permet de les limiter à condition d’avoir une hauteur suffisante. 
Ils peuvent être en divers matériaux et agrémentés de végétation pour une esthétique plus agréable.
 
- l’habitat et les ERP
L’isolation acoustique de l’habitat concerne aussi bien les bruits extérieurs que les bruits intérieurs qui peuvent être aériens, d’impact ou d’équipement. Double vitrage, isolants et faux plafond permettront d’y remédier.
</p>
        </>
        );
    }
}
export default Acoustique;
