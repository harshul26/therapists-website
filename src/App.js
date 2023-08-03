//import logo from './logo.svg';
import './App.css';

import Header from "./MyComponents/Header";
import {Footer} from "./MyComponents/Footer";
import {Therapists} from "./MyComponents/Therapists";
import {BrowserRouter as Router , Route , Switch } from "react-dom";
import React , {useState , useRef} from 'react';
import ReactDOM from 'react-dom/client';
import BookingForm from "./MyComponents/BookingForm";
import img1 from './images/dr-suman/suman.jpeg';
import img2 from './images/dr-malvika/Dr-Neeraj.jpeg';
import img3 from './images/New folder/Endocrinology-AtulSharma-Jammu-bb400f.png';
import {Reviwes} from './MyComponents/Reviwes';

function App() {
  const [formHidden, setState] = useState(false)
  const ref = useRef(null);
  function onBook() { 
    setState(true)
    }
    

  let doctors = [

    {
      image : <img src={img1} alt="" /> ,
      nameD: "Dr. Suman",
      speciality: "Gynecologist/Obstetrician",
      location: "Shastri Nagar , New Delhi",
      availability: "Mon - Sat (09: 30 AM - 03:00 PM)"
    },
    {
      image: <img src={img2} alt="" />,
      nameD: "Dr. Malvika Sabharwal",
      speciality: "Dietitian/Nutrition",
      location: "Karol Bagh , New Delhi",
      availability: "Mon - Fri (10:00 AM - 08:00 PM)"
    },
    {
      image: <img src={img3} alt="" />,
      nameD: "Dr. Dheeraj Setia",
      speciality: "Dentist",
      location: "Panchsheel Park, Delhi",
      availability: "Mon-Fri (10:00 AM - 02:00 PM & 04:00 PM - 08:00 PM) "
    }

  ]
  return (
    <>
      <Header title="Therapy Session" searchBar= {true} />
      <Therapists doctors = {doctors} onBook = {onBook}/>
      <br />
      <Reviwes/>
      {formHidden && <BookingForm/>}
      <Footer/>
    </>
  );
}

export default App;

