import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import PerformanceObjectives from './pages/PerformanceObjectives'
import Surveys from './pages/Surveys'
import DevelopmentNeeds from './pages/DevelopmentNeeds'
import OneToOne from './pages/OneToOne'
import PerformanceRecords from './pages/PerformanceRecords'


import Sidebar from './components/Sidebar'

import './index.css'


function App() {
  

  return (
    <>
    <BrowserRouter>
      
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Home />}/>
          <Route path='/Performance-Objectives' element={<PerformanceObjectives />} />
          <Route path='/Surveys' element={<Surveys />}/>
          <Route path='/Develpopment-Needs' element={<DevelopmentNeeds />}/>
          <Route path='/Perfomrance-Records' element={<PerformanceRecords />}/>
          <Route path='/One-to-one-Check-ins' element={<OneToOne />}/>
        </Route>
      </Routes>
    
    </BrowserRouter>
    
    </>
  )
}

export default App
