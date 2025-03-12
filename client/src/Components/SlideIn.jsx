import pebbles from '../assets/Photos/Slide/pebbles.jpg'
import steps from '../assets/Photos/Slide/steps.jpg'
import { useNavigate } from 'react-router-dom'


export default function SlideIn() {

  const navigate = useNavigate()

  function navToHome() {
    navigate("/")
    
  }





  return (
    <>
  
    <button className="sldnBackButton" onClick={navToHome}>Back</button>
    <div className="sldnPageContent"> 
    <h1 className="sldnHeader">Slide-In</h1>
    <div className="sldnDiv1"></div>
    <div className="sldnDiv2"></div>

    </div>
    </>
);

}
