import steps from '../assets/Photos/TriFold/steps.jpg'
import fabric from '../assets/Photos/TriFold/fabric.jpg'
import pebbles from '../assets/Photos/TriFold/pebbles.jpg'
import plant1 from '../assets/Photos/TriFold/plant1.jpg'
import plant2 from '../assets/Photos/TriFold/plant2.jpg'
import plant3 from '../assets/Photos/TriFold/plant3.jpg'

export default function TriFold2({}) {





  return (
    <>

    <h1>Trifold 2</h1>
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
       <p className="tf2EnterLink">Enter</p>
    </div>
    </>
);

}

