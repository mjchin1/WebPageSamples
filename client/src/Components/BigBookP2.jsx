import stillLife from '../assets/Photos/BigBook/stillLife.jpg'
import vestibule from '../assets/Photos/BigBook/vestibule.jpg'
import stool1 from '../assets/Photos/BigBook/stool1.jpg'
import greenCouch from '../assets/Photos/BigBook/greenCouch.jpg'
import mountains from '../assets/Photos/BigBook/mountains.jpg'
import sphereLamp from '../assets/Photos/BigBook/sphereLamp.jpg'
import {Link} from 'react-router-dom'

export default function BigBook({}) {

  const objects = [
    {
      productPhoto: sphereLamp,
      productName: "Lamp"
    },
    {
      productPhoto: sphereLamp,
      productName: "Lamp"
    },
    {
      productPhoto: sphereLamp,
      productName: "Lamp"
    },
  ]

  const lighting = [
    {
      productPhoto: sphereLamp,
      productName: "Lamp"
    },
    {
      productPhoto: sphereLamp,
      productName: "Lamp"
    },
    {
      productPhoto: sphereLamp,
      productName: "Lamp"
    },
  ]

  const furniture = [
    {
      productPhoto: sphereLamp,
      productName: "Lamp"
    },
    {
      productPhoto: sphereLamp,
      productName: "Lamp"
    },
    {
      productPhoto: sphereLamp,
      productName: "Lamp"
    },
  ]






  return (
    <>
    <div className="bbkHeader">
    <h1 className="bbkBlackLogo">Big Book</h1>
    <div className="bbkNav">
    <Link to = '/'><span>Objects</span></Link>
    <Link to = '/'><span>Lighting</span></Link>
    <Link to = '/'><span>Furniture</span></Link>
    <Link to = '/'><span>Home</span></Link>
    </div>
    </div> <br/><br/><br/> <br/> <br/> <br/>

    <div className="bbkShopContainer"> 
      
      <h1 className="bbkShopContainerHeading"> Objects</h1>
      <div className="bbkObjectContainer">
        {objects.map((object)=> (
        <div className="shopProduct">
          <img className="shopProductPhoto" src={sphereLamp}></img>
          <span className="shopProductTitle">{object.productName}</span>
        </div>
         ))}
      </div> <br/> <br/>
      
      <h1 className="bbkShopContainerHeading">Lighting</h1>
      <div className="bbkLightingContainer">
        {objects.map((object)=> (
        <div className="shopProduct">
          <img className="shopProductPhoto" src={sphereLamp}></img>
          <span className="shopProductTitle">{object.productName}</span>
        </div>
         ))}
      </div> <br/><br/>
      
      <h1 className="bbkShopContainerHeading">Furniture</h1>
      <div className="bbkFurnitureContainer">
        {objects.map((object)=> (
        <div className="shopProduct">
          <img className="shopProductPhoto" src={sphereLamp}></img>
          <span className="shopProductTitle">{object.productName}</span>
        </div>
         ))}
      </div>

    </div>
  
    </>
);

}

