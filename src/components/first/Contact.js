import React from 'react'

export default function Contact(props) {
    const handleClick = (e) => {
        e.preventDefault();
        props.showAlert("Form Submitted", "success");
    }
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center mb-5">
                    <div className="col-lg-4 bg-warning p-5 rounded border border-dark">
                        <h1>Contact Us First</h1>
                        <form className='mt-5' onSubmit={handleClick}>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input type="text" className="form-control" id="name" name='name' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input type="email" className="form-control" id="email" name='email' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="contact" className="form-label">Contact</label>
                                <input type="text" className="form-control" id="contact" name='contact' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea className="form-control" id="message" name='message'></textarea>
                            </div>
                            <button type="submit" className="btn btn-dark">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
