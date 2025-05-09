import pebbles from '../assets/Photos/Slide/pebbles.jpg'
import steps from '../assets/Photos/Slide/steps.jpg'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'


export default function Slide() {

  const navigate = useNavigate()

  function navToHome() {
    navigate("/")
    
  }





  return (
    <>
    <div className="sldBackgroundPic"><img src={steps}/></div> <br/>
    <div className="sldNav">
    {/* <button className="sldNavButton" onClick={navToHome}>Home</button>
    <button className="sldNavButton" onClick={navToHome}>Home</button>
    <button className="sldNavButton" onClick={navToHome}>Home</button> */}
    <Link to = '/'><h3 className="sldNavLink">Shop</h3></Link>
    <Link to = '/'><h3 className="sldNavLink">About</h3></Link>
    <Link to = '/'><h3 className="sldNavLink">Home</h3></Link>
    </div>
    
    <div className="sldPageContent"> 
    <h1 className="sldHeader">Slide</h1>
    </div>
    <div className="sldContentBlock1">
      <div className="sldcb1Content"></div>
      <div className="sldcb1Content"></div>
      <div className="sldcb1Content"></div>
    </div> <br/> <br/>
    <div className="sldContentBlock2">
      <div className="sldcb2Content"><p className="sldCBText">Bring the world to your living space.</p></div>
      <div className="sldcb2Content"></div>
    </div> <br/> <br/>

    <div className="footer sldFooter"> © 2025 </div>
   
    </>
);

}


