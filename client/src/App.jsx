import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
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
import Mondrian from './Components/Mondrian'

function App() {



  return (
    <>
    <div>
    <Navigations/>
    <Routes>
      <Route path='/' element={<MosaicPage/> } />
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
    </Routes>

    </div>
      
    </>
  )
}

export default App
