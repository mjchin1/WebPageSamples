import sculpture1 from '../assets/Photos/Booklet/sculpture1.jpg'
import sculpture2 from '../assets/Photos/Booklet/sculpture2.jpg'
import bowls from '../assets/Photos/Booklet/bowls.jpg'
import bowls2 from '../assets/Photos/Booklet/bowls2.jpg'
import cups from '../assets/Photos/Booklet/cups.jpg'
import {Link} from 'react-router-dom'

export default function Booklet({}) {





  return (
    <>

    <div className="bkltHeader">
    <h1 className="bkltLogo">Booklet</h1>
    <Link to = '/'><h3 className="bkltNav">Home</h3></Link>
    </div>


    <div className="bkltContainer"> 
    <div className="bkltSquare1 bkltSquare"><img src={sculpture2}/></div> 
    <div className="bkltSquare2 bkltSquare"><img src={sculpture1}/></div>
    {/* <div className="bkltSquare3"> A minimal canvas that lets your work shine. </div> <br/> 
    <div className="bkltSquare4 bkltSquare"><img src={cups}/></div>  */}

    </div>
    </>
);

}

