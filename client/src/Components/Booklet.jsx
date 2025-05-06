import sculpture1 from '../assets/Photos/Booklet/sculpture1.jpg'
import sculpture2 from '../assets/Photos/Booklet/sculpture2.jpg'
import {Link} from 'react-router-dom'

export default function Booklet({}) {





  return (
    <>

    <div className="bkltHeader">
    <h1 className="bkltLogo">Booklet</h1>
    <div className="bkltNav">
    <Link to = '/'><h3>Shop</h3></Link>
    <Link to = '/'><h3>About</h3></Link>
    <Link to = '/'><h3>Home</h3></Link>
    </div>
    </div>


    <div className="bkltContainer"> 
    <div className="bkltSquare1 bkltSquare"><img src={sculpture2}/></div> 
    <div className="bkltSquare2 bkltSquare"><img src={sculpture1}/></div>
    {/* <button className="bkltEnterButton">Shop</button> */}
    {/* <div className="bkltSquare3"> A minimal canvas for your masterpieces. </div> <br/> 
    <div className="bkltSquare4 bkltSquare"><img src={cups}/></div>  */}

    </div>
    </>
);

}

