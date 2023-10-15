import React, { useRef } from 'react'
import {signOut} from 'firebase/auth';
import { database } from './Fbconfig';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import eye1 from '../src/img/eye1.png';
import eye2 from '../src/img/eye2.png';
import navgg from '../src/img/navgg.png'
import { FcCameraIdentification } from "react-icons/fc";



function Home() {
    const history = useNavigate();
    const handleClick = ()=>{
        signOut(database).then(val=>{
            history('/')
        })
    }

    const home1 = useRef(null);
    const about2 = useRef(null);
    const service1 = useRef(null);
    const contact1 = useRef(null);

    const result = ()=>{
      alert("You have Diabetics")
    }

    const scrollThat=(e)=>{
      window.scrollTo(
        {
          top:e.current.offsetTop,
          behavior:'smooth'
        }
      )
    };

    
  return (
    <>
        {/* Navbar */}
        <div id="header">
            <div className="container-fluid ">
                <div className="row">
                    <div className="col-10 mx-auto nav-border">
                      <nav className="navbar navbar-expand-lg p-4">
                        <div className="container-fluid ">
                            <NavLink className="navbar-brand text-white" to="/home"> <img className='img-fluid' src={navgg} alt="" />GLUCO Guard</NavLink>
                            <button className="navbar-toggler bg-white text-color" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                <NavLink onClick={()=>scrollThat(home1)} className="nav-link active text-white" aria-current="page" to="#">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink onClick={()=>scrollThat(about2)} className="nav-link text-white" to="#">About</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink onClick={()=>scrollThat(service1)}  className="nav-link text-white" to="#">Service</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink onClick={()=>scrollThat(contact1)}  className="nav-link text-white" to="#">Contact</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink onClick={handleClick}  className="nav-link text-danger fw-bold" to="#">Sign Out</NavLink>
                                </li>
                            </ul>
                            </div>
                        </div>
                        </nav> 
                            </div>
                </div>
            </div>
        </div>
        {/* Home Section */}
        <section ref={home1} className='home-header'>
            <div className="container-fluid">
              <div className="row">
                <div className="col-10 mx-auto nav-border">
                  <div className="row p-4 ">
                    <div  className="col-md-6 col-10 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center alogn ">
                      <h1 className='my-3 text-color'><strong>Gluco Guard</strong></h1>
                      <h4 className='my-3 text-white'>
                        It simplifies the process of dealing with diabetic detection for women.
                      </h4>
                      <div className="my-3">
                        <NavLink onClick={()=>scrollThat(service1)}  className='btn-doc' to="#">Test you Blood</NavLink>
                      </div>
                    </div>
                    <div data-aos="fade-right" className="col-md-6 col-10 pt-5 pt-lg-0 order-1 order-lg-2">
                      <img className='img-fluid animated' src={eye1}  alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
      </section>
      {/* About Section */}
      <section ref={about2}  className='about-header'>
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto nav-border">
              <div className="row p-4">
              <div data-aos="fade-right" className="col-md-6 col-10p pt-5 pt-lg-0 order-1 order-lg-1">
                  <img className='img-fluid animated' src={eye2} alt="#" />
                </div>
              <div className="col-md-6 col-10 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
              <h2 className='text-color my-3'><strong>About Gluco Guard</strong></h2>
              <h3  className='text-white my-3'><strong>It's a website based on <span className='text-color'>machine learning</span></strong></h3>
              <p data-aos="fade-right" className="text-white my-3">
              Our machine learning project aims to develop a sophisticated diagnostic tool specifically designed for detecting diabetes in women. By analyzing a comprehensive dataset of female patients, we employ advanced algorithms to identify early indicators and risk factors, ultimately empowering healthcare professionals with a precise and timely screening tool for female diabetes patients.
              </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Service Section */}
      <section ref={service1}  className='about-header' >
      <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto nav-border">
            <h3 className='text-color text-center mt-3'>Fill Those data field to get result</h3>
              <div className="row p-4">
              <div className="col-md-6 col-10 mx-auto" data-aos="fade-in">
              <form>
                  <div className="mb-3 text-color">
                    <label  className="form-label">Pregnancies</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3 text-color">
                    <label  className="form-label">Glucose</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div className="mb-3 text-color">
                    <label  className="form-label">Blood Pressure</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div className="mb-3 text-color">
                    <label  className="form-label">Skin Thickness</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div className="mb-3 text-color">
                    <label  className="form-label">Insulin</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div className="mb-3 text-color">
                    <label  className="form-label">BMI</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div className="mb-3 text-color">
                    <label  className="form-label">Diabeticspedigreefunction</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div className="mb-3 text-color">
                    <label  className="form-label">Age</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div className="mt-3  text-center">
                  <NavLink onClick={result} type="submit" className="btn-doc">Submit</NavLink>
                  </div>
                </form>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section ref={contact1} className='about-header'>
      <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto nav-border">
            <h3 className='text-color text-center mt-3'>Contact Us</h3>
              <div className="row p-4">
              <div className="col-md-6 col-10 col mx-auto" data-aos="fade-right">
              <form>
                  <div className="mb-3 text-color">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                  </div>
                  <div className="mb-3 text-color">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                  </div>
                  <div className="mt-3  text-center">
                  <NavLink type="submit" className="btn-doc">Submit</NavLink>
                  </div>
                  
                </form>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <section className="footer-header mb-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-10 mx-auto nav-border p-4">
              <h6 className='text-color text-center'>Copyright @ All right Reserved</h6>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home;