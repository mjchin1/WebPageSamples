import { useNavigate } from 'react-router-dom'


export default function ChangingText() {

  const navigate = useNavigate()

  function navToHome() {
    navigate("/")
    
  }





  return (
    <>
  
    <button className="ctBackButton" onClick={navToHome}>Home</button>
    <div className="ctPageContent"> 
    
   
    <h1 className="ctHeader">Changing Text</h1>


    </div>
    </>
);

}
