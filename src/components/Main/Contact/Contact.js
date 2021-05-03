import emailjs from 'emailjs-com';
import React from 'react';

const Contact = () => {
    function sendEmail(e) {
        e.preventDefault();

        emailjs.sendForm('service_205oakp', 'template_wiqg0lm', e.target, 'user_3u8b0oCowJSsf2w197jHN')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }
    return (
        <section className='container-fuild py-5' id='contact'>
            <div className="container">
                <h1 className='text-center color-brand mb-5'>Get In Touch</h1>
                <div className="d-flex justify-content-center">
                    <form onSubmit={sendEmail} className='col-md-6'>
                        <input className='w-100 my-2 p-2' placeholder='name' type="text" name='name' />
                        <input className='w-100 my-2 p-2' placeholder='email' type="email" name='email' />
                        <textarea className='w-100 my-2 p-2' placeholder='message' type="text" name='message' />
                        <input type="submit" value="Send" className='w-25 btn btn-danger' />
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;