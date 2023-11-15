import { AuthContextProvider } from "./context/AuthContext"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import SignIn from "./components/SignIn"
import Layout from './components/Layout'
import Protected from "./components/Protected"
import Home from './pages/Home'
import PerformanceObjectives from './pages/PerformanceObjectives'
import Surveys from './pages/Surveys'
import DevelopmentNeeds from './pages/DevelopmentNeeds'
import OneToOne from './pages/OneToOne'
import PerformanceRecords from './pages/PerformanceRecords'
import './index.css'



function App() {
  

  return (
    <>
      <AuthContextProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<SignIn />}/>

            <Route path="/home" element={<Home />} />        

            <Route path='/Performance-Objectives' element={<PerformanceObjectives />} />

            <Route path='/Surveys' element={<Surveys />}/>

            <Route path='/Develpopment-Needs' element={<DevelopmentNeeds />}/>

            <Route path='/Perfomrance-Records' element={<PerformanceRecords />}/>

            <Route path='/One-to-one-Check-ins' element={<OneToOne />}/>

          </Route>
        </Routes>
      </AuthContextProvider>
      
    
    
    
    </>
  )
}

export default App
