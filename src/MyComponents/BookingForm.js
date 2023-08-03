import React, { useState , useRef } from 'react';
import img4 from "../images/Formpic/capture.jpeg"
const BookingForm = () => {
    const [inputs, setInputs] = useState({});
    const ref = useRef(null);
    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        alert("your appointment has been booked");
    }
    const handleClick = () => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <form onClick = {handleClick} onSubmit={handleSubmit} className="padding text-center py-3 columns-3">
                <h1>Book Your appointment</h1>
                <div className="article-container">
                    <div className="article">
                        <img src={img4} alt="Imageforform" height={250} width={250} />
                        <br />
                    </div>
                    <div className='article'>
                        <label for="name" className="column">Enter your name:
                            <input
                                id="name"
                                type="text"
                                name="username"
                                value={inputs.username || ""}
                                onChange={handleChange}
                            />
                        </label>
                        <br /> <br />
                        <label className="column">Enter your Contact:
                            <input
                                type="number"
                                name="contact"
                                value={inputs.contact || ""}
                                onChange={handleChange}
                            />
                        </label>
                        <br /> <br />
                        <label className="text-center">Enter your disease:
                            <input
                                type="text"
                                name="illness"
                                value={inputs.illness || ""}
                                onChange={handleChange}
                            />
                        </label>
                        <br /> <br />
                        <label> Select your time time:
                            <select value={inputs} onChange={handleChange}>
                                <option value="9:00 Am">9:00 </option>
                                <option value="11:00 Am" selected>11:00 Am</option>
                                <option value="5:00 Pm">5:00 Pm</option>
                                <option value="7:00 Pm">7:00 Pm</option>
                            </select>
                        </label>
                        <br /><br />
                        <input type="submit" />
                        <br /><br /> <br /><br /><br />
                    </div>
                </div>
            </form>
        </div>
    )
}

export default BookingForm
