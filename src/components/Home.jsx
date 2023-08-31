import React from 'react';
import "../style/home.scss";
import fel from "../assets/fel.png";
import 'animate.css';


function Home() {
  return (
    <>
     <div className="container-fluid " style={{ backgroundImage: `url("./src/assets/background-img.png")`,
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      height: "82vh" }}>
      <div className="row ">
        <div className="col-12 col-md-6">
          <h1 className="hi-there animate__animated animate__zoomIn animate__delay-2s">Hi There!</h1>
          <h1 className='text-center name animate__animated animate__zoomIn animate__delay-2s'><span className='im'>I'm</span> Roldan Feliciano</h1>
          <h1 className='text-center name animate__animated animate__zoomIn animate__delay-2s'><span className='im'>A Full-Stuck Web Developer</span></h1>
          <h5 className='text-center creating animate__animated animate__zoomIn animate__delay-2s'>"Creating interactive and user-friendly web applications. Expertise in front-end development,
            back-end programming, and data management. Deliver high-quality solutions that meets clients needs.
            Please feel free to explore my portfolio."
          </h5>
          <div  className='text-center about-me'>
            <button className='rounded-3 animate__animated animate__zoomIn animate__delay-2s'><span className='p-5 fs-2'>About Me</span></button>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <img src={ fel } alt="Dan-Photo" width="645" className='fel-img animate__animated animate__fadeInLeftBig animate__delay-1s'/>
        </div>
      </div>
     </div>
    </>
  )
}

export default Home