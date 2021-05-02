import React from 'react';

const Contact = () => {
    return (
        <section style={{backgroundColor:'#F9F9FF'}} className='container-fuild py-5'>
            <div className="container py-5">
                <h1 className='text-center'>Get In Touch</h1>
                <div className="d-flex justify-content-center">
                    <form className='col-md-4'>
                        <input className ='w-100 my-2 p-2' placeholder='name' type="text" />
                        <input className ='w-100 my-2 p-2' placeholder='email' type="email" />
                        <textarea className ='w-100 my-2 p-2' placeholder='meassage' type="textই" />
                        <input type="submit" value="Send" className='w-25 btn btn-danger'/>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;