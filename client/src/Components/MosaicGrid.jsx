
import plate1 from '../assets/Photos/MosaicGrid/plate1.jpg'
import plate2 from '../assets/Photos/MosaicGrid/plate2.jpg'
import plate5 from '../assets/Photos/MosaicGrid/plate5.jpg'
import pomegranate from '../assets/Photos/MosaicGrid/pomegranate.jpg'
import lemon from '../assets/Photos/MosaicGrid/lemon.jpg'
import plate4 from '../assets/Photos/MosaicGrid/plate4.jpg'

import { useNavigate, Link } from 'react-router-dom'

export default function MosaicGrid({}) {





  return (
    <>

  <div className="mgHeader">
    <h1 className="mgLogo">Mosaic Grid</h1>
    <Link to = '/'><h3 className="mgNav">Home</h3></Link>
    </div>

    <div className="mosaicGridContainer"> 
    <div className="mgSquare1 mgSquare"><img src={plate1}/></div>
    <div className="mgSquare2 mgSquare"><img src={plate4}/></div>
    <div className="mgSquare3 mgSquare"><img src={pomegranate}/></div>
    <div className="mgSquare4 mgSquare"><img src={lemon}/></div> 
    <div className="mgSquare5 mgSquare"><img src={plate5}/></div>
    <div className="mgSquare6 mgSquare"><img src={plate2}/></div>
    </div>

    <button className="mgButton">Enter</button>

  
    </>
);

}


