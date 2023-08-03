import React from 'react'

import {Doctor_Details} from "../MyComponents/Doctor_Details";
import "../MyComponents/doctor.css"

export const Therapists = (props) => {
  return (
    <div className="container menu">
        <h2 className= "menuTitle text-center my-3" >Doctors near by you</h2>
        <div className="menuList">
         {props.doctors.map((doct) => {
           return <Doctor_Details doct={doct} onBook = {props.onBook} />
         })}
        </div>
    </div>
  )
}

//export default Therapists

