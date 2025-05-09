import stillLife from '../assets/Photos/BigBook/stillLife.jpg'
import vestibule from '../assets/Photos/BigBook/vestibule.jpg'
import stool1 from '../assets/Photos/BigBook/stool1.jpg'
import greenCouch from '../assets/Photos/BigBook/greenCouch.jpg'
import mountains from '../assets/Photos/BigBook/mountains.jpg'
import sphereLamp from '../assets/Photos/BigBook/sphereLamp.jpg'
import {Link} from 'react-router-dom'

export default function BigBook({}) {





  return (
    <>

    <div className="bbkHeader">
    <h1 className="bbkLogo">Big Book</h1>
    <Link to = '/'><h3 className="bbkNav">Home</h3></Link>
    </div>

    <div className="bbkContainer"> 
        <div className="bbkNav">
        <Link to = '/'><span>Objects</span></Link>
        <Link to = '/'><span>Lighting</span></Link>
        <Link to = '/'><span>Furniture</span></Link>
        </div>
    </div> 
  
    </>
);

}

