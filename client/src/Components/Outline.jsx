import { useNavigate, Link } from 'react-router-dom'

import shore from '../assets/Photos/Outline/shore.jpg'
import painting1 from '../assets/Photos/Outline/painting1.jpg'
import painting2 from '../assets/Photos/Outline/painting2.jpg'
import painting3 from '../assets/Photos/Outline/painting3.jpg'


export default function Outline() {

  const navigate = useNavigate()

  function navToHome() {
    navigate("/")
    
  }





  return (
    <>
  
    {/* <button className="outlnBackButton" onClick={navToHome}>Home</button> */}
    <div className="outlnPageContent"> 
    {/* <div className="outlnHeader2">
    <h1 className="outlnLogo">Outline</h1>
    <Link to = '/'><h3 className="outlnNav">Home</h3></Link>
    </div>
     */}
    <div className="outlnContentBlock1">
      <div className="outln1"></div> <br/>
      <h1 className="outlnHeader">Outline</h1> <br/> <br/>
      <div className="outln2"></div>
    </div>

    <div className="outlnContentBlock2">
    <div className="outlnHeader2">
    <h1 className="outlnLogo">Outline Gallery</h1>
    <Link to = '/'><h3 className="outlnNav">Home</h3></Link>
    </div>
      <div className="outlnMainImage"><img src={painting1}/></div>
    </div>

    <div className="outlnContentBlock3">
     <div className="outlnCb3Block"><img src={painting2}/></div>
     <div className="outlnCb3Block"><img src={painting3}/></div>
    </div>

    <div className="outlnContentBlock4">
     <div className="outlnCb4Block"> </div>
     <div className="outlnCb4Block"></div>
     <div className="outlnCb4Block"></div>
     <div className="outlnCb4Block"> </div>
     <div className="outlnCb4Block"></div>
     <div className="outlnCb4Block"></div>
     <div className="outlnCb4Block"> </div>
     <div className="outlnCb4Block"></div>
    </div>

    <div className="outlnContentBlock5">
     <div className="outlnCb5Block"> </div>
     <div className="outlnCb5Block"></div>
    </div>

    <div className="outlnContentBlock6">
     <div className="outlnCb6Block"> </div>
     <div className="outlnCb6Block"></div>
     <div className="outlnCb6Block"></div>
    </div>





    </div>
    </>
);

}
