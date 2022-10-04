import React, { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import 'react-phone-input-2/lib/style.css'


const PhoneSignUp = () => {
    const [number, setNumber] = useState("");

    const navigate = useNavigate();

    const sendOtp = async (e) => {
        e.preventDefault();
        console.log(number);
        if (number === "" || number === undefined || number.length <= 4) {
            console.log(number.length);
            return

        }
        else {
            navigate('/OtpReact');
            console.log(number);
        }
    };


    return (
        <>
            <div className='p-4 box'>
                <h1>Login</h1>

                <Form onSubmit={sendOtp} >
                    <Form.Group className="mb-3">
                        <PhoneInput
                            inputProps={{
                                name: 'phone',
                                required: true,
                                autoFocus: true
                            }}
                            country={'in'}
                            value={number}
                            onChange={setNumber}
                            countryCodeEditable={false}
                        />
                    </Form.Group>
                    <div className="button-right">
                        <Link to="/">
                            <Button variant="secondary">Cancel</Button>
                        </Link>
                        &nbsp;
                        <Button className='text-transform: uppercase' type="submit" variant="primary">
                            Send Otp
                        </Button></div>

                </Form>
            </div>

        </>
    )
}

export default PhoneSignUp