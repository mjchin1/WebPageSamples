import { useNavigate } from 'react-router-dom'

import chicago from '../assets/Photos/Outline/chicago.jpg'


export default function Outline() {

  const navigate = useNavigate()

  function navToHome() {
    navigate("/")
    
  }





  return (
    <>
  
    <button className="outlnBackButton" onClick={navToHome}>Home</button>
    <div className="outlnPageContent"> 
    
    <div className="outlnContentBlock1">
      <div className="outln1"></div> <br/>
      <h1 className="outlnHeader">Outline</h1> <br/> <br/>
      <div className="outln2"></div>
    </div>

    <div className="outlnContentBlock2">
      <div className="outlnMainImage"><img src={chicago}/></div>
    </div>

    </div>
    </>
);

}
