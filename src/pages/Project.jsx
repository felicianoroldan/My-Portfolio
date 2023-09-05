import React, { useEffect } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Project() {

  useEffect(() => {
    document.title = "Project";
  }, []);

  return (
    <>
    <Navbar/>
    <div>
      <h1>Project</h1>
    </div>
    <Footer/>
    </>
  )
}

export default Project