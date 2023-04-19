import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Calc from './pages/projects/calc/Calc'
import SentimentAnalyser from './pages/projects/sentiment-analyser/sentimentAnalyser'
import FaceMesh from './pages/projects/faceMesh'

const App = ()=> {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sentiment-analyser' element={<SentimentAnalyser/>} />
        <Route path='/calc' element={<Calc/>} />
        <Route path='/facemesh' element={<FaceMesh/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
