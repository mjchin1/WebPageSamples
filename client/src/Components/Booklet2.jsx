import sculpture1 from '../assets/Photos/Booklet/sculpture1.jpg'
import sculpture2 from '../assets/Photos/Booklet/sculpture2.jpg'
import {Link} from 'react-router-dom'

export default function Booklet2({}) {





  return (
    <>

    <div className="bklt2Header">
    <h1 className="bklt2Logo">Booklet 2</h1>
    <Link to = '/'><h3 className="bklt2Nav">Home</h3></Link>
    </div>


    <div className="bklt2Container"> 
    <div className="bklt2Square1 bklt2Square"><img src={sculpture2}/></div> 
    <div className="bklt2Square2 bklt2Square"><img src={sculpture1}/></div>
    {/* <div className="bkltSquare3"> A minimal canvas for your masterpieces. </div> <br/> 
    <div className="bkltSquare4 bkltSquare"><img src={cups}/></div>  */}

    </div>
    </>
);

}

