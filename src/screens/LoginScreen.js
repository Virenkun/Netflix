import React from 'react'
import './LoginScreen.css'

function LoginScreen() {
  return (
    <div className='loginScreen'>
        <div className='loginScreen_background'>
        <img className="loginScreen_logo"
        scr="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
        alt="" />
        <button className='loginScreen_button'>
        Sign In
        </button>
        <div className='loginScreen_gradient'></div>
        <div className='loginScreen_body'>
            <>
            <h1>Unlimted films. TV propgramms and more.</h1>
            <h2>Watch anywhere. Cancel Anytime</h2>
            <h3>Ready To watch?Enter Your Email to create or restart your menbership</h3>
            </>
        </div>
        </div>
    </div>
  )
}

export default LoginScreen
