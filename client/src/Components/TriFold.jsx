import steps from '../assets/Photos/TriFold/steps.jpg'
import fabric from '../assets/Photos/TriFold/fabric.jpg'
import pebbles from '../assets/Photos/TriFold/pebbles.jpg'
import panel1 from '../assets/Photos/TriFold/panel1.jpg'
import panel2 from '../assets/Photos/TriFold/panel2.jpg'
import panel3 from '../assets/Photos/TriFold/panel3.jpg'

export default function TriFold({}) {





  return (
    <>

    <h1>Trifold</h1>
    <div className="tfContainer"> 
    <div className="tfSquare1 tfSquare"><img src={panel1}/></div> 
    <div className="tfSquare2 tfSquare"><img src={panel2}/></div>
    <div className="tfSquare3 tfSquare"><img src={panel3}/></div>
    </div>
    </>
);

}

