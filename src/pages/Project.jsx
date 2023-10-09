import React, { useEffect } from 'react';
import steadfastness1 from "../assets/photos/steadfastness1.png"
import travelBlog from "../assets/photos/travelBlog.png"
import "/src/style/project.scss";
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';




function Project() {

  useEffect(() => {
    document.title = "Project";
  }, []);

  return (
    <>
      <Navbar />
      <div className='main-background'>
        <div className='d-flex justify-content-center'>
          <div className='col-12 col-md-10 col-sm-9'>
            <div className='d-flex justify-content-center'>
              <div className='col-10'>
                <div className='about-margin'>
                  <h1 className='about-portfolio text-center'>PROJECT</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </div>
      <Footer />
    </>
  )
}

export default Project