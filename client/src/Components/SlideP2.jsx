import greenTile from '../assets/Photos/Slide/greenTile.jpg'
import whiteTile from '../assets/Photos/Slide/whiteTile.jpg'
import blueTile from '../assets/Photos/Slide/blueTile.jpg'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'


export default function Slide() {

  const navigate = useNavigate()

  function navToHome() {
    navigate("/")
    
  }





  return (
    <>
    <div className="sldContainer">
    <div className="sldNavP2">
    <Link to = '/sld'><h3 className="sldNavLink black">Shop</h3></Link>
    <Link to = '/sld'><h3 className="sldNavLink black">About</h3></Link>
    <Link to = '/sld'><h3 className="sldNavLink black">Home</h3></Link>
    </div> 
    
    <div className="sldShopContainer">
      <div className="shopProduct"><img src={greenTile}/></div>
      <div className="shopProduct"><img src={whiteTile}/></div>
      <div className="shopProduct"><img src={blueTile}/></div>
    </div>
    

    <div className="footer sldFooter"> © 2025 </div>
   
    </div>
    </>
);

}


