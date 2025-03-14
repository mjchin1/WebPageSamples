import sculpture1 from '../assets/Photos/Booklet/sculpture1.jpg'
import sculpture2 from '../assets/Photos/Booklet/sculpture2.jpg'
import {Link} from 'react-router-dom'

export default function BigBook({}) {





  return (
    <>

    <div className="bbkHeader">
    <h1 className="bbkLogo">Big Book</h1>
    <Link to = '/'><h3 className="bbkNav">Home</h3></Link>
    </div>


    <div className="bbkContainer"> 
    <div className="bbkSquare1 bbkTopPhoto"><img src={sculpture2}/></div> 
    <div className="bbkSquare2 bbkTopPhoto"><img src={sculpture1}/></div>
    {/* <div className="bbkDivider">sample text</div> */}
    <div className="bbkSquare2 bbkTextBlock"><p className="bbkText">Visit the Shop</p></div>
    <div className="bbkSquare2 bbkMidPhoto"><img src={sculpture1}/></div>
    <div className="bbkSquare1 bbkMidPhoto"><img src={sculpture2}/></div> 
    <div className="bbkSquare2 bbkTextBlock"><p className="bbkText">View the Gallery</p></div>
     {/* <div className="bbkDivider">Come see us or get in touch.</div> */}
    <div className="bbkBottomPhoto"><p className="bbkContactHeader">Contact</p> <img src={sculpture1}/></div>
    {/* <div className="bbkSquare3"> A minimal canvas for your masterpieces. </div> <br/> 
    <div className="bbkSquare4 bkltSquare"><img src={cups}/></div>  */}

    </div>
    </>
);

}

