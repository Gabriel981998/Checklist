import React from 'react'
import '../App.css'
import { Link } from 'react-router';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const LIST_DATA=[
  {id:"1" ,value:"Zero Fuel Weight................................SET"},
  {id:"2" ,value:"N1s..____/____ REDUCED SET____MAX SET"},
  {id:"3" ,value:"Vspeeds............V1____,VR____,V2____SET"},
  {id:"4" ,value:"Stab Trim................CONFIRMED SET"},
  {id:"5" ,value:"Fuel Pumps.......................AS REQUIRED"},
  {id:"6" ,value:"APU..............................START"},
  {id:"7" ,value:"APU GEN 1 & APU GEN 2.....................ON"},
  {id:"8" ,value:"AC Voltmeter Selector..................APU GEN"},
  {id:"9" ,value:"Set For Gate Departure...........ESTABLISHED"},
  





];



const handleSelect=(event)=>{}
const BeforePush= () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <h1 className='Firstheader'>Boeing 737 - NG Series Flow/Checklist</h1>
          <p className='title'>BEFORE PUSH</p>
          <div className='Arrowsplite'>
            <div className='arrowseparet'>
            <div>


         <a className='Link' href='/Preflight'>    <  FaArrowAltCircleLeft className='arrow' /></a>
   


   </div>
   <div>

<a className='Link' href='/Pushback'> < FaArrowAltCircleRight  className='arrow'/></a>
   


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
        <li className='Link'><a className='Link' href='/Pushback'>PUSHBACK/ENGINE START</a></li>
      </ul>
    </div>
  )
}

export default BeforePush;
