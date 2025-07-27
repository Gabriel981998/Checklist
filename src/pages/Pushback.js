import React from 'react'
import '../App.css'
import { Link } from 'react-router';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const LIST_DATA=[
  {id:"1" ,value:"Pushback Time.......................................NOTED"},
  {id:"2" ,value:"Bleed Air Panel................................CHECK/SET"},
  {id:"3" ,value:"Start Pressure.................ADEQUATE FOR START"},
  {id:"4" ,value:"Anti Collision Light...................................ON"},
  {id:"5" ,value:"Start Sequence .....................ANNOUNCE"},
  {id:"6" ,value:"Right Engine Start Selector Switch..................GRD"},
  {id:"7" ,value:"Right Engine Start Lever.............IDLE AT 21% N2"},
  {id:"8" ,value:"Left Engine Start Selector Switch.....................GRD"},
  {id:"9" ,value:"Left Engine Start Lever................IDLE AT 21% N2"},
  



];



const handleSelect=(event)=>{}
const Pushback = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <h1 className='Firstheader'>Boeing 737 - NG Series Flow/Checklist</h1>
          <p className='title'>PUSHBACK/START ENGINE START</p>
          <div className='Arrowsplite'>
            <div className='arrowseparet'>
            <div>


         <a className='Link' href='/BeforePush'>    <  FaArrowAltCircleLeft className='arrow' /></a>
   


   </div>
   <div>

<a className='Link' href='/Beforetaxi'> < FaArrowAltCircleRight  className='arrow'/></a>
   


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
        <li className='Link'><a className='Link' href='/Beforetaxi'>BEFORE TAXI</a></li>
      </ul>
    </div>
  )
}

export default Pushback 
