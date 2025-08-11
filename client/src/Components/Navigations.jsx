import {Link} from 'react-router-dom';

export default function Navigations() {
    return (
        <nav className="navbar">

            <Link to = '/bbk'>Big Book</Link> 
            <Link to = '/sld'>Slide</Link> 
            <Link to = '/mg'>Mosaic Grid</Link>  
            <Link to = '/tf2'>Trifold 2</Link> 
            <Link to = '/sldn'>Slide-In</Link> 
            <Link to = '/bklt'>Booklet</Link>
            <Link to = '/maze'>Maze</Link>
        
        
          
            {/* <Link to = '/tf'>Trifold</Link>  */}
            {/* <Link to = '/bb'>Big Box</Link> */}
           
            
            {/* animations */}
            <Link to = '/xylp'>Xylophone</Link> 
            <Link to = '/outln'>Outline</Link> 
            <Link to = '/ct'>Changing Text</Link> 
            
          {/* galleries */}
            {/* <Link to = '/mos'>Mosaic</Link> */}
            {/* <Link to = '/as'>Alternating Scale</Link> */}
            {/* <Link to = '/vas1'>Vertical Alternating Squares1</Link> */}
            {/* <Link to = '/ds2'>Descending Scale2</Link>  */}
            {/* <Link to = '/mon'>Mondrian</Link>  */}
            
            {/* <Link to = '/has'>Horizontal Alternating Squares</Link> */}
            {/* <Link to = '/klds'>Kaleidescope</Link> */}
            
        
            {/* <Link to = '/bklt2'>Booklet 2</Link> */}
            {/* <Link to = '/bf'>BlockFrame</Link> */}
            {/* <Link to = '/animations'>Animations</Link> */}
            {/* <Link to = '/fb'>Fixed Background</Link> */}

       

            
        </nav>
    );
};