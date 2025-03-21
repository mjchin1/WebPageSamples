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
    
    <div className="sldnContentBlock1">
      <h1 className="sldnHeader">Slide-In</h1>
      <div className="slidingDivs">
        <div className="sldnDiv1"></div>
        <div className="sldnDiv2"></div>
      </div>
    </div>

    <div className="sldnContentBlock2">
    <div className="sldnTextBlock">Text</div>
    <div className="sldnImageBlock"></div> 
    <div className="sldnImageBlock"></div>
    <div className="sldnTextBlock">Text</div>
    </div>

    <div className="sldnContentBlock3">
    <div className="sldnImageBlock2"></div>
    <div className="sldnImageBlock2"></div> 
    <div className="sldnImageBlock2"></div>
    </div>

    <div className="sldnContentBlock4">
    <div className="sldnImageBlock4"></div>
    <div className="sldnTextBlock4">Text</div> 
    </div>

    <div className="footer"></div>

    </div>
    </>
);

}
