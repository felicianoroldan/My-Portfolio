import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "/src/style/about.scss";
import laptop from "../assets/photos/laptop.png";
import html from "../assets/photos/html.png";
import css from "../assets/photos/css.png";
import Sass from "../assets/photos/Sass.png";
import bootstrap from "../assets/photos/bootstrap.png";
import Js from "../assets/photos/Js.png";
import react from "../assets/photos/react.png";
import createweb from "../assets/photos/createweb.png";
import webmaintenance from "../assets/photos/webmaintenance.png";







function About() {

  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <>
     <Navbar />
    <div className="container-fluid text-center main-background backg-stretch">
      <div className='d-flex justify-content-center'>
        <div className='col-12 col-md-10 col-sm-9'>
          <div className='d-flex justify-content-center'>
            <div className='col-10'>
              <div className='about-margin'>
                <h1 className='about-portfolio'>ABOUT</h1>
              </div>
              <p className='dev-text text-center'>I'm a junior web developer passionate about creating interactive and visually appealing websites. 
                Proficient in HTML, CSS, Sass, javascript, and reactjs. I'm dedicated to continuous learning and 
                eager to embrace new technologies. I am excited to contribute my fresh perspective to an innovative 
                team that supports growth and learning.</p>
            </div>
          </div>
        </div>
      </div>
      <div className='hr'>
        <div className='w-75'>
          <hr/>
        </div>
      </div>

      <div className='row d-flex justify-content-center'>
        <div className='col-12'>
          <h1 className='myServices'>MY SERVICES</h1>
        </div>
        <div className='col-9 col-8 mt-5'>
          <div className="row d-flex justify-content-center">
            <div className='col-9 col-md-6 sm-5'>
              <img src={laptop} alt="laptop-photo" className='laptopimg'/>
              <h4 className='develop mt-2'>CREATE WEB APPLICATION</h4>
              <p className='dev-text text-center mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Accusantium odit temporibus ipsam ipsum veniam magni possimus tempora. Asperiores consectetur maiores
              culpa id cupiditate quaerat, minima quos nam doloremque magnam. In?</p>
            </div>
            <div className='col-9 col-md-6 sm-5'>
              <img src={createweb} alt="createweb-photo" className='laptopimg'/>
              <h4 className='develop mt-2'>DEVELOP A WEBSITE</h4>
              <p className='dev-text text-center mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Accusantium odit temporibus ipsam ipsum veniam magni possimus tempora. Asperiores consectetur maiores
              culpa id cupiditate quaerat, minima quos nam doloremque magnam. In?</p>
            </div>
          </div>
        </div>
        <div className='col-10 col-8 mt-5'>
          <div className="d-flex justify-content-center">
            <div className='col-9 col-md-6 sm-4'>
              <img src={webmaintenance} alt="webmaintenance-photo" className='laptopimg'/>
              <h4 className='develop mt-2'>WEBSITE MAINTENANCE</h4>
              <p className='dev-text text-center mt-4'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
              Accusantium odit temporibus ipsam ipsum veniam magni possimus tempora. Asperiores consectetur maiores
              culpa id cupiditate quaerat, minima quos nam doloremque magnam. In?</p>
            </div>
          </div>
        </div>
      </div>
      <div className='hr'>
        <div className='w-75'>
          <hr/>
        </div>
      </div>
      <div className='col-12'>
        <h1 className='teckSkills'>TECHNICAL SKILLS</h1>
      </div>
      <div className="container">
        <div className="col-10 cardsSpacing">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
              <div className="card techCard bg-dark ms-2">
                <div className="d-flex justify-content-center">
                 <img src={html} className="card-img-top w-50 mt-2" alt="..."/>
                </div>
                <div className="card-body">
                  <h5 className=" develop">HTML</h5>
                  <p className="card-text dev-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                   Accusantium odit temporibus ipsam ipsum veniam magni possimus tempora. Asperiores consectetur maiores</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card techCard bg-dark ms-2">
                <div className="d-flex justify-content-center">
                  <img src={css} alt="css-photo" className="card-img-top w-50 mt-2"/>
                </div>
                <div className="card-body">
                  <h5 className=" develop">CSS</h5>
                  <p className="card-text dev-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                   Accusantium odit temporibus ipsam ipsum veniam magni possimus tempora. Asperiores consectetur maiores</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card techCard bg-dark ms-2">
                <div className="d-flex justify-content-center">
                  <img src={Sass} alt="Sass-photo" className="card-img-top w-50 mt-2"/>
                </div>
                <div className="card-body">
                  <h5 className=" develop">SASS</h5>
                  <p className="card-text dev-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                   Accusantium odit temporibus ipsam ipsum veniam magni possimus tempora. Asperiores consectetur maiores</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card techCard bg-dark ms-2">
                <div className="d-flex justify-content-center">
                 <img src={bootstrap} alt="bootstrap-photo" className='"card-img-top w-50 mt-2"'/>
                </div>
                <div className="card-body">
                  <h5 className=" develop">BOOTSTRAP</h5>
                  <p className="card-text dev-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                   Accusantium odit temporibus ipsam ipsum veniam magni possimus tempora. Asperiores consectetur maiores</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card techCard bg-dark ms-2">
                <div className="d-flex justify-content-center">
                 <img src={Js} alt="Js-photo" className="card-img-top w-50 mt-2"/>
                </div>
                <div className="card-body">
                  <h5 className=" develop">JS</h5>
                  <p className="card-text dev-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                   Accusantium odit temporibus ipsam ipsum veniam magni possimus tempora. Asperiores consectetur maiores</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card techCard bg-dark ms-2">
                <div className="d-flex justify-content-center">
                  <img src={react} alt="react-photo" className="card-img-top w-50 mt-2"/>
                </div>
                <div className="card-body">
                  <h5 className=" develop">REACTJS</h5>
                  <p className="card-text dev-text">Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                   Accusantium odit temporibus ipsam ipsum veniam magni possimus tempora. Asperiores consectetur maiores</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>

      <div className='col-12'>
        <h1 className='teckSkills experience'>EXPERIENCE</h1>
      </div>
      <div className="d-flex justify-content-center mt-4">
        <div className="col-9">
         <p className='develop kbt text-start '>KODEGO BOOTCAMP TRAINING</p>
        </div>
      </div>
      <div className="d-flex justify-content-center mt-3">
        <div className="col-9">
          <p className='respon text-start'>Responsibilities:</p>
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <div className="col-9">
         <p className='dev-text responsetext text-start'>-Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, provident!</p>
        </div>
      </div>
    </div>
     <Footer />
    </>
  )
}

export default About
