import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function About() {

  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <>
     <Navbar />
     <div>
      <h1>About</h1>
     </div>
     <Footer />
    </>
  )
}

export default About