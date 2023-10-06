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
        <div className="zamb">
          <ul class="nav nav-pills mb-3 " id="pills-tab" role="tablist">
            <li class="nav-item " role="presentation">
              <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="false"><span className='techUsed '>HTML & CSS</span></button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"><span className='techUsed '>BOOTSTRAP</span></button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"><span className='techUsed '>JS</span></button>
            </li>
            <li class="nav-item" role="presentation">
              <button class="nav-link" id="pills-reactjs-tab" data-bs-toggle="pill" data-bs-target="#pills-reactjs" type="button" role="tab" aria-controls="pills-reactjs" aria-selected="false" ><span className='techUsed '>REACTJS</span></button>
            </li>
          </ul>
        </div>
        <div class="tab-content" id="pills-tabContent">
          <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
          <div className="d-flex justify-content-center mt-3 main1">
            <div className="col-10">
              <div className="row">
                <div className="col-7 ">
                  <p className='dev-text travelBlogmeaning mt-3'><span className='travelmean'>Steadfastness</span> is a friendly website that can help 
                    those who want to become physically and mentally fit. 
                    Steadfastness promotes a holistic approach to health, 
                    offering a wide range of resources, including workout routines, 
                    nutritional guidance, and mental wellness tips.</p>
                    <div className='view1'>
                  <a href="https://felicianoroldan.github.io/travel_vlog/">Click me to view</a>
                  </div>
                </div>
                <div className="col-5">
                  <img src={travelBlog} alt="travelBlog-Photo" className='imgtravelblog'/>
                </div>
              </div>
            </div>
          </div>
          </div>
          <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">
            <div className="d-flex justify-content-center mt-5">
              <div className="d-flex justify-content-center"> 
                <div className="col-12">
                  <img src={steadfastness1} alt="steadfastness" className='imgsteadfastness'/>
                  <br />
                  <div className='view fw-semibold'>
                  <a href="https:/stead-fastness.vercel.app/">View</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="container mt-5">
              <div className="d-flex justify-content-center">
                <div className="col-10">
                  <p className='dev-text text-center travelBlogmeaning mt-3'><span className='travelmean'>Steadfastness</span> is a friendly website that can help 
                  those who want to become physically and mentally fit. 
                  Steadfastness promotes a holistic approach to health, 
                  offering a wide range of resources, including workout routines, 
                  nutritional guidance, and mental wellness tips.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">...</div>
          <div class="tab-pane fade" id="pills-reactjs" role="tabpanel" aria-labelledby="pills-reactjs-tab" tabindex="0">...</div>
        </div>
        {/* <div className="d-flex justify-content-evenly">
          <div className="col-12">
            <nav className='mt-2 d-flex justify-content-center'>
              <div className="col-12 zamb d-flex justify-content-center">
                <div className="nav nav-tabs  tabline" id="nav-tab" role="tablist">
                  <button className="nav-link  active" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" type="button" role="tab" aria-controls="nav-profile" aria-selected="false"><span className='techUsed '>HTML/Css</span></button>
                  <button className="nav-link" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true"><span className='techUsed bootstrap'>Bootstrap</span></button>
                  <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" type="button" role="tab" aria-controls="nav-contact" aria-selected="false"><span className='techUsed js'>Js</span></button>
                  <button className="nav-link " id="nav-react-tab" data-bs-toggle="tab" data-bs-target="#nav-react" type="button" role="tab" aria-controls="nav-react" aria-selected="false"><span className='techUsed me-2'>ReactJs</span></button>
                </div>
              </div>
            </nav>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-11">
            <div className="tab-content" id="nav-tabContent">
              <div className="tab-pane fade show active maincontainerstead " id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                <div className="d-flex justify-content-center mt-3 main1">
                  <div className="col-10">
                    <div className="row">
                      <div className="col-7 ">
                        <p className='dev-text travelBlogmeaning mt-3'><span className='travelmean'>Steadfastness</span> is a friendly website that can help 
                          those who want to become physically and mentally fit. 
                          Steadfastness promotes a holistic approach to health, 
                          offering a wide range of resources, including workout routines, 
                          nutritional guidance, and mental wellness tips.</p>
                          <div className='view1'>
                        <a href="https://felicianoroldan.github.io/travel_vlog/">Click me to view</a>
                        </div>
                      </div>
                      <div className="col-5">
                        <img src={travelBlog} alt="travelBlog-Photo" className='imgtravelblog'/>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                <div className="d-flex justify-content-center mt-5">
                  <div className="d-flex justify-content-center"> 
                    <div className="col-12">
                      <img src={steadfastness1} alt="steadfastness" className='imgsteadfastness'/>
                      <br />
                      <div className='view fw-semibold'>
                      <a href="https:/stead-fastness.vercel.app/">View</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container mt-5">
                  <div className="d-flex justify-content-center">
                    <div className="col-10">
                      <p className='dev-text text-center travelBlogmeaning mt-3'><span className='travelmean'>Steadfastness</span> is a friendly website that can help 
                      those who want to become physically and mentally fit. 
                      Steadfastness promotes a holistic approach to health, 
                      offering a wide range of resources, including workout routines, 
                      nutritional guidance, and mental wellness tips.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab" tabIndex="0">...</div>
              <div className="tab-pane fade" id="nav-react" role="tabpanel" aria-labelledby="nav-react-tab" tabIndex="0">...</div>
            </div>
          </div>
        </div> */}
      </div>
      <Footer />
    </>
  )
}

export default Project