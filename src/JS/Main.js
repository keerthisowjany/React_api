import React from 'react'
import './Main.css'
function Main(){
  return(
    <div>
        <br></br>
       <center> <h1 style={{color:'rgb(128,0,128)'}}>Welcome to SEVEN FIT </h1><h4>Exercises</h4></center>
    <div className="anime-trending-page">
    </div>
    <div className='anime-list'></div>
    <table align='center'>
      <tr>
        <td>
        <div className="anime-card">
        <img src="https://th.bing.com/th/id/OIP.IrmiqthSDgz1cfDWvhXXwgHaE8?w=285&h=190&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Boxing"  />
        <h4>Boxing</h4>
        <p align="justify">Boxing is good for health it makes the body fit and makes the musles fit and healthy.Most boxing for good fitness of the people dont prefer.Improved heart health, body composition, and strength.Lowered blood pressure </p>
      </div>
        </td>
      <br/><br/><br/><br/><td>
      <div className="anime-card">
        <img src="https://th.bing.com/th/id/OIP.TN8kidnd_1MEzMtfLxRTdgHaE7?w=268&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Yoga" />
        <h4>Yoga</h4>
        <p align="justify">A disease-free body, a violence-free society, a confusion-free mind, an inhibition-free intellect, a trauma-free memory, a sorrow-free soul and a quiver-free breath is the impact that yoga can make in your life.</p>
      </div>
      </td>
      <td>
      <div className="anime-card">
        <img src="https://th.bing.com/th/id/OIP.lU1dwiD9AFwe0S_lOfLHCAHaET?w=309&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Zumba" />
        <h4>Zumba</h4>
        <p align="justify">Burning stubborn belly fats.Reducing body weight.Improving sleep quality.Widening your circle of friends.Relieving stress.Boosting your heart health.Improving your cardiovascular fitness.Improving your strength and flexibility</p>
      </div>
      </td>
      </tr>
      </table>
      <table align="center">
      <tr>
      <td>
      <div className="anime-card">
        <img src="https://th.bing.com/th/id/OIP.GiOzQtv03GF3LfEBdFPXVQHaE8?w=265&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Gym" />
        <h4>Gym</h4>
        <p align="justify">Going to the gym every day can help improve your cardiovascular system, strengthen your muscles, help you maintain your weight, boost your mental health and decrease the odds that you'll develop other health conditions.</p>
      </div>
      </td>
      <td>
      <div className="anime-card">
        <img src="https://th.bing.com/th/id/OIP.DHMZwOfAzBPS9ISqs7ppFAHaE5?w=240&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Indoor Climbing" />
        <h4>Indoor climbing</h4>
        <p align="justify">Think Trad Climbing multiplied with immense difficulty. While not the most common form of climbing, big wall climbing is arguably the most notorious. It utilizes long multi-pitch routes along the vertical rocks.</p>
      </div>
      </td>
      </tr>
      </table>
    </div>
    
  );
}
export default Main
