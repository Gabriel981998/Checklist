import React from 'react'
import '../App.css'
import { Link } from 'react-router';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const LIST_DATA=[
  {id:"1" ,value:" Bleed Air Panel...................................AUTO"},
  {id:"2" ,value:"Pressurization Panel......................LAND ALT ____"},
  {id:"3" ,value:"Passenger Signs .....................ON"},
  {id:"4" ,value:"Auto Brake Selector.......................................SET"},
  {id:"5" ,value:"Flight Instruments & Radios............................SET"},
  {id:"6" ,value:"Altimeters ..............SET LOCAL QNH"},
  {id:"7" ,value:"Recall..........................PUSH/CHECK"},
  {id:"8" ,value:"Landing Data..............____VREF/____MINIMUMS"},
  {id:"9" ,value:"Exterior Lights.................................CHECK/SET"},
  {id:"10" ,value:"Engine Start Switches......................CONT"},
  {id:"11" ,value:"EFIS Panel ..........................SET TERR"},

  



];



const handleSelect=(event)=>{}
const Descent= () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <h1 className='Firstheader'>Boeing 737 - NG Series Flow/Checklist</h1>
          <p className='title'>18,000KDESCENT/10,000K DESCENT</p>
          <div className='Arrowsplite'>
            <div className='arrowseparet'>
            <div>


         <a className='Link' href='/transition'>    <  FaArrowAltCircleLeft className='arrow' /></a>
   


   </div>
   <div>

<a className='Link' href='/Final'> < FaArrowAltCircleRight  className='arrow'/></a>
   


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
        <li className='Link'><a className='Link' href='/Final'>FINAL APPROACH</a></li>
      </ul>
    </div>
  )
}

export default Descent
