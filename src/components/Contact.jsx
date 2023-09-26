import { Alert, Grid } from "@mui/material";
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [isAlertVisible, setAlertVisible] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        if (!form.current.user_name.value || !form.current.user_email.value) {
            return alert('Missing Username or Email');
        }

        emailjs.sendForm('service_dizlvrd', 'template_96ab9om', form.current, 'fowezKvW3aYsmYvHl')
            .then((result) => {
                console.log(result.text);
                e.target.reset();
                setAlertVisible(true); // Show the alert when email is successfully sent
            }, (error) => {
                console.log(error.text);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <Grid container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around' }}>
                <Grid item style={{marginBottom: '10%'}}>
                    <img src="src/assets/images/email.gif" alt="Clipboard" width={'300px'}></img>
                </Grid>
                <Grid item style={{ marginTop: '3%' }}>
                    <form style={{ display: 'flex', flexDirection: 'column', fontSize: '24px', textAlign: 'left', color: 'white' }} ref={form} onSubmit={sendEmail}>
                        <label>Your Name:</label>
                        <input type="text" name="user_name" />
                        <label>Your Email:</label>
                        <input type="email" name="user_email" />
                        <label>Message:</label>
                        <textarea name="message" />
                        <input style={{ marginTop: '5%', marginBottom: '5%', backgroundColor: 'black', color: 'white', border: 'solid white' }} type="submit" value="Send Info" />
                    </form>
                </Grid>
            </Grid>
            {isAlertVisible && (
                <Alert severity="success" onClose={() => setAlertVisible(false)}>
                    Email Successfully Sent!
                </Alert>
            )}
        </>
    )
};

export default Contact;
