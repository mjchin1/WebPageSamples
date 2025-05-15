import { Link } from 'react-router-dom'
import tableSetting from '../assets/Photos/MosaicGrid/tableSetting.jpg'
import pomegranate from '../assets/Photos/MosaicGrid/pomegranate.jpg'

export default function MosaicGridP2() {

  return (
    <>

    <div className="mgHeaderP2">
    <h1 className="mgLogo">Mosaic Grid</h1>
    <div className="mgNav"> 
    <Link to = '/'><h3 className="mgNavLink">Food</h3></Link>
    <Link to = '/'><h3 className="mgNavLink">Gatherings</h3></Link>
    <Link to = '/'><h3 className="mgNavLink">About Us</h3></Link>
    <Link to = '/'><h3 className="mgNavLink">Home</h3></Link>
    </div>
    </div>

    <div className="mgp2Container">
    <div className="mgp2Banner"> <h1 className="mgp2BannerText">Food</h1>
    <img src={tableSetting}></img>
    </div>  <br/>

    <div className="mgp2ContentBlock1">
    <div className= "mg2Block"></div>
    <div className= "mg2Block"><img src={pomegranate}/></div>
    </div>
      
    </div>
    </>
  )
}