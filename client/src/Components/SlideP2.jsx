import greenTile from '../assets/Photos/Slide/greenTile.jpg'
import greenTile2 from '../assets/Photos/Slide/greenTile2.jpg'
import whiteTile from '../assets/Photos/Slide/whiteTile.jpg'
import blueTile from '../assets/Photos/Slide/blueTile.jpg'
import blueTile2 from '../assets/Photos/Slide/blueTile2.jpg'
import blueTile3 from '../assets/Photos/Slide/blueTile3.jpg'
import blueTile4 from '../assets/Photos/Slide/blueTile4.jpg'
import neutralTile from '../assets/Photos/Slide/neutralTile.jpg'
import neutralTile2 from '../assets/Photos/Slide/neutralTile2.jpg'
import neutralTile3 from '../assets/Photos/Slide/neutralTile3.jpg'
import pattern2 from '../assets/Photos/Slide/pattern2.jpg'
import pattern3 from '../assets/Photos/Slide/pattern3.jpg'
import pattern4 from '../assets/Photos/Slide/pattern4.jpg'
import pattern5 from '../assets/Photos/Slide/pattern5.jpg'
import pattern6 from '../assets/Photos/Slide/pattern6.jpg'
import pattern7 from '../assets/Photos/Slide/pattern7.jpg'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'
import redTile from '../assets/Photos/Slide/redTile.jpg'
import redTile2 from '../assets/Photos/Slide/redTile2.jpg'
import redTile3 from '../assets/Photos/Slide/redTile3.jpg'


export default function Slide() {

  const tiles = [
      
       {
        tilePhoto: blueTile3,
        tileName: "Blue Tile"
       },

       {
        tilePhoto: blueTile4,
        tileName: "Blue Tile"
       },

       {
        tilePhoto: blueTile,
        tileName: "Blue Tile"
       },

       {
        tilePhoto: blueTile2,
        tileName: "Turquoise Tile"
       },

      {
        tilePhoto: greenTile,
        tileName: "Green Tile 1"
       },
      {
        tilePhoto: greenTile2,
        tileName: "Green Tile 2"
      },
      {
        tilePhoto: redTile,
        tileName: "Red Tile"
      },
      {
        tilePhoto: redTile2,
        tileName: "Red Tile"
      },
      {
        tilePhoto: redTile3,
        tileName: "Red Tile"
      },
       {
        tilePhoto: neutralTile,
        tileName: "Neutral Tile"
       },
       {
        tilePhoto: neutralTile2,
        tileName: "Neutral Tile"
       },
       {
        tilePhoto: neutralTile3,
        tileName: "Neutral Tile"
       },
       {
        tilePhoto: pattern2,
        tileName: "Patterned Tile"
       },
       {
        tilePhoto: pattern3,
        tileName: "Patterned Tile"
       },
       {
        tilePhoto: pattern4,
        tileName: "Patterned Tile"
       },
       {
        tilePhoto: pattern5,
        tileName: "Patterned Tile"
       },
       {
        tilePhoto: pattern6,
        tileName: "Patterned Tile"
       },
       {
        tilePhoto: pattern7,
        tileName: "Patterned Tile"
       },


     
  ]

  const navigate = useNavigate()

  function navToHome() {
    navigate("/")
    
  }





  return (
    <>
    <div className="sldContainer">
    <div className="sldNavP2">
    <Link to = '/sld'><h3 className="sldNavLink black">Shop</h3></Link>
    <Link to = '/sld'><h3 className="sldNavLink black">About</h3></Link>
    <Link to = '/sld'><h3 className="sldNavLink black">Home</h3></Link>
    </div> 
    
    <div className="sldShopContainer">
    {tiles.map((tile)=> (
        <div className="shopProduct bbkProduct">
          <img className="shopProductPhoto" src={tile.tilePhoto}></img>
          <span className="shopProductTitle">{tile.tileName}</span>
        </div>
         ))}
   </div>

    <div className="footer sldFooter"> © 2025 </div>
   
    </div>
    </>
);

}


