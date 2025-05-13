import greenTile from '../assets/Photos/Slide/greenTile.jpg'
import greenTile2 from '../assets/Photos/Slide/greenTile2.jpg'
import whiteTile from '../assets/Photos/Slide/whiteTile.jpg'
import blueTile from '../assets/Photos/Slide/blueTile.jpg'
import blueTile2 from '../assets/Photos/Slide/blueTile2.jpg'
import blueTile3 from '../assets/Photos/Slide/blueTile3.jpg'
import blueTile4 from '../assets/Photos/Slide/blueTile4.jpg'
import { useNavigate } from 'react-router-dom'
import {Link} from 'react-router-dom'


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
        tilePhoto: blueTile2,
        tileName: "Blue Tile"
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
        tilePhoto: whiteTile,
        tileName: "Blue Tile"
       },

       {
        tilePhoto: blueTile,
        tileName: "Blue Tile"
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


