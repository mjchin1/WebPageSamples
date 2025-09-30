import stillLife3 from '../assets/Photos/BigBook/stillLife3.jpg'
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
    <h1 className="bbkLogo">Emme Brooks</h1>
    <Link to = '/'><h3 className="bbkNav">Home</h3></Link>
    </div>


    <div className="bbkContainer"> 
      <div className="bbkSquare1">
        <div className="bbkTopText">
        <Link to = '/bbkp2'><span className="bbkHomeLink">Portfolio.</span></Link>
        <Link to = '/bbkp2'><span className="bbkHomeLink">About.</span></Link>
        <Link to = '/bbkp2'><span className="bbkHomeLink">Contact.</span></Link>
        {/* <div className="bbkHomeLink">Effortlessly Iconic.</div> */}
        </div>
      </div> 
    <div className="bbkSquare2 bbkTopPhoto"><img src={stillLife3}/></div>
    {/* <div className="bbkDivider">sample text</div> */}
    <div className="bbkTopMidPhoto"><p className="bbkContactHeader"> Effortlessly Iconic.</p> <img src={vestibule}/></div>
  
    <div className="bbkBottomPhoto"><p className="bbkContactHeader">Contact</p> <img src={greenCouch}/></div>
    {/* <div className="bbkSquare3"> A minimal canvas for your masterpieces. </div> <br/> 
    <div className="bbkSquare4 bkltSquare"><img src={cups}/></div>  */}

    </div>
    </>
);

}

