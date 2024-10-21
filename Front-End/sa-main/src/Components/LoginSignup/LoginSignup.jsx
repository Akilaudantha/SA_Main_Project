import React from 'react'
import './LogingSignup.css'
import background from '../Assets/Logback.png'
const LoginSignup = () => {
  return (
    <div>
       <div classname='all'>
        <form action='' method='POST' name='f1'>
            <h1>LogIn</h1>
        <table>
            <tr>
                <td>
                    <input type='text' name='user' placeholder='UserName'/>
                </td>
            </tr>
            <tr>
                <td>
                    <input type='text' name='pws' placeholder='Password'/>
                </td>
            </tr>
            <tr>
                <td>
                    <button type='submit'>LogIn</button>
                </td>
            </tr>
        </table>
        <p>Yo dont have account? <a href='Signup.jsx'>Click Here!</a></p>
        </form>
       </div>
    </div>
  )
}

export default LoginSignup
