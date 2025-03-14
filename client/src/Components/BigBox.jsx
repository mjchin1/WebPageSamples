import lighthouse from '../assets/Photos/BigBox/lighthouse.jpg'
import PinkBuilding from '../assets/Photos/BigBox/PinkBuilding.jpg'
import GloomyBuilding from '../assets/Photos/BigBox/GloomyBuilding.jpg'
import staircase from '../assets/Photos/BigBox/staircase.jpg'
import pool from '../assets/Photos/BigBox/pool.jpg'
import cph from '../assets/Photos/BigBox/cph.jpg'
import park from '../assets/Photos/BigBox/park.jpg'
import swans from '../assets/Photos/BigBox/swans.jpg'
import sand1 from '../assets/Photos/BigBox/sand1.jpg'
import sand2 from '../assets/Photos/BigBox/sand2.jpg'
import sand3 from '../assets/Photos/BigBox/sand3.jpg'
import sintra from '../assets/Photos/BigBox/sintra.jpg'
import lisbon from '../assets/Photos/BigBox/lisbon.jpg'
import bluebuilding from '../assets/Photos/BigBox/bluebuilding.jpg'
import stairs from '../assets/Photos/BigBox/stairs.jpg'
import frog from '../assets/Photos/BigBox/frog.jpg'
import sintra2 from '../assets/Photos/BigBox/sintra2.jpg'
import cactus from '../assets/Photos/BigBox/cactus.jpg'
import {Link} from 'react-router-dom';

export default function BigBox({}) {





  return (
    <>
    <h1 className="bbHeading">Big Box</h1>
    
    <Link to = '/'><h3 className="bbNav">Home</h3></Link>
    <div className="bbContainer"> 
    <div className="bbSquare1"><img className="bbImage" src={lighthouse}/></div>
    <div className="bbTextBlock">Get in touch to learn about our services. </div>
    <div className="bbSquare2 bbsquare"><img src={frog}/> <button className="bbButton"> Shop </button></div>
    <div className="bbSquare3 bbsquare"><img src={swans}/><button className="bbButton"> About </button></div> 
   </div>
   {/* <div className="centralTextDiv"> <p className="centralText">Big spaces for your big ideas.</p></div> */}
  
   <div className="bbContainer">
    <div className="bbSquare4 bbsquare"><img src={park}/> <button className="bbButton"> Gallery </button> </div> 
    <div className="bbSquare5 bbsquare"><img src={cactus}/> <button className="bbButton"> Contact </button> </div>
    <div className="bbTextBlock">Bringing beauty to the world one photo at a time. </div>
    <div className="bbSquare8"><img src={sand1}/></div>
    </div>
    <div className="footer bbFooter">© 2025</div>
    </>
);

}


