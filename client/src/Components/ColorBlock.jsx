import {Link} from 'react-router-dom'

export default function ColorBlock() {



  return (
    <>

    <div className="cBlockHeader">
    <h1 className="cBlockLogo">Melissa Chin</h1>
    <div className="cBlockNav">
    <Link to = '/'><h3>Work</h3></Link>
    <Link to = '/'><h3>About</h3></Link>
    <Link to = '/'><h3>Contact</h3></Link>
    <Link to = '/'><h3>Home</h3></Link>
    </div>
    </div>


    <div className="cBlockContainer"> 
    <div className="cBlockSquare1 cBlockSquare">
      <h1 className="cBlockMainText">Where Art Meets Engineering.</h1>
    
      </div> 
    {/* <button className="bkltEnterButton">Shop</button> */}
    {/* <div className="bkltSquare3"> A minimal canvas for your masterpieces. </div> <br/> 
    <div className="bkltSquare4 bkltSquare"><img src={cups}/></div>  */}

    </div>
   
    </>
);

}


