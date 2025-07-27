import React from 'react'
import '../App.css'
import { Link } from 'react-router';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const LIST_DATA=[
  {id:"1" ,value:"Exterior Lights..................................AS NEEDED"},
  {id:"2" ,value:"APU ....................START"},
  {id:"3" ,value:"Yaw Damper Switch.....................................OFF"},
  {id:"4" ,value:"Window Heat Switches........................AS NEEDED"},
  {id:"5" ,value:"Probe Heat Switches ................................OFF"},
  {id:"6" ,value:"Engine and Wing Anti-Ice...............................OFF"},
  {id:"7" ,value:"Engine Start Switches.............AS NEEDED"},
  {id:"8" ,value:"Auto Brake..................................................OFF"},
  {id:"9" ,value:"Speed Brake.............................................DOWN"},
  {id:"10" ,value:"Flaps..........................UP"},
  {id:"11" ,value:"Weather Radar...........................................TEST"},
  {id:"12" ,value:"Parking Brake.............SET"},
  {id:"13" ,value:"Transponder..........................STBY"},
  



];



const handleSelect=(event)=>{}
const Taxitogate = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <h1 className='Firstheader'>Boeing 737 - NG Series Flow/Checklist</h1>
          <p className='title'>TAXI TO GATE/GATE ARRIVAL</p>
          <div className='Arrowsplite'>
            <div className='arrowseparet'>
            <div>


         <a className='Link' href='/Final'>    <  FaArrowAltCircleLeft className='arrow' /></a>
   


   </div>
   <div>

<a className='Link' href='/engineShoutdown'> < FaArrowAltCircleRight  className='arrow'/></a>
   


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
        <li className='Link'><a className='Link' href='/engineShoutdown'>ENGINE SHUTDOWN/SECURING AIRCRAFT</a></li>
      </ul>
    </div>
  )
}

export default Taxitogate
