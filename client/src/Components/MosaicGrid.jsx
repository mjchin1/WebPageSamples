
import tableSetting from '../assets/Photos/MosaicGrid/tableSetting.jpg'
import plate2 from '../assets/Photos/MosaicGrid/plate2.jpg'
import picnic from '../assets/Photos/MosaicGrid/picnic.jpg'
import pomegranate from '../assets/Photos/MosaicGrid/pomegranate.jpg'
import tableSetting4 from '../assets/Photos/MosaicGrid/tableSetting4.jpg'
import picnic5 from '../assets/Photos/MosaicGrid/picnic5.jpg'

import { useNavigate, Link } from 'react-router-dom'

export default function MosaicGrid({}) {

  const navigate = useNavigate()





  return (
    <>

  <div className="mgHeader">
    <h1 className="mgLogo">Mosaic Grid</h1>
    <div className="mgNav"> 
    <Link to = '/mgp2'><h3 className="mgNavLink">Food</h3></Link>
    <Link to = '/mgp2'><h3 className="mgNavLink">Gatherings</h3></Link>
    <Link to = '/mgp2'><h3 className="mgNavLink">About Us</h3></Link>
    <Link to = '/'><h3 className="mgNavLink">Home</h3></Link>
    </div>
    </div>

    <div className="mosaicGridContainer"> 
    <div className="mgSquare1 mgSquare"><img src={tableSetting}/></div>
    <div className="mgSquare2 mgSquare"><img src={picnic5}/></div>
    <div className="mgSquare3 mgSquare"><img src={pomegranate}/></div>
    <div className="mgSquare4 mgSquare"><img src={picnic}/></div> 
    <div className="mgSquare5 mgSquare"><img src={tableSetting4}/></div>
    <div className="mgSquare6 mgSquare"><img src={plate2}/></div>
    </div>

    <button className="mgButton" onClick={()=> { navigate("/mgp2")}}>Enter</button>

  
    </>
);

}


