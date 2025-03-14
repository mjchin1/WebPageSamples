import coffee from '../assets/Photos/FixedBackground/coffee.jpg'
import oranges from '../assets/Photos/FixedBackground/oranges.jpg'
import bowl from '../assets/Photos/FixedBackground/bowl.jpg'
import { useNavigate } from 'react-router-dom'


export default function FixedBackground() {

  const navigate = useNavigate()

  function navToHome() {
    navigate("/")
    
  }





  return (
    <>
    <div className="backgroundPic"><img src={oranges}/></div> <br/>
  
    <button className="fbBackButton" onClick={navToHome}>Back</button>
    <div className="pageContent"> 
    <h1 className="fbHeader">Fixed Background</h1>
    
    <div className="fixedBackgroundButtons">
    <button className="fbButton fbButton1">Wine</button> <br/> <br/>
    <button className="fbButton fbButton2">Food</button> <br/> <br/>
    <button className="fbButton fbButton3">Reservations</button>
    </div>

    {/* <h1>Menu</h1>
    <div className="menuCard"></div> */}
    <div className="contactDiv">
    <h1>Contact</h1>
    <span className="contactInfo">Phone: 888-888-8888</span> <br/>
    <span className="contactInfo">Address: 1600 Peach Tree Lane, Atlanta GA</span> <br/>
    <span className="contactInfo">Email: hello@fixedbackground.com</span> <br/> <br/> <br/>
    </div>
    



    </div>
    </>
);

}


