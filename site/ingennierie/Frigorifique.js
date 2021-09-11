
import ReactReact, { Component } from 'react';
import calorifugeage from '../../Assets/frigorifique.jpg'

   class Frigorifique extends Component {


    componentDidMount = () =>{
        document.title = "Frigorifique";
    }

       render(){
       return (
        <>
        <img src={calorifugeage} width="100%" height="400px"/>
    </>
           );
       }
   }
   export default Frigorifique;