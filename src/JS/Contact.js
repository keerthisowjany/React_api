
const Contact = () => {
  return (
    <div>
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <center>
            <h2 style={{color:'rgb(186,85,211)'}}>INFORMATION</h2>
            
        <table width="800" height="200" border={1}>
            <tr>
                <td><b>Address:</b></td>
                <td>SEVEN FIT,DNR road,gandhi street,vij</td>
                
            </tr>
            <tr>
                <td><b>Main Trainee phno:</b></td>
                <td>1234567892</td>
            </tr>
            <tr>
                <td rowSpan={3}><b>coach list:</b></td>
                <td>K.Raj shekhar</td>
                
            </tr>
            <tr>
            <td>K.kamala devi</td>
            </tr>
            <tr>
            <td>V.phani Kumar</td>
            </tr>
            <tr>
                <td rowSpan={3}><b>Timing:</b></td>
                <td>Dance(1:00pm to 3:pm)</td>
                
            </tr>
            <tr>
            <td>Zumba(4:00pm to 7:00pm)</td>
            </tr>
            <tr>
            <td>Yoga and Boxing(5pm to 7:00pm)</td>
            </tr>
        </table>
        </center>
    </div>
  )
}

export default Contact