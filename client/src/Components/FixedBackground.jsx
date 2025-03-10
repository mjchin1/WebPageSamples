import coffee from '../assets/Photos/FixedBackground/coffee.jpg'
import peaches from '../assets/Photos/FixedBackground/peaches.jpg'
import oranges from '../assets/Photos/FixedBackground/oranges.jpg'
import bowl from '../assets/Photos/FixedBackground/bowl.jpg'
import pitcher from '../assets/Photos/FixedBackground/pitcher.jpg'
import plant from '../assets/Photos/FixedBackground/plant.jpg'
export default function FixedBackground() {





  return (
    <>
    <div className="backgroundPic"><img src={peaches}/></div> <br/>
    <div className="pageContent">
    <h1>Fixed Background</h1>

    <div className="fixedBackgroundButtons">
    <button className="fbButton">Wine</button> <br/> <br/>
    <button className="fbButton">Food</button> <br/> <br/>
    <button className="fbButton">Reservations</button>
    </div>

    {/* <h1>Menu</h1>
    <div className="menuCard"></div> */}

    <h1>Contact</h1>
    



    </div>
    </>
);

}


