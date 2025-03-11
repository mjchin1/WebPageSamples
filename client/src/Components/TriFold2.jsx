import steps from '../assets/Photos/TriFold/steps.jpg'
import fabric from '../assets/Photos/TriFold/fabric.jpg'
import pebbles from '../assets/Photos/TriFold/pebbles.jpg'

export default function TriFold2({}) {





  return (
    <>

    <h1>Trifold</h1>
    <div className="tfContainer"> 
    <div className="tfSquare1 tfSquare"><img src={steps}/></div> 
    <div className="tfSquare2 tfSquare"><img src={pebbles}/></div>
    <div className="tfSquare3 tfSquare"><img src={fabric}/></div>
    </div>
    </>
);

}

