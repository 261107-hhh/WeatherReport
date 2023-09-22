import React from 'react';
import Navbar from '../Partial/Navbar';
import Footer from '../Partial/Footer';
const Home = () => {

    return (
        <>
            <Navbar />
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
                                            <img className="d-block w-100" src="Images/img1.jpg" alt="First slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="Images/img2.jpg" alt="Second slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="Images/img3.jpg" alt="Third slide"/>
                                        </div>
                                        <div className="carousel-item">
                                            <img className="d-block w-100" src="Images/img4.jpg" alt="Fourth slide"/>
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
            <Footer />
        </>
    )
}
export default Home;