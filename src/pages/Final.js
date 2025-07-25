import React from 'react'
import '../App.css'
import { Link } from 'react-router';


const LIST_DATA=[
  {id:"1" ,value:" Attendant Notification........................COMPLETE"},
  {id:"2" ,value:"Speed Brake...........................................ARMED"},
  {id:"3" ,value:"Landing Gear..............................DOWN/3 GREEN"},
  {id:"4" ,value:"Flaps...................................SET FOR LANDING"},



];



const handleSelect=(event)=>{}
const Final= () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <h1 className='Firstheader'>Boeing 737 - NG Series Flow/Checklist</h1>
          <p className='title'>FINAL APPROACH</p>

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
        <li className='Link'><a className='Link' href='/taxitogate'>TAXI TO GATE</a></li>
      </ul>
    </div>
  )
}

export default Final
