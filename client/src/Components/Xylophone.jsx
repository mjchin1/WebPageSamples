import { useNavigate, Link } from 'react-router-dom'
import bookstore2 from '../assets/Photos/Xylophone/bookstore2.jpg'
import books1 from '../assets/Photos/Xylophone/books1.jpg'
import fiction from '../assets/Photos/Xylophone/fiction.jpg'
import poetry from '../assets/Photos/Xylophone/poetry.jpg'
import art from '../assets/Photos/Xylophone/art.jpg'

export default function Xylophone() {

  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }

  window.onbeforeunload()

  const navigate = useNavigate()

  function navToHome() {
    navigate("/")
    
  }



  return (
    <>

    <div className="xylpPageContent"> 
    
   
    <div className="xylpOpeningText">
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

    <div className="xylpHeader">
    <h1 className="xylpLogo">Xylophone Books</h1>
    <Link to = '/'><h3 className="xylpNav">Home</h3></Link>
    </div> 

    <div className="xlypContentBlock5">
      <div className="xlypCb5Block"><img className="xylpcb5pic" src={books1}/></div>
    </div>

    <div className="breakline"></div> <br/> <br/>

    <div className="xlypContentBlock3">
      <div className="xlypCb3Block"><img src={bookstore2}/></div>
      <div className="verticalBreakline"></div>
      <div className="xlypCb3Block2"> <p className="xylpLargeText">A new adventure with every page. </p> </div>
    </div> <br/> <br></br>
    <div className="breakline"></div>

    <div className="xlypContentBlock2">
      
      <div className="xlypCb2Block"><img src={art}/></div>
      <div className="xlypCb2Block"><img src={fiction}/></div>
      <div className="xlypCb2Block"><img src={poetry}/></div>
    </div>

 

    <div className="xlypContentBlock4">
      <div className="xlypCb4Block"></div>
      <div className="xlypCb4Block"></div>
      <div className="xlypCb4Block"></div>
      <div className="xlypCb4Block"></div>
      <div className="xlypCb4Block"></div>
    </div>

  


    <div className="footer"> </div>

    </div>
    </>
);

}
