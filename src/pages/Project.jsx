import React, { useEffect } from 'react';
import Screenshot from "../assets/photos/Screenshot.png"
import exploredia from "../assets/photos/exploredia.png"
import portfolio from "../assets/photos/portfolio.png"
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
      <div className='project-background'>
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
        <div className="d-flex justify-content-center">
          <div className="container mt-5">
            <div className="row ms-2 d-flex justify-content-center">
              <div className="col-11 col-md-5 col-sm-5 d-flex justify-content-center">
                <a href="https://stead-fastness.vercel.app/"><img src={Screenshot} alt="steadfastness-photo" className='steadfastnessphoto img-fluid'/></a>
              </div>
                <div className='col-11 col-md-5 col-sm-5 '>
                  <p className='text-dark text-center htmlcssbootstrap fw-semibold'>HTML, CSS & BOOTSTRAP</p>
                  <p className='dev-text project-steadfastness text-center'><span className='travelmean'>Steadfastness</span> is a friendly website that can help 
                    those who want to become physically and mentally fit.
                  </p>
                </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="container mt-5">
            <div className="row ms-2 d-flex justify-content-center">
              <div className="col-11 col-md-5 col-sm-5 d-flex justify-content-center">
                <a href="https://exploredia.vercel.app/"><img src={exploredia} alt="steadfastness-photo" className='steadfastnessphoto img-fluid'/></a>
              </div>
              <div className='col-11 col-md-5 col-sm-5 '>
                <p className='text-dark text-center htmlcssbootstrap fw-semibold'>HTML, CSS/SASS, BOOTSTRAP, & JAVASCRIPT</p>
                <p className='dev-text project-steadfastness text-center'><span className='Exploredia'>Exploredia</span> Exploredia is a comprehensive country and travel guide that allows you to choose any country worldwide and provides key information, including flags, capitals, currencies, and population.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="container mt-5 ">
            <div className="row ms-2 d-flex justify-content-center">
              <div className="col-11 col-md-5 col-sm-5 d-flex justify-content-center portfolio ">
                <a href="https://my-portfolio-lilac-mu-56.vercel.app/"><img src={portfolio} alt="steadfastness-photo" className='steadfastnessphoto img-fluid'/></a>
              </div>
              <div className='col-11 col-md-5 col-sm-5 '>
                <p className='text-dark text-center htmlcssbootstrap fw-semibold'>HTML, CSS/SASS, BOOTSTRAP, JAVASCRIPT, & REACTJS</p>
                <p className='dev-text project-steadfastness text-center'>Designed and developed a responsive portfolio website Bootstrap and ReactJs.</p>
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