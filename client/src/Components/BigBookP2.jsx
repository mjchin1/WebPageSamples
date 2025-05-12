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
      productName: "Cup and Pitcher"
    },
    {
      productPhoto: vaseSet,
      productName: "Vase Set"
    },
    {
      productPhoto: goblet,
      productName: "Silver Goblet"
    },
    {
      productPhoto: globe,
      productName: "Globe"
    },
    {
      productPhoto: goldVases,
      productName: "Gold Vase Set"
    },
 
    {
      productPhoto: bowl,
      productName: "Angled Bowl"
    },
   

  ]

  const lighting = [
    {
      productPhoto: greyLamp,
      productName: "Grey Hanging Lamp"
    },
    {
      productPhoto: redLamp,
      productName: "Red Lamp"
    },
    {
      productPhoto: goldLamp,
      productName: "Gold Table Lamp"
    },
    {
      productPhoto: sphereLamp2,
      productName: "Sphere Lamp"
    },
    {
      productPhoto: roseLamp,
      productName: "Rose Gold Desk Lamp"
    },
    {
      productPhoto: whiteLamp,
      productName: "Hanging White Lamp"
    },
  ]

  const furniture = [
    {
      productPhoto: brownChair,
      productName: "Brown Velvet Chair"
    },
    {
      productPhoto: whiteChair,
      productName: "White Velvet Chair"
    },
    {
      productPhoto: chairSet,
      productName: "Brown Leather Chair Set"
    },
    {
      productPhoto: nestedStools,
      productName: "Nested Wooden Stool Set"
    },
    {
      productPhoto: yellowChair,
      productName: "Yellow Chair"
    },
    {
      productPhoto: table2,
      productName: "Desk and Chair Set"
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
    <Link to = '/bbk'><span>Home</span></Link>
    </div>
    <br/> <br/>
    </div> 
    <br/><br/><br/> <br/> <br/> 

    <div className="pageDivider"></div>
    <div className="bbkShopContainer">  
      <h1 className="bbkShopContainerHeading"> Objects</h1>
      <div className="bbkObjectContainer">
        {objects.map((object)=> (
        <div className="shopProduct bbkProduct">
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

