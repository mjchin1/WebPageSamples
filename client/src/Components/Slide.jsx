import steps from '../assets/Photos/Slide/steps.jpg'
import greenTile from '../assets/Photos/Slide/greenTile.jpg'
import blueTile2 from '../assets/Photos/Slide/blueTile2.jpg'
import whiteTile from '../assets/Photos/Slide/whiteTile.jpg'
import pattern1 from '../assets/Photos/Slide/pattern1.jpg'
import pattern2 from '../assets/Photos/Slide/pattern2.jpg'
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
    <Link to = '/sldp2'><h3 className="sldNavLink">Shop</h3></Link>
    <Link to = '/sldp2'><h3 className="sldNavLink">About</h3></Link>
    <Link to = '/'><h3 className="sldNavLink">Home</h3></Link>
    </div>
    
    <div className="sldPageContent"> 
      <div className ="sldHomeText">
        <h1 className="sldHeader">Slide</h1>
        <span className= "sldSubHeader">Tile Co.</span>
      </div>
    </div> <br/><br/><br/>

    <div className="sldContentBlock1">
      <div>
      <img src={blueTile2}/>
        </div>
      <div className="sldCBText">
        <span className="sldTextBoxHeader">Bring the world to your living space.</span>
        <span>Our vintage tiles are sourced from the most beautiful places on earth.</span></div>
    </div> <br/> <br/>

    <div>
    <h1 className="sldcb2Header">Featured Tiles</h1> <br/> <br/>
    <div className="sldContentBlock2">
      <div className="sldcb1Content"> <img src={greenTile}/><br/><br/><Link to = '/sldp2'> <span className="sldLinkText">Green Herringbone</span> </Link></div>
      <div className="sldcb1Content"><img src={whiteTile}/><br/><br/><Link to = '/sldp2'> <span className="sldLinkText"> White Diamonds</span> </Link></div>
      <div className="sldcb1Content"><img src={pattern2}/><br/><br/><Link to = '/sldp2'> <span className="sldLinkText"> Multicolor Floral</span> </Link></div>
    </div> 
    <button className="sldHomePageButton">Visit the Shop</button>
    </div>

    <br/> <br/>
  

    <div className="footer sldFooter"> © 2025 </div>
   
    </>
);

}


