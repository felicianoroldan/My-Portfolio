import React, { useEffect } from "react";
import "/src/style/home.scss";
import fel from "/src/assets/photos/fel.png";
import "animate.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Home() {

  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <Navbar />

      <div className="container-fluid main-background">
        <div className="row">
          <div className="col-12">
            <div className="container-fluid">
              <div className="row ">
                <div className="col-7 col-md-7 col-md-7 animate__animated animate__zoomIn animate__delay-1s">
                  <div className="box-1">
                    <h1 className="hi-there"><span className="hiThere">HI THERE!</span></h1>
                    <h1 className="name text-center"><span className="im">I'M</span> <span className="full-name">ROLDAN FELICIANO</span></h1>
                    <h4 className="fullstack text-center"><span className="webDev">FULLSTACK WEB DEVELOPER</span></h4>
                    <p className="about text-center"><span className="creating">"Creating interactive and user-friendly web applications.
                      Expertise in front-end development, back-end programming, and data
                      management. Deliver high-quality solutions that meets clients
                      needs. Please feel free to explore my portfolio."</span></p>
                    <div className=" about-me text-center animate__animated  animate__pulse animate__infinite">
                      <button className="rounded-3 aboutMeColor animate__animated animate__zoomIn animate__delay-2s">
                        <span className="p-3 fw-semibold me-about">About Me</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-5 col-md-5 col-sm-5 fel-img text-end">
                  <img
                    src={fel}
                    alt="Dan-Photo"
                    width="600"
                    className="fel-img animate__animated animate__fadeInLeftBig animate__delay-1s"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
