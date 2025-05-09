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
      <div className="bbkSquare1">
        <div className="bbkTopText">
        <Link to = '/'><span className="bbkHomeLink">Objects</span></Link>
        <Link to = '/'><span className="bbkHomeLink">Lighting</span></Link>
        <Link to = '/'><span className="bbkHomeLink">Furniture</span></Link>
        {/* <span>Objects</span>
        <span>Lighting</span>
        <span>Furniture</span> */}
        {/* <span>Everything</span> */}
        </div>
      </div> 
    <div className="bbkSquare2 bbkTopPhoto"><img src={stillLife}/></div>
    {/* <div className="bbkDivider">sample text</div> */}
    <div className="bbkTopMidPhoto"><p className="bbkContactHeader"></p> <img src={vestibule}/></div>
    <div className="bbkSquare2 bbkTextBlock"><p className="bbkText">Objects</p></div>
    <div className="bbkSquare2 bbkMidPhoto"><img src={mountains}/></div>
    <div className="bbkSquare1 bbkMidPhoto"><img src={sphereLamp}/></div> 
    <div className="bbkSquare2 bbkTextBlock"><p className="bbkText">Lighting</p></div>
    <div className="bbkSquare2 bbkTextBlock"><p className="bbkText">Furniture</p></div>
    <div className="bbkSquare2 bbkMidPhoto"><img src={stool1}/></div>
     {/* <div className="bbkDivider">Come see us or get in touch.</div> */}
    <div className="bbkBottomPhoto"><p className="bbkContactHeader">Contact</p> <img src={greenCouch}/></div>
    {/* <div className="bbkSquare3"> A minimal canvas for your masterpieces. </div> <br/> 
    <div className="bbkSquare4 bkltSquare"><img src={cups}/></div>  */}

    </div>
    </>
);

}

