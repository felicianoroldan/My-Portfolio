import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Contact() {

  useEffect(() => {
    document.title = "Contact";
  }, []);
  return (
    <>
     <Navbar/>
     <div>
       <h1>Contact</h1>
     </div>
     <Footer/>
    </>
  )
}

export default Contact