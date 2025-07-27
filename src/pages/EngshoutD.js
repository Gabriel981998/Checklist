import React from 'react'
import '../App.css'
import { Link } from 'react-router';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const LIST_DATA=[
  {id:"1" ,value:"Electrical Power.........................APU or GROUND"},
  {id:"2" ,value:"Bleed Panel.....................SET AS SHOWN BELOW"},
  {id:"3" ,value:"Fuel Cutoff Levers.....................CUTOFF"},
  {id:"4" ,value:"Anti-Collision Lights......................................OFF"},
  {id:"5" ,value:"Passenger Signs .....................OFF"},
  {id:"6" ,value:"Fuel Pump Switches.........................OFF"},
  {id:"7" ,value:"Electrical Panel.................................CHECK/SET"},
  {id:"8" ,value:"Window Heat Switches...................................OFF"},
  {id:"9" ,value:"Hydraulic Pumps ........................OFF"},
  {id:"10" ,value:"Exterior Lights..................................AS NEEDED"},
  {id:"11" ,value:"Flight Director Switches .....................OFF"},
  {id:"12" ,value:"Chocks In Position..............PARKING BRAKE OFF"},
  {id:"13" ,value:"IRS Selector Switches.......................OFF"},
  {id:"14" ,value:"Emergency Exit Lights.................OFF/UNGARDED"},
  {id:"15" ,value:"Exterior Lights.............................................OFF"},
  {id:"16" ,value:"Bleed Air Panel..............................................SET"},
  {id:"17" ,value:"Engine Start Selector...................................BOTH"},
  {id:"18" ,value:"APU or GRD Power...............OFF or DISCONNECT"},
  {id:"19" ,value:"DC/AC Selectors.................................STBY PWR"},
  {id:"20" ,value:"Battery Switch..............................................OFF"},

  



];



const handleSelect=(event)=>{}
const EngShoutD = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <h1 className='Firstheader'>Boeing 737 - NG Series Flow/Checklist</h1>
          <p className='title'>ENGINE SHOUTDOWN/SECURING AIRCRAFT</p>
          <div className='Arrowsplite'>
            <div className='arrowseparet'>
            <div>


         <a className='Link' href='/taxitogate'>    <  FaArrowAltCircleLeft className='arrow' /></a>
   


   </div>
   <div>

<a className='Link' href='/'> < FaArrowAltCircleRight  className='arrow'/></a>
   


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
        <li className='Link'><a className='Link' href='/'>BACK HOME</a></li>
      </ul>
    </div>
  )
}

export default EngShoutD
