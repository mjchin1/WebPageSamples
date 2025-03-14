import pebbles from '../assets/Photos/Slide/pebbles.jpg'
import steps from '../assets/Photos/Slide/steps.jpg'
import { useNavigate } from 'react-router-dom'


export default function Slide() {

  const navigate = useNavigate()

  function navToHome() {
    navigate("/")
    
  }





  return (
    <>
    <div className="sldBackgroundPic"><img src={steps}/></div> <br/>
  
    <button className="sldBackButton" onClick={navToHome}>Home</button>
    <div className="sldPageContent"> 
    <h1 className="sldHeader">Slide</h1>
    </div>
    <div className="sldContentBlock1">
      <div className="sldcb1Content"></div>
      <div className="sldcb1Content"></div>
      <div className="sldcb1Content"></div>
    </div> <br/> <br/>
    <div className="sldContentBlock2">
      <div className="sldcb2Content"><p className="sldCBText">Text</p></div>
      <div className="sldcb2Content"></div>
    </div> <br/> <br/>

    <div className="footer sldFooter"> © 2025 </div>
   
    </>
);

}


