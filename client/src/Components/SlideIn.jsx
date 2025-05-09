import { useNavigate, Link } from 'react-router-dom'

export default function SlideIn() {

  const navigate = useNavigate()

  function navToHome() {
    navigate("/")
    
  }
  function scroll() {
    window.scroll(0, 900)
  }

  return (
    <>
  
  <div className="sldnNav">
    <Link to = '/'><h3>Gallery</h3></Link>
    <Link to = '/'><h3>About</h3></Link>
    <Link to = '/'><h3>Contact</h3></Link>
    <Link to = '/'><h3>Home</h3></Link>
    </div>
    <div className="sldnPageContent"> 
    
    <div className="sldnContentBlock1">
      <div className="slidingDivs">
        <h1 className="sldnHeader">Slide-In</h1>
        <div className="sldnDiv1"></div>
        <div className="sldnDiv2"></div>
      </div> 
      <button className="sldnHomeButton" onClick={scroll}>See Our Work</button>
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
