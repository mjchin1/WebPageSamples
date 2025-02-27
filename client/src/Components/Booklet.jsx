import sculpture1 from '../assets/Photos/Booklet/sculpture1.jpg'
import sculpture2 from '../assets/Photos/Booklet/sculpture2.jpg'
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
    {/* <div className="bkltSquare2 bkltSquare">Art and Objects</div> */}
    </div>
    </>
);

}

