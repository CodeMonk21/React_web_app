import React, { memo } from 'react'
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#124076" }}>
                <div className="container-fluid" >
                    <Link className="navbar-brand" to="/" style={{ color: "#E6E7E9" }}>SensorSphere</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-center" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0 ">
                            <li className="nav-item Navbar-link">
                                <Link className="nav-link active" aria-current="page" to="/" style={{ color: "#E6E7E9" }}>Home</Link>
                            </li>
                            <li className="nav-item Navbar-link">
                                <Link className="nav-link" to="about" style={{ color: "#E6E7E9" }}>About Us</Link>
                            </li>
                            <li className="nav-item Navbar-link">
                                <Link className="nav-link" to="product" style={{ color: "#E6E7E9" }}>Products</Link>
                            </li>
                            <li className="nav-item Navbar-link">
                                <Link className="nav-link" to="faq" style={{ color: "#E6E7E9" }}>FAQ's</Link>
                            </li>
                            <li className="nav-item Navbar-link">
                                <Link className="nav-link" to="contact" style={{ color: "#E6E7E9" }}>Contact Us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='d-flex gap-2'>
                        <button type="button" className="btn btn-primary">Login</button>
                        <button type="button" className="btn btn-primary">SignUp</button>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default memo(Navbar)