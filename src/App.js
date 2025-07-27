import React from 'react'
import './App.css'
import { Link } from 'react-router';
import { FaArrowAltCircleLeft, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";


const LIST_DATA=[
  {id:"1" ,value:"Dispatch / Load Sheet..........................ACQUIRED"},
  {id:"2" ,value:"DC Voltmeter Selector...................................BAT"},
  {id:"3" ,value:"DC Battery Switch..........................ON/GUARDED"},
  {id:"4" ,value:"Standby Power Switch.................AUTO/GUARDED"},
  {id:"5" ,value:"Alternate Flaps.............................OFF/GUARDED"},
  {id:"6" ,value:"Fuel Pump Switches........................OFF"},
  {id:"7" ,value:"Wipers.......................................PARK"},
  {id:"8" ,value:"Hydraulic Pumps .......................OFF"},
  {id:"9" ,value:"Landing Gear Lever..................DOWN"},
  {id:"10" ,value:"Weather Radar..........................................TEST"},
  {id:"11" ,value:"Fire Warning System.............TEST"},
  {id:"12" ,value:"Ground Power or APU.........................CONNECT"},
  {id:"13" ,value:"AC Voltmeter Selector................GRD PWR or APU"},
  {id:"14" ,value:"Electrical Panel.................................CHECK/SET"},
  {id:"15" ,value:"IRS Selector Switches ............ALIGN/NAV"},
  {id:"16" ,value:"Emergency Exit Lights..............................ARMED"},
  {id:"17" ,value:"Air Conditioning Panel....................AS REQUIRED"},
  {id:"18" ,value:"CDU........................ENTER PRESENT POSITION"},
  {id:"19" ,value:"Flaps Lever Up.........................VERIFY POSITION"},
  {id:"20" ,value:"Parking Brake.............SET"},
  {id:"21" ,value:"Exterior Lights...........................SET AS NEEDED"},




];



const handleSelect=(event)=>{}
const App = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
        <h1 className='Firstheader'>Boeing 737 - NG Series Flow/Checklist</h1>
        <p className='title'>Originator Flight</p>
          <div className='Arrowsplite'>
            <div className='arrowseparet'>
            <div>


         <a className='Link' href='/'>    <  FaArrowAltCircleLeft className='arrow' /></a>
   


   </div>
   <div>

<a className='Link' href='/Preflight'> < FaArrowAltCircleRight  className='arrow'/></a>
   


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
                  <input   className='checkbox' type='checkbox' name='languages' id={item.id} value={item.value} onChange={handleSelect}/>
                
                  </div>
              )
            })
          }

        </div>

      </div>
      <ul>
        <li className='Link'><a className='Link' href='/Preflight'>PREFLIGHT</a></li>
      </ul>
    </div>
  )
}

export default App
