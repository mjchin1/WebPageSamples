import { useNavigate } from 'react-router-dom'

export default function SlideIn() {

  const navigate = useNavigate()

  function navToHome() {
    navigate("/")
    
  }





  return (
    <>
  
    <button className="sldnBackButton" onClick={navToHome}>Home</button>
    <div className="sldnPageContent"> 
    <h1 className="sldnHeader">Slide-In</h1>
    <div className="slidingDivs">
      <div className="sldnDiv1"></div>
      <div className="sldnDiv2"></div>
    </div>

    </div>
    </>
);

}
