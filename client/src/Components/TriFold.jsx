import {Link} from 'react-router-dom'
import panel1 from '../assets/Photos/TriFold/panel1.jpg'
import panel2 from '../assets/Photos/TriFold/panel2.jpg'
import panel3 from '../assets/Photos/TriFold/panel3.jpg'
import cph1 from '../assets/Photos/TriFold/cph1.jpg'
import cph2 from '../assets/Photos/TriFold/cph2.jpg'
import cph3 from '../assets/Photos/TriFold/cph3.jpg'
import sn1 from '../assets/Photos/TriFold/sn1.jpg'
import sn2 from '../assets/Photos/TriFold/sn2.jpg'
import sn3 from '../assets/Photos/TriFold/sn3.jpg'
import lis1 from '../assets/Photos/TriFold/lis1.jpg'
import lis2 from '../assets/Photos/TriFold/lis2.jpg'
import lis3 from '../assets/Photos/TriFold/lis3.jpg'

export default function TriFold({}) {





  return (
    <>

    <div className="tfHeader">
    <h1 className="tfLogo">Tri-Fold</h1>
    <Link to = '/'><h3 className="tfNav">Home</h3></Link>
    </div>

    <div className="tfContainer"> 
    <div className="tfSquare1 tfSquare">
      <img src={panel1}/>
      {/* <img className="bottomImage1" src={lis1}/>
      <img className="bottomImage2" src={lis2}/>
      <img className="bottomImage3" src={lis3}/> */}
      </div> 
    <div className="tfSquare2 tfSquare">
      <img src={panel2}/>
      {/* <img className="bottomImage4" src={sn1}/>
      <img className="bottomImage5" src={sn2}/>
      <img className="bottomImage6" src={sn3}/> */}
      </div>
    <div className="tfSquare3 tfSquare">
      <img src={panel3}/>
      {/* <img className="bottomImage7" src={cph1}/>
      <img className="bottomImage8" src={cph2}/>
      <img className="bottomImage9" src={cph3}/> */}
      </div>
    </div>
    </>
);

}

