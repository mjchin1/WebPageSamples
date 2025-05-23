import {Link} from 'react-router-dom'
import hand2 from '../assets/Photos/Trifold2/hand2.jpg'
import earring from '../assets/Photos/Trifold2/earring.jpg'
import necklace from '../assets/Photos/Trifold2/necklace.jpg'

export default function TriFold2({}) {





  return (
    <>

    <div className="tf2Header">
    <h1 className="tf2Logo">Tri-Fold2</h1>
    <div className="tf2Nav">
    <Link to = '/'><h3 className="tf2Nav">Shop</h3></Link>
    <Link to = '/'><h3 className="tf2Nav">About</h3></Link>
    <Link to = '/'><h3 className="tf2Nav">Gallery</h3></Link>
    <Link to = '/'><h3 className="tf2Nav">Home</h3></Link>
    </div>
    </div>

    <div className="tf2Container"> 
      <div className="tf2Square1 tf2Square">
        <img className="image1" src={necklace}/>
      </div> 
      <div className="tf2Square2 tf2Square">
        <img src={hand2}/>
      </div>
      <div className="tf2Square3 tf2Square">
        <img src={earring}/>
       </div>
      <div className= "tf2HomePageContent">
       <span className= "tf2HomePageText">Simple. Timeless. Inspiring.</span> <br/>
       <button className="tf2EnterLink">Enter</button>
       </div>
    </div>
    </>
);

}

