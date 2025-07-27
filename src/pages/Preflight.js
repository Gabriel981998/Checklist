import React from 'react'
import '../App.css'
import { Link } from 'react-router';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';


const LIST_DATA=[
  {id:"1" ,value:"LE DEVICES Annunciator Panel....TEST"},
  {id:"2" ,value:"Service Interphone Switch..............................OFF"},
  {id:"3" ,value:"Reverser Annunciators..............EXTINGUISHED"},
  {id:"4" ,value:"EEC Switches................................ON/GUARDED"},
  {id:"5" ,value:"Crew Oxygen.........................CHECK PRESSURE"},
  {id:"6" ,value:"Passenger Oxygen.................GUARDED/NORMAL"},
  {id:"7" ,value:"Flight Recorder.....................................TEST"},
  {id:"8" ,value:"Mach Airspeed Warning .................TEST"},
  {id:"9" ,value:"Stall Warning ................................TEST"},
  {id:"10" ,value:"Landing Gear Position Annunciators..........3 GREEN"},
  {id:"11" ,value:"PSEU Annunciator......................EXTINGUISHED"},
  {id:"12" ,value:"Crew Oxygen...................CHECK FLOW"},
  {id:"13" ,value:"Lights Test.....................CHECK/SET BRT or DIM"},
  {id:"14" ,value:"Flight Control Panel............................CHECK"},
  {id:"15" ,value:"Yaw Damper Switch...................................ON"},
  {id:"16" ,value:"Navigation Panel...................................NORMAL"},
  {id:"17" ,value:"Displays Panel..........................AUTO/NORMAL"},
  {id:"18" ,value:"Fuel Valve Cross Feed........................CHECK/SET"},
  {id:"19" ,value:"Electrical Panel.................................CHECK/SET"},
  {id:"20" ,value:"Equipment Cooling..............NORMAL"},
  {id:"21" ,value:"Emergency Exit Lights.............ARMED/GUARDED"},
  {id:"22" ,value:"Passenger Signs .....................ON"},
  {id:"23" ,value:"Window Heat Switches......PWR & OVHT TEST/ON"},
  {id:"24" ,value:"Probe Heat..........................TEST/OFF"},
  {id:"25" ,value:"Anti Ice Switches ...........CHECKED"},
  {id:"26" ,value:"Hydraulic Pump Switches.......................SET"},
  {id:"27" ,value:"Voice Recorder....................................TEST"},
  {id:"28" ,value:"Cabin Pressurization Panel.......................CHECK"},
  {id:"29" ,value:"Air Conditioning Panel................SET AS NEEDED"},
  {id:"30" ,value:"Bleed Air Control Panel.........................TEST/SET"},
  {id:"31" ,value:"Pressurization Panel.................................SET"},
  {id:"32" ,value:"Exterior Lights..............................AS REQUIRED"},
  {id:"33" ,value:"Ignition Selector Switch....................SET"},
  {id:"34" ,value:"ATIS.........................................OBTAINED"},
  {id:"35" ,value:"Clearance..................................ACQUIRED"},
  {id:"36" ,value:"CDU........................................PROGRAM FMC"},
  {id:"37" ,value:"VHF/NAV Radios........................................SET"},
  {id:"38" ,value:"EFIS Panels............................................SET"},
  {id:"39" ,value:"Mode Control Panel......................................SET"},
  {id:"40" ,value:"Clock..................................................SET"},
  {id:"41" ,value:"Nose Wheel Steering......................NORM/GUARD"},
  {id:"42" ,value:"Main Panel & Lower DU Selectors....CHECK/NORM"},
  {id:"43" ,value:"Auto Flight Annunciators................TEST"},
  {id:"44" ,value:"PFD/ND..................................CHECK/SET"},
  {id:"45" ,value:"Standby Gauges..........................CHECK/SET"},
  {id:"46" ,value:"N1 Set........................................AUTO"},
  {id:"47" ,value:"Speed Ref......................................AUTO"},
  {id:"48" ,value:"Fuel Flow...................................RESET"},
  {id:"49" ,value:"Auto Brake....................................RTO"},
  {id:"50" ,value:"Engine Instruments..............................CHECK"},
  {id:"51" ,value:"Speed Brake Lever..........VERIFY DOWN DETENT"},
  {id:"52" ,value:"Reverse Thrust Levers ....VERIFY DOWN"},
  {id:"53" ,value:"Flaps................................................UP"},
  {id:"54" ,value:"Thrust Levers....FULL FORWARD/FULL CLOSED"},
  {id:"55" ,value:"Parking Brake (Confirm Adequate HYD Pressure).............SET"},
  {id:"56" ,value:"Fuel Cutoff Levers ................CUTOFF"},
  {id:"57" ,value:"Stab Trim Main Elect Cutout..............TEST/SET"},
  {id:"58" ,value:"Fire Bottle Squibs .................TEST"},
  {id:"59" ,value:"Cargo Fire Detection System.........................TEST"},
  {id:"60" ,value:"HGS Control Panel .................AS REQUIRED"},
  {id:"61" ,value:"Transponder................TA/SQUAWK/STBY/TEST"},
  {id:"62" ,value:"Rudder & Aileron Trim......................TEST/ZERO"},
  {id:"63" ,value:"PStabilizer Override Switch..................NORMAL"},
  {id:"64" ,value:"GPWS.................................................TEST"},





];



const handleSelect=(event)=>{}
const Preflight = () => {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <h1 className='Firstheader'>Boeing 737 - NG Series Flow/Checklist</h1>
          <p className='title'>PREFLIGHT</p>
          <div className='Arrowsplite'>
            <div className='arrowseparet'>
            <div>


         <a className='Link' href='/'>    <  FaArrowAltCircleLeft className='arrow' /></a>
   


   </div>
   <div>

<a className='Link' href='/BeforePush'> < FaArrowAltCircleRight  className='arrow'/></a>
   


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
        <li className='Link'><a className='Link' href='/BeforePush'>BEFORE PUSH</a></li>
      </ul>
    </div>
  )
}

export default Preflight
