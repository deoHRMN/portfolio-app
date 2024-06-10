import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import Button from'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const ContactForm = () => {

  const [message, setMessage] = useState('');

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_wqmbjec', 'template_ix5b0ps', e.target, 'k_QKbSZNVt7o9xCMn')
      .then((result) => {
        console.log(result.text);
        setMessage('Your message has been sent successfully!');
      }, (error) => {
        console.log(error.text);
        setMessage('Sorry, something went wrong. Please try again later.');
      });
      e.target.reset();
  }

  return (
    <Form className='bg-light text-dark p-3 border shadow' onSubmit={sendEmail}>
        <div className='row'>
            <Form.Group className='mb-3 col-lg-6' controlId='firstName'> 
                <Form.Label className='w-100 text-start text-capitalize'>First Name</Form.Label>
                <Form.Control type='text' name='first_name'required/>
            </Form.Group>
            <Form.Group className='mb-3 col-lg-6' controlId='lastName'> 
                <Form.Label className='w-100 text-start text-capitalize'>Last Name</Form.Label>
                <Form.Control type='text' name='last_name' required/>
            </Form.Group>
        </div>
        <Form.Group className='mb-3' controlId='emailAddress'> 
                <Form.Label className='w-100 text-start text-capitalize'>Email Address</Form.Label>
                <Form.Control type='email' name='email' required/>
        </Form.Group>
        <Form.Group className='mb-3' controlId='textArea'> 
                <Form.Label className='w-100 text-start'>Message</Form.Label>
                <Form.Control as='textarea' rows={3} name='message' required/>
        </Form.Group>
        {message && <p className='alert alert-success'>{message}</p>}
        <Button variant='primary' type='submit'>Send Message</Button>
    </Form>
  )
}

export default ContactForm;