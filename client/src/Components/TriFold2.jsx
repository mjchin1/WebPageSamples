import {Link} from 'react-router-dom'
import steps from '../assets/Photos/TriFold/steps.jpg'
import fabric from '../assets/Photos/TriFold/fabric.jpg'
import pebbles from '../assets/Photos/TriFold/pebbles.jpg'

export default function TriFold2({}) {





  return (
    <>

    <div className="tf2Header">
    <h1 className="tf2Logo">Tri-Fold2</h1>
    <Link to = '/'><h3 className="tf2Nav">Home</h3></Link>
    </div>

    <div className="tf2Container"> 
      <div className="tf2Square1 tf2Square">
        <img className="image1" src={steps}/>
      </div> 
      <div className="tf2Square2 tf2Square">
        <img src={pebbles}/>
      </div>
      <div className="tf2Square3 tf2Square">
        <img src={fabric}/>
       </div>
       <div className="tf2Outline"></div>
       <p className="tf2EnterLink">Enter</p>
       <div className="tf2Outline"></div>
    </div>
    </>
);

}

