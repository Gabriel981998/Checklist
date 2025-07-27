import React from 'react'
import '../App.css'
import { Link } from 'react-router';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const LIST_DATA=[
  {id:"1" ,value:" Auto Pilot...........................................ENGAGE"},
  {id:"2" ,value:"Attendant Notification.......................COMPLETE"},
  {id:"3" ,value:"Cabin Pressurization & Temp................MONITOR"},
  {id:"4" ,value:"Engine Bleeds...................................ON"},
  {id:"5" ,value:"Pack Switches.............................AUTO"},
  {id:"6" ,value:"APU..........................................................OFF"},
  {id:"7" ,value:"Exterior Lights.................................AS NEEDED"},
  {id:"8" ,value:"Auto Brake Selector......................................OFF"},
  {id:"9" ,value:"Landing Gear Lever.............................UP & OFF"},
  {id:"10" ,value:"Altimeters..................SET 29.92/1013"},
  {id:"11" ,value:"Passenger Signs.............................AS REQUIRED"},

  



];



const handleSelect=(event)=>{}
const Transition= () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <h1 className='Firstheader'>Boeing 737 - NG Series Flow/Checklist</h1>
          <p className='title'>10,000K CLIM/TRANSITION ALT/CRUISE</p>
          <div className='Arrowsplite'>
            <div className='arrowseparet'>
            <div>


         <a className='Link' href='/Beforetakeoff'>    <  FaArrowAltCircleLeft className='arrow' /></a>
   


   </div>
   <div>

<a className='Link' href='/Descent'> < FaArrowAltCircleRight  className='arrow'/></a>
   


   </div>
            </div>
   
  

   <div>


   </div>

          </div>
        </div>
        <div className='card-body'>
          {
            LIST_DATA.map((item)=>{
              return(
                <div key={item.id} className='checkbox-container'>
                    <label for={item.id}>{item.value}

</label>
                  <input className='checkbox' type='checkbox' name='languages' id={item.id} value={item.value} onChange={handleSelect}/>
                
                  </div>
              )
            })
          }

        </div>

      </div>
      <ul>
        <li className='Link'><a className='Link' href='/Descent'>DESCENT 18,000K/10,000K</a></li>
      </ul>
    </div>
  )
}

export default Transition
