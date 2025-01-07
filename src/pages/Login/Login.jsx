
import { useState } from 'react'
import assets from '../../assets/assets'
import './login.css'

const Login = () => {

  const [currState , setCurrSate] = useState("Sign up");  

  return (
    <div className='login'>
      <img src={assets.logo_big} alt="" className='logo' />
      <form className='login-form'>
        <h2>{currState}</h2>
        {
          currState === "Sign up" ? <input type="text" placeholder='username' className="form-input" required /> : null
        }
        
        <input type="email" placeholder='Email' className="form-input" required />
        <input type="password" placeholder='Password' className="form-input" required/>
        <button type='submit'>{currState === "Sign up" ? "create account" : "Login now"}</button>

        <div className="login-term">
          <input type="checkbox" />
          <p> Agree to the terms of use & privacy policy.</p>
        </div>

        <div className="login-forget">

          {
            currState === "Sign up"
            ? <p className='login-toggle'> Already have an account ? <span onClick={()=> setCurrSate("Login")}>Login  here</span> </p> 
            :<p className='login-toggle'> Create an account .  <span onClick={()=> setCurrSate("Sign up")}>click  here</span> </p>
          }

          {/* <p className='login-toggle'> Already have an account ? <span onClick={()=> setCurrSate("Login")}>Login  here</span> </p> 
          <p className='login-toggle'> Create an account .  <span onClick={()=> setCurrSate("Login")}>click  here</span> </p> */}
        </div>
      </form>
    </div>
  )
}

export default Login
