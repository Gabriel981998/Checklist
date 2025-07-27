import React from 'react'
import '../App.css'
import { Link } from 'react-router';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const LIST_DATA=[
  {id:"1" ,value:"Fuel Cutoff Levers .............IDLE DETENT"},
  {id:"2" ,value:"Engine Generator Switches..............ON"},
  {id:"3" ,value:"AC Voltmeter Selector...................GEN 1 or GEN 2"},
  {id:"4" ,value:"Probe Heat Switches........................ON"},
  {id:"5" ,value:"Engine & Wing Anti Ice..................AS REQUIRED"},
  {id:"6" ,value:"Hydraulic Pump Switches.........................ON"},
  {id:"7" ,value:"Bleed Air Panel................................CHECK/SET"},
  {id:"8" ,value:"Exterior Lights..................................AS NEEDED"},
  {id:"9" ,value:"APU...............................................AS NEEDED"},
  {id:"10" ,value:"Master Caution System...........................RECALL"},
  {id:"11" ,value:"Flaps....................................SET FOR TAKEOFF"},
  {id:"12" ,value:"Transponder.......................................TA/AUTO"},
  {id:"13" ,value:"Weather Radar........................................AUTO"},
  {id:"14" ,value:"Flight Controls...........................FREE & CLEAR"},
  



];



const handleSelect=(event)=>{}
const Beforetaxi = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <h1 className='Firstheader'>Boeing 737 - NG Series Flow/Checklist</h1>
          <p className='title'>BEFORE TAXI</p>
          <div className='Arrowsplite'>
            <div className='arrowseparet'>
            <div>


         <a className='Link' href='/Pushback'>    <  FaArrowAltCircleLeft className='arrow' /></a>
   


   </div>
   <div>

<a className='Link' href='/Beforetakeoff'> < FaArrowAltCircleRight  className='arrow'/></a>
   


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
        <li className='Link'><a className='Link' href='/beforetakeoff'>BEFORE TAKEOFF</a></li>
      </ul>
    </div>
  )
}

export default Beforetaxi
