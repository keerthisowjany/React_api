import React from 'react';

function Valid(){
    return (
    <div>
        <table id="t1" align='center' bgcolor='yellow' width='800' height='250'>
            <tr >
                <td><label>User Name: </label></td>
                <td><input type="text" placeholder="enter username"  name='username' required ></input></td>
            </tr>
            <tr >
                <td><label>Password: </label></td>
                <td><input type="password" placeholder="enter password"  name='password' required ></input></td>
            </tr>
            <tr>
                <td><button type="submit" onclick="open('details.html')" name="password">Login</button></td>
            </tr>
            <table>
                <tr>
                    <td><input type="checkbox" checked="checked"></input>Remeber me </td>
                    <td><button type="button" class="cancelbtn">CANCEL</button></td>
                </tr>
            </table>
        </table>
    </div> 

    )
}
export default Valid