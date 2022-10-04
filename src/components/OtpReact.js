import React, { useState } from 'react'
import OtpInput from 'react-otp-input-2';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";


const OtpReact = () => {
    const [otp, setOtp] = useState("");

    const verifyOtp = async (e) => {
        e.preventDefault();
        if (otp === "" || otp === null || otp.length !== 6) return
        console.log({ otp });
        console.log(otp.length);
    };

    return (

        <div className='p-4 box '>

            <p>Validate OTP
                Please enter the OTP (one time password) to verify your account.</p>
            <Form onSubmit={verifyOtp} >
                <Form.Group className="mb-3" controlId="formBasicOtp">
                    <OtpInput
                        inputStyle={{
                            width: '3rem',
                            height: '3rem',
                            margin: '20px 1rem',
                            fontSize: '1rem',
                            borderRadius: 4,
                            border: '2px solid rgba(0,0,0,0.3)',
                        }}

                        value={otp}
                        onChange={setOtp}
                        numInputs={6}
                        separator={<span>-</span>}

                    />
                </Form.Group>

                <Button type="submit" variant="primary">
                    Verify
                </Button>
            </Form >
            <h6>Not received your code? <a href="../App.js">Resend code</a></h6>

        </div >
    )
}

export default OtpReact