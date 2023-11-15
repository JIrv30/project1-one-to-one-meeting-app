import { useNavigate } from "react-router-dom"
import { UserAuth } from "../context/AuthContext"
import { useEffect } from "react"

const SignIn = () => {
  
  const {googleSignIn, user} = UserAuth()
  const navigate = useNavigate()

  const handleGoogleSignIn = async () => {
    try {await googleSignIn()}
    catch (err) {console.log(err)}
  }
  
  useEffect (()=>{
    if(user!=null) {
      navigate('/home')
    }
  },[user])

  return (

    <div className='main-login'>
    <div className='main-signin-container'>
      <h1 className='PLD-title'>
        Professional Learning Diary Sign in
      </h1>
      <button 
      className='google-signin-btn'
      onClick={handleGoogleSignIn}
      ><span>Sign in</span></button>
      

    </div>
  </div>
  )
}

export default SignIn