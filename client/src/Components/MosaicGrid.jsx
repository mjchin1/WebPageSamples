
import photo1 from '../assets/Photos/MosaicGrid/photo1.jpg'
import photo2 from '../assets/Photos/MosaicGrid/photo2.jpg'
import photo3 from '../assets/Photos/MosaicGrid/photo3.jpg'
import photo4 from '../assets/Photos/MosaicGrid/photo4.jpg'
import photo5 from '../assets/Photos/MosaicGrid/photo5.jpg'
import photo6 from '../assets/Photos/MosaicGrid/photo6.jpg'

import { useNavigate, Link } from 'react-router-dom'

export default function MosaicGrid({}) {





  return (
    <>

  <div className="mgHeader">
    <h1 className="mgLogo">Mosaic Grid</h1>
    <Link to = '/'><h3 className="mgNav">Home</h3></Link>
    </div>

    <div className="mosaicGridContainer"> 
    <div className="mgSquare1 mgSquare"><img src={photo1}/></div>
    <div className="mgSquare2 mgSquare"><img src={photo2}/></div>
    <div className="mgSquare3 mgSquare"><img src={photo3}/></div>
    <div className="mgSquare4 mgSquare"><img src={photo4}/></div> 
    <div className="mgSquare5 mgSquare"><img src={photo5}/></div>
    <div className="mgSquare6 mgSquare"><img src={photo6}/></div>
    </div>

    <button className="mgButton">Enter</button>

  
    </>
);

}


