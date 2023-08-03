import React from 'react';
//import BookAppointment from './BookAppointment';
import "../MyComponents/doctor.css"

export const Doctor_Details = ({doct , onBook}) => {
  return (
    <div className="menuItem text-center card">
        <div >
        <p className='setimage'>{doct.image}</p>
         <h4>{doct.nameD}</h4>
         <p>{doct.speciality}</p>
         <p>{doct.location}</p>
         <p>{doct.availability}</p>
            <button className="btn btn-sm btn-danger" onClick={onBook}>Book Appointment</button>  
        </div>
         
    </div>
  )
}

//export default Doctor_Details
