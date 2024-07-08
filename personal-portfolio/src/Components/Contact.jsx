import {React, useRef} from 'react'
import emailjs from '@emailjs/browser';
import '../Styles/Contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_kb51hjh', 'template_30ex7zm', form.current, {
            publicKey: 'wa-AT3XPLUQFj5AQB',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

  return (
    <section id="contact">
        <div className="contact-box"  >
            <h2>Contact Me</h2>
            <form ref={form} onSubmit={sendEmail}>
                <div className="form-group">
                    <label htmlFor="name" >Name</label>
                    <input type="text" id="name" name="user_name" placeholder='John Doe' required/>
                </div>
                <div className="form-group">
                    <label htmlFor="email" >Email</label>
                    <input type="email" id="email" name="user_email" placeholder='johndoe@example.com' required/>
                </div>
                <div className="form-group" >
                    <label htmlFor="message">Message</label>
                    <textarea id="message" name="message" placeholder='Write your message here' required></textarea>
                </div>
                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    </section>
  )
}

export default Contact
