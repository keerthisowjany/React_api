import React from 'react'
import "./Style.css"
function Content() {
  return (
    <div >
      <h1 align='center'>Traine Form </h1>
       <form>
      <table align='center' width='800' height='600'>
        <tr>
          <td><label><h5>Name :</h5></label></td>
          <td><input type="text" name="t1" id="f1"/><br></br></td> 
        </tr>
        <tr>
          <td><label>Nick name :</label></td>
          <td><input type="text" name="t1" id="f1"/><br></br></td> 
        </tr>
        <tr>
          <td><label>Age :</label></td>
           <td><input type="number" name="t2" id="f2"/><br></br></td> 
        </tr>
        <tr>
          <td><label>Enter blood group:</label></td>  
          <td><input type="text" name="t3" id="f3"/><br></br></td>  
        </tr><tr>
           <td><label>Enter phno  :</label></td>  
           <td><input type="number" name="t2" id="f2"/><br></br></td>  
        </tr><tr>
            <td>Describe your view on fitness:</td>
           <td><textarea rows={5} column={20} placeholder='your view'></textarea></td>
       </tr>
       <tr>
         <td>Select Body type:</td>
          <td>
          <select>
                    <option value="Type" length="80">Body Type</option>
                    <option value="Triangle shape">Triangle shape</option>
                    <option value="Inverted Triangle">Inverted Triangle</option>
                    <option value="Rectangle">Regtangle</option>
                    <option value="Diamond">Diamond</option>
                    <option value="Rounded">Rounded</option>
          </select>
          </td>
       </tr>
       <tr>
          <td>Gender</td>
          <td><input type="radio" />Male</td>
          <td><input type="radio" />Female</td>
        </tr>
  </table>
  </form>
  </div>
  )
}

export default Content