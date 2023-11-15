import React from 'react'
import { AuthContextProvider } from './context/AuthContext'
import Protected from './components/Protected'
import OtherTest from './OtherTest'
import { Route, Routes } from 'react-router-dom'
import SignIn from './components/SignIn'

const Test = () => {
  return (
    <>
    <AuthContextProvider>
      <Routes>
        <Route path='/' element={<SignIn />} />
        <Route path='/othertest' element={
        <Protected>
          <OtherTest />
        </Protected>} />

      </Routes>
    </AuthContextProvider>
    </>
  )
}

export default Test