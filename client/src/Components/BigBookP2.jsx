import cupAndPitcher from '../assets/Photos/BigBook/cupAndPitcher.jpg'
import vaseSet from '../assets/Photos/BigBook/vaseSet.jpg'
import goblet from '../assets/Photos/BigBook/goblet.jpg'
import roseLamp from '../assets/Photos/BigBook/roseLamp.jpg'
import goldLamp from '../assets/Photos/BigBook/goldLamp.jpg'
import greyLamp from '../assets/Photos/BigBook/greyLamp.jpg'
import brownChair from '../assets/Photos/BigBook/brownChair.jpg'
import nestedStools from '../assets/Photos/BigBook/nestedStools.jpg'
import whiteChair from '../assets/Photos/BigBook/whiteChair.jpg'
import chairSet from '../assets/Photos/BigBook/chairSet.jpg'
import yellowChair from '../assets/Photos/BigBook/yellowChair.jpg'
import blackChair from '../assets/Photos/BigBook/blackChair.jpg'
import globe from '../assets/Photos/BigBook/globe.jpg'
import goldVases from '../assets/Photos/BigBook/goldVases.jpg'
import whiteLamp from '../assets/Photos/BigBook/whiteLamp.jpg'
import table2 from '../assets/Photos/BigBook/table2.jpg'
import bowl from '../assets/Photos/BigBook/bowl.jpg'
import sphereLamp2 from '../assets/Photos/BigBook/sphereLamp2.jpg'
import redLamp from '../assets/Photos/BigBook/redLamp.jpg'





import {Link} from 'react-router-dom'

export default function BigBook({}) {

  const objects = [
    {
      productPhoto: cupAndPitcher,
      productName: "Lamp"
    },
    {
      productPhoto: vaseSet,
      productName: "Lamp"
    },
    {
      productPhoto: goblet,
      productName: "Lamp"
    },
    {
      productPhoto: globe,
      productName: "Lamp"
    },
    {
      productPhoto: goldVases,
      productName: "Lamp"
    },
 
    {
      productPhoto: bowl,
      productName: "Lamp"
    },
   

  ]

  const lighting = [
    {
      productPhoto: greyLamp,
      productName: "Lamp"
    },
    {
      productPhoto: redLamp,
      productName: "Lamp"
    },
    {
      productPhoto: goldLamp,
      productName: "Lamp"
    },
    {
      productPhoto: sphereLamp2,
      productName: "Lamp"
    },
    {
      productPhoto: roseLamp,
      productName: "Lamp"
    },
    {
      productPhoto: whiteLamp,
      productName: "Lamp"
    },
  ]

  const furniture = [
    {
      productPhoto: brownChair,
      productName: "Lamp"
    },
    {
      productPhoto: whiteChair,
      productName: "Lamp"
    },
    {
      productPhoto: chairSet,
      productName: "Lamp"
    },
    {
      productPhoto: nestedStools,
      productName: "Lamp"
    },
    {
      productPhoto: yellowChair,
      productName: "Lamp"
    },
    {
      productPhoto: table2,
      productName: "Lamp"
    }
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
          <img className="shopProductPhoto" src={object.productPhoto}></img>
          <span className="shopProductTitle">{object.productName}</span>
        </div>
         ))}
      </div> <br/> <br/>
      
      <h1 className="bbkShopContainerHeading">Lighting</h1>
      <div className="bbkLightingContainer">
        {lighting.map((light)=> (
        <div className="shopProduct">
          <img className="shopProductPhoto" src={light.productPhoto}></img>
          <span className="shopProductTitle">{light.productName}</span>
        </div>
         ))}
      </div> <br/><br/>
      
      <h1 className="bbkShopContainerHeading">Furniture</h1>
      <div className="bbkFurnitureContainer">
        {furniture.map((furniturePiece)=> (
        <div className="shopProduct">
          <img className="shopProductPhoto" src={furniturePiece.productPhoto}></img>
          <span className="shopProductTitle">{furniturePiece.productName}</span>
        </div>
         ))}
      </div>

    </div>
    <br/> <br/>
    <div className="footer"></div>
  
    </>
);

}

