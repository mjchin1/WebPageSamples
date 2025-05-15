import { Link } from 'react-router-dom'

export default function MosaicGridP2() {

  return (

    <div className="mgHeader">
    <h1 className="mgLogo">Mosaic Grid</h1>
    <div className="mgNav"> 
    <Link to = '/'><h3 className="mgNavLink">Food</h3></Link>
    <Link to = '/'><h3 className="mgNavLink">Gatherings</h3></Link>
    <Link to = '/'><h3 className="mgNavLink">About Us</h3></Link>
    <Link to = '/'><h3 className="mgNavLink">Home</h3></Link>
    </div>
    </div>
  )
}