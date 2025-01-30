import lighthouse from '../assets/Photos/BigBox/lighthouse.jpg'
import PinkBuilding from '../assets/Photos/BigBox/PinkBuilding.jpg'
import GloomyBuilding from '../assets/Photos/BigBox/GloomyBuilding.jpg'
export default function BigBox({}) {





  return (
    <>

    <h1>Wayfarer</h1>
    <h1>Travel Photography</h1>
    <div className="bbContainer"> 
    <div className="bbSquare1 square"><img src={lighthouse}/></div>
    <div className="bbSquare2 square"><img src={PinkBuilding}/></div>
    <div className="bbSquare3 square"><img src={GloomyBuilding}/></div>
    <div className="bbSquare4 square">4</div> 
    <div className="bbSquare5 square">5</div>
    <div className="bbSquare6 square">6</div>
    <div className="bbSquare7 square">7</div>
    <div className="bbSquare8 square">8</div>

    </div>
    </>
);

}


