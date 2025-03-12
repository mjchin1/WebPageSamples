import { useState } from 'react'
import './App.css'
import {Routes, Route, Link} from 'react-router-dom'
import MosaicPage from './Components/MosaicPage'
import DescendingScalePage2 from './components/DescendingScalePage2'
import AlternatingScale from './components/AlternatingScale'
import VerticalAlternatingSquares1 from './components/VerticalAlternatingSquares1'
import HorizontalAlternatingSquares from './components/HorizontalAlternatingSquares'
import Navigations from './Components/Navigations'
import Kaleidescope from './Components/Kaleidescope'
import BigBox from './Components/BigBox'
import BlockFrame from './Components/BlockFrame'
import Booklet from './Components/Booklet'
import TriFold from './Components/TriFold'
import TriFold2 from './Components/TriFold2'
import Mondrian from './Components/Mondrian'
import Homepage from './Components/Homepage'
import Animations from './Components/Animations'
import FixedBackground from './Components/FixedBackground'
import Slide from './Components/Slide'
import SlideIn from './Components/SlideIn'
import Outline from './Components/Outline'

function App() {


  return (
    <>
    <div>
    {/* <Link to = '/'>Home</Link> */}
    <Routes>
      <Route path='/mos' element={<MosaicPage/> } />
      <Route path='/ds2' element={<DescendingScalePage2/> } />
      <Route path='/as' element={<AlternatingScale/> } />
      <Route path='/vas1' element={<VerticalAlternatingSquares1/> } />
      <Route path='/has' element={<HorizontalAlternatingSquares/> } />
      <Route path='/klds' element={<Kaleidescope/> } />
      <Route path='/bb' element={<BigBox/> } />
      <Route path='/bklt' element={<Booklet/> } />
      <Route path='/bf' element={<BlockFrame/> } />
      <Route path='/tf' element={<TriFold/> } />
      <Route path='/mon' element={<Mondrian/> } />
      <Route path='/' element={<Homepage/> } />
      <Route path='/animations' element={<Animations/> } />
      <Route path='/fb' element={<FixedBackground/> } />
      <Route path='/tf2' element={<TriFold2/> } />
      <Route path='/sld' element={<Slide/> } />
      <Route path='/sldn' element={<SlideIn/> } />
      <Route path='/outln' element={<Outline/> } />
    </Routes>

    </div>
      
    </>
  )
}

export default App
