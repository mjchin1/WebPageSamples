import elephant from '../assets/Photos/BlockFrame/elephant.jpg'
import sculpture1 from '../assets/Photos/BlockFrame/sculpture1.jpg'
import vases from '../assets/Photos/BlockFrame/vases.jpg'
import sculpture2 from '../assets/Photos/BlockFrame/sculpture2.jpg'

export default function BlockFrame({}) {



  return (
    <>
    <h1> Little Elephant</h1>
    <h1>Art & Objects</h1>
    <div className="bfContainer"> 
    <div className="bfSquare1 square"></div> 
    <div className="bfSquare2 square"><img src={elephant}/> </div>
    </div>

    <div className="bfPictureRow">
    <div className="bfSquare3 square"> <img src={sculpture1}/>  </div>
    <div className="bfSquare3 square"> <img src={vases}/> </div>
    <div className="bfSquare3 square"> <img src={sculpture2}/>  </div>
    </div>


    </>
);

}

