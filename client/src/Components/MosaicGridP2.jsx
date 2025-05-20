import { Link } from 'react-router-dom'
import tableSetting3 from '../assets/Photos/MosaicGrid/tableSetting3.jpg'
import plate5 from '../assets/Photos/MosaicGrid/plate5.jpg'
import plate8 from '../assets/Photos/MosaicGrid/plate8.jpg'
import tableSetting5 from '../assets/Photos/MosaicGrid/tableSetting5.jpg'
import tableSetting11 from '../assets/Photos/MosaicGrid/tableSetting11.jpg'
import tableSetting7 from '../assets/Photos/MosaicGrid/tableSetting7.jpg'
import oranges from '../assets/Photos/MosaicGrid/oranges.jpg'
import tomatoes from '../assets/Photos/MosaicGrid/tomatoes.jpg'
import carrots from '../assets/Photos/MosaicGrid/carrots.jpg'
import tableSetting from '../assets/Photos/MosaicGrid/tableSetting.jpg'


export default function MosaicGridP2() {

  return (
    <>

    <div className="mgHeaderP2">
    <h1 className="mgLogo">Mosaic Grid</h1>
    <div className="mgNav"> 
    <Link to = '/mg'><h3 className="mgNavLink">Food</h3></Link>
    <Link to = '/mg'><h3 className="mgNavLink">Gatherings</h3></Link>
    <Link to = '/mg'><h3 className="mgNavLink">About Us</h3></Link>
    <Link to = '/mg'><h3 className="mgNavLink">Home</h3></Link>
    </div>
    </div>

    <div className="mgp2Container">
    <div className="mgp2Banner"> <h1 className="mgp2BannerText">Food</h1>
    <img src={tableSetting}></img>
    </div>  <br/>

    <div className="mgp2ContentBlock1">
    <div className= "mg2Block"><h2>Our food is the best.</h2></div>
    <div className= "mg2Block"><img src={plate5}/></div>
   
    </div>
    
    <div className="mgp2ContentBlock1">
    <div className= "mg2Block"> <img src={carrots}/></div>
    <div className= "mg2Block"><h2>Our food is the best.</h2></div>
    </div>
    
    
    <h1>Gallery</h1>
    <div className="galleryContainer"></div>
    <div className="mgp2Banner"> <h1 className="mgp2BannerText">Gatherings</h1>
    <img src={tableSetting5}></img>
    </div>  <br/>

    <div className="mgp2ContentBlock1">
    <div className= "mg2Block"><h2>We create experiences that you and your loved ones will remember forever.</h2></div>
    <div className= "mg2Block"><img src={tableSetting11}/></div>
    </div>
    <h1>Gallery</h1>
    <div className="galleryContainer"></div>
    <div className="mgp2Banner"> <h1 className="mgp2BannerText">About Us</h1>
    <img src={oranges}></img>
    </div>  <br/>

    <div className="mgp2ContentBlock1">
    <div className= "mg2Block"><h2>We put a ton of heart into everything we do.</h2></div>
    <div className= "mg2Block"><img src={tomatoes}/></div>
    </div>
    <h1>Gallery</h1>
    <div className="galleryContainer"></div>
   
   
    </div>

    
    </>
  )
}