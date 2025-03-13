import { useNavigate, Link } from 'react-router-dom'

export default function MosaicGrid({}) {





  return (
    <>

  <div className="mgHeader">
    <h1 className="mgLogo">Mosaic Grid</h1>
    <Link to = '/'><h3 className="mgNav">Home</h3></Link>
    </div>

    <div className="mosaicGridContainer"> 
    <div className="mgSquare1 mgSquare">1</div>
    <div className="mgSquare2 mgSquare">2</div>
    <div className="mgSquare3 mgSquare">3</div>
    <div className="mgSquare4 mgSquare">4</div> 
    <div className="mgSquare5 mgSquare">5</div>
    <div className="mgSquare6 mgSquare">6</div>
    </div>

  
    </>
);

}


