import React from 'react';
import Navbar from '../Partial/Navbar';
import Footer from '../Partial/Footer';
const About = () => {

    return (
        <>
            {/* <Navbar /> */}
            <div className="container-fluid main-header">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <div className="row">

                            {/* <!-- Right side Div --> */}
                            <div className="col-md-6 col-12 main-header-right align_item_center">
                                <figure className="selfimg">
                                    <img src="Images/ab.jpg" alt="Self" className="img-fluid" title="Himanshu" />
                                </figure>
                            </div>

                            {/* <!-- Left side Div --> */}
                            <div className="col-md-6 col-12 main-header-left">
                                <p>Welcome to Weather application</p>
                                <h1>I am a <span className="text-color"> Mern stack Developer</span> and student</h1>

                                <h1>I have also worked as<span className="text-color"> Full stack Developer </span> using Spring Boot and React </h1>
                                <a href="/about"><button>About Me</button></a>
                            </div>
                        </div>
                        <div className="container-fluid main-header-bottom">
                            <h1>Below are some of my<span className="text-color"> work mentioned do visit them. </span></h1>
                            {/* <a href="/about"><button>About Me</button></a> */}
                            <a href="https://covid19detail.netlify.app/"><button>Covid Tracker</button></a>
                            <a href="https://webseriesrecommendation.netlify.app/"><button>Web Series</button></a>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}

        </>
    )
}
export default About;