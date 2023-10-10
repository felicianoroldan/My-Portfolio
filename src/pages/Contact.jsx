import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "/src/style/contact.scss";
import { PiMapPinLineFill } from "react-icons/pi";
import { AiFillPhone } from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";




function Contact() {

  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <>
     <Navbar/>
     <div className="contact-background">
      <div className="container-lg text-center">
        <div className="row d-flex justify-content-center">
          <div className="col-12 col-md-6 col-lg-6">
            <h1 className='text-center contact-portfolio mt-4'>Get in Touch</h1>
            <p className='dev-text'>If you have questions or would like to connect, please don't hesitate to reach out. 
              You can find my contact information below. I look forward to hearing from you!
            </p>
            <div className="col-10 text-start">
              <a href=""><PiMapPinLineFill size={30} className='text-warning' /></a><span className='text-warning text-center'>Home Address</span>
              <p className='dev-text text-light text-start ms-4'>123 Camellia rd, Camella Homes, Talon 2, Las Pinas City, Philippines</p>

              <a href=""><AiFillPhone size={30} className='text-warning' /></a><span className='text-warning text-center'>Phone</span>
              <p className='dev-text text-light text-start ms-4'>+63-995-942-2120</p>

              <a href="mailto:roldan.feliciano12@gmail.com"><HiOutlineMailOpen size={30} className='text-warning' /></a><span className='text-warning text-center'>Email</span>
              <p className='dev-text text-light text-start ms-4'><a href="mailto:roldan.feliciano12@gmail.com" className='email'>roldan.feliciano12@gmail.com</a></p>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-6 d-flex justify-content-center mt-4">
            <form className='message-container rounded-3 mb-3 '>
              <h4 className='mt-4 text-warning Leave '>Leave a Message</h4>
              <div className="d-flex justify-content-center ">
                <div className="form-floating mb-3 w-75">
                  <input type="text" className="form-control bg-transparent text-white" id="validationCustom01 bg-transparent" placeholder='Mark Santos' required/>
                  <label for="validationCustom01" className="form-label bg-transparent"><span className='text-warning'>Name</span></label>
                </div>
              </div>
              <div className="d-flex justify-content-center ">
                <div className="form-floating mb-3 w-75">
                  <input type="email" className="form-control bg-transparent text-white pb-0 border-1 border-bottom" id="floatingInput" placeholder="name@example.com" required/>
                  <label for="floatingInput"><span className='text-warning'>Email Address</span></label>
                </div>
              </div>
              <div className="d-flex justify-content-center ">
                <div className="form-floating w-75">
                  <textarea className="form-control bg-transparent text-white pb-0 border-1 border-bottom" placeholder="Leave a comment here" id="floatingTextarea"  style={{height:'10rem'}} required></textarea>
                  <label for="floatingTextarea"><span className='text-warning'>Message</span></label>
                </div>
              </div>
              <button className="btn btn-warning send-button text-dark mt-5 fw-semibold" type="submit" fdprocessedid="lcgwqr">Send a message</button>
            </form>
          </div>
        </div>
      </div>
     </div>
     <Footer/>
    </>
  )
}

export default Contact