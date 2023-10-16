import React from 'react'
import './Login.css';
import './Home.css';
function Login() {
  return (
    <div className='ll'>
        <div className='a'>
            <table id="t1" align='center'  width='300' height='100' >
                <tr>
                    <br/><td>
                        LOGIN
                    </td>
                </tr><br/>
                <tr >
                    <td><label>User Name: </label></td>
                    <td><input type="text" placeholder="enter username"  name='username' required ></input></td>
                </tr>
                <tr >
                    <td><label>Password: </label></td>
                    <td><input type="password" placeholder="enter password"  name='password' required ></input></td>
                </tr>
                <tr>
                    <br/><td><button type="submit"  name="password" >Login</button></td>
                </tr>
            </table>   
        </div> 
        </div>
  )
}

export default Login