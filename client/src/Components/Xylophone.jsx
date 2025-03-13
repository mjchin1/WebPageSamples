import { useNavigate, Link } from 'react-router-dom'

export default function Xylophone() {

  const navigate = useNavigate()

  function navToHome() {
    navigate("/")
    
  }



  return (
    <>
  
    {/* <div className="tfHeader">
    <h1 className="tfLogo">Xylophone</h1>
    <Link to = '/'><h3 className="tfNav">Home</h3></Link>
    </div> */}

    <button className="xylpBackButton" onClick={navToHome}>Home</button>

    <div className="xylpPageContent"> 
    <h1 className="xylpText">Xylophone</h1>
    <div className="slidingDivs">
      <div className="xylpSquare1"></div>
      <div className="xylpSquare2"></div>
      <div className="xylpSquare3"></div>
      <div className="xylpSquare4"></div>
      <div className="xylpSquare5"></div>
      <div className="xylpSquare6"></div>
      <div className="xylpSquare7"></div>
      <div className="xylpSquare8"></div>
    </div>

    </div>
    </>
);

}
