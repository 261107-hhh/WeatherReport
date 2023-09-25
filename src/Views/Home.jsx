import React from 'react';
import Navbar from '../Partial/Navbar';
import Footer from '../Partial/Footer';
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
const Home = () => {

    return (
        <>
            {/* <Navbar /> */}
            {/* <!-- Main header --> */}
            <div className="container-fluid main-header">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <div className="row">
                            {/* <!-- Left side Div --> */}
                            <div className="col-md-6 col-12 main-header-left">
                                <p>Welcome to Weather application</p>
                                <h1>Get the latest <span className="text-color"> Weather</span> Info</h1>
                                <a href="/weather"><button>Check Now</button></a>
                            </div>
                            {/* <!-- Right side Div --> */}
                            <div className="col-md-6 col-12 main-header-right">
                                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                                    <div className="carousel-inner">
                                        <div className="carousel-item active">
                                        {/* <img src={prod} alt="Product 2" /> */}
                                            <img className="d-block w-100" src={img1} alt="First slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={img2} alt="Second slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={img3} alt="Third slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src={img4} alt="Fourth slide"/>
                                        </div>
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                                        data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                                        data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Footer /> */}
        </>
    )
}
export default Home;