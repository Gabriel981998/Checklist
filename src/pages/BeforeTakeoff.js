import React from 'react'
import '../App.css'
import { Link } from 'react-router';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const LIST_DATA=[
  {id:"1" ,value:" Attendant Notification.......................COMPLETE"},
  {id:"2" ,value:"Exterior Lights.................................AS NEEDED"},
  {id:"3" ,value:"Engine Start Switches .....................CONT"},
  {id:"4" ,value:"Auto Throttle............................................ARM"},
  {id:"5" ,value:"Transponder.................................TA/RA - AUTO"},
  {id:"6" ,value:"Parking Brake...................................RELEASED"},
  {id:"7" ,value:"Throttles...........................ADVANCE TO 40% N1"},
  {id:"8" ,value:"Auto Throttle ..................................TO/GA"},
  {id:"9" ,value:"Positive Rate Of Climb...........................GEAR UP"},
  {id:"10" ,value:"Flaps................................................RETRACT"},

  



];



const handleSelect=(event)=>{}
const Beforetakeoff= () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <h1 className='Firstheader'>Boeing 737 - NG Series Flow/Checklist</h1>
          <p className='title'>BEFORE TAKEOFF</p>
          <div className='Arrowsplite'>
            <div className='arrowseparet'>
            <div>


         <a className='Link' href='/Beforetaxi'>    <  FaArrowAltCircleLeft className='arrow' /></a>
   


   </div>
   <div>

<a className='Link' href='/transition'> < FaArrowAltCircleRight  className='arrow'/></a>
   


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


        <li className='Link'><a className='Link' href='/transition'>10,000K CLIMB/TRANSITION ALT./CRUISER</a></li>
      </ul>
    </div>
  )
}

export default Beforetakeoff
