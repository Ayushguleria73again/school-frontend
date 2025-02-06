import { useState } from 'react';
import axios from 'axios';

function Msg() {
    const [data, setData] = useState({
        to: '',
        message: ''
    });

    const handelvalue = (e) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    };

    const submitdata = async (e) => {
        e.preventDefault();

        try {
            // Send `to` and `message` to the backend
            const response = await axios.post("http://localhost:8000/api/send-sms", data, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            // Handle the response
            console.log("Response:", response.data);
        } catch (error) {
            console.error("Error sending SMS:", error);
        }
    };

    return (
        <form onSubmit={submitdata}>
            <input
                type="text"
                name="to"
                placeholder="Phone number"
                value={data.to}
                onChange={handelvalue}
            />
            <input
                type="text"
                name="message"
                placeholder="Message"
                value={data.message}
                onChange={handelvalue}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Msg;
