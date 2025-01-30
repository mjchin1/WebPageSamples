import sculpture1 from '../assets/Photos/Booklet/sculpture1.jpg'
import sculpture2 from '../assets/Photos/Booklet/sculpture2.jpg'

export default function Booklet({}) {





  return (
    <>
    <h1>Art & Objects</h1>
    <div className="bkltContainer"> 
    <div className="bkltSquare1 bkltSquare"><img src={sculpture2}/></div> 
    <div className="bkltSquare2 bkltSquare"><img src={sculpture1}/></div>
    {/* <div className="bkltSquare2 bkltSquare">Art and Objects</div> */}
    </div>
    </>
);

}

