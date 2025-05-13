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
    <div className="sldNav">
    <Link to = '/sld'><h3 className="sldNavLink black">Shop</h3></Link>
    <Link to = '/sld'><h3 className="sldNavLink black">About</h3></Link>
    <Link to = '/sld'><h3 className="sldNavLink black">Home</h3></Link>
    </div>
    
    <div className="sldContentBlock1">
      <div className="sldcb1Content"><img src={greenTile}/></div>
      <div className="sldcb1Content"><img src={whiteTile}/></div>
      <div className="sldcb1Content"><img src={blueTile}/></div>
    </div>
    

    <div className="footer sldFooter"> © 2025 </div>
   
    </>
);

}


