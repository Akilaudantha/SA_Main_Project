import React from 'react'
import'./LogingSignup.css'
import background from '../Assets/Logback.png'

const Signup = () => {
  return (
    <div>
      <div className='all'>
        <form action='' method='POST' name='f1'>
            <h1>Sign Up</h1>
        <table>
            <tr>
                <td>
                    <input type='text' name='user' placeholder='UserName'/>
                </td>
            </tr>
            <tr>
                <td>
                    <input type='password' name='pws' placeholder='Password'/>
                </td>
            </tr>
            <tr>
                <td>
                    <input type='password' name='rpws' placeholder='Re Enter Password'/>
                </td>
            </tr>
            <tr>
                <td>
                    <button type='submit'>SignUp</button>
                </td>
            </tr>
        </table>
       
        </form>
       </div>
    </div>
  )
}

export default Signup
