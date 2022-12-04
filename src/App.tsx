import { useState } from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Calc from './pages/projects/calc/Calc'
import SentimentAnalyser from './pages/projects/sentiment-analyser/sentimentAnalyser'

const App = ()=> {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/sentiment-analyser' element={<SentimentAnalyser/>} />
        <Route path='/calc' element={<Calc/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
