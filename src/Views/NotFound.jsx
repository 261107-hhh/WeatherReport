import React from 'react';
import Navbar from '../Partial/Navbar';
import Footer from '../Partial/Footer';
const NotFound = () => {

    return (
        <>
            <Navbar />
            <div className="container-fluid main-header">
                <div className="row">
                    <div className="col-md-10 col-12 mx-auto">
                        <div className="row">
                            {/* <!-- Left side Div --> */}
                            <div className="col-md-12 col-12 main-header-left align-items-center">
                                <figure className="errimg">
                                    <img src="Images/error2.jpg" alt="Error Page" className="img-fluid" title="Himanshu" />
                                </figure>
                                <p>404 NotFound</p>
                                <h1>Go Back to <span className="text-color"> Home </span> Page</h1>
                                <a href="/"><button>Go Back</button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}
export default NotFound;