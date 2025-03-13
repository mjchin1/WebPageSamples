import { useNavigate } from 'react-router-dom'


export default function Outline() {

  const navigate = useNavigate()

  function navToHome() {
    navigate("/")
    
  }





  return (
    <>
  
    <button className="outlnBackButton" onClick={navToHome}>Home</button>
    <div className="outlnPageContent"> 
    
    <div className="outln1"></div>  
    <h1 className="outlnHeader">Outline</h1>
    <div className="outln2"></div>

    </div>
    </>
);

}
