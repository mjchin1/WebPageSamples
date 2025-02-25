import matcha from '../assets/Photos/Kaleidescope/matcha.jpg'
import cupcake from '../assets/Photos/Kaleidescope/cupcake.jpg'
import grapefruit from '../assets/Photos/Kaleidescope/grapefruit.jpg'
import snackplate from '../assets/Photos/Kaleidescope/snackplate.jpg'
import granola from '../assets/Photos/Kaleidescope/granola.jpg'
import peaches from '../assets/Photos/Kaleidescope/peaches.jpg'

export default function Kaleidescope({}) {





  return (
    <>

    <h1>Kaleidescope</h1>
    <div className="kldsContainer"> 

    <div className="kldsSquare1 square"></div>
    <div className="kldsSquare2 square"><img src={grapefruit}/></div>
    <div className="kldsSquare3 square"></div>
    <div className="kldsSquare4 square"><img src={matcha}/></div> 
    <div className="kldsSquare5 square"><img src={snackplate}/></div>
    <div className="kldsSquare6 square"><img src={granola}/></div>
    <div className="kldsSquare7 square"><img src={cupcake}/></div>
    

    </div>
    </>
);

}

