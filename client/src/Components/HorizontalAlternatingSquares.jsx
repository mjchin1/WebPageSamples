import SnackPlate from '../assets/Photos/HorizontalAlternatingSquares/SnackPlate.jpg'
import tea from '../assets/Photos/HorizontalAlternatingSquares/tea.jpg'
import cupcake from '../assets/Photos/HorizontalAlternatingSquares/cupcake.jpg'

export default function HorizontalAlternatingSquares({}) {





  return (
    <>
    <h1>Alternating Squares</h1>
    <div className="hasContainer"> 
    <div className="hasSquare1 square"><img src={SnackPlate}/></div> 
    <div className="hasSquare2 square"><img src={tea}/></div>
    <div className="hasSquare3 square"><img src={cupcake}/></div>

    </div>
    </>
);

}


