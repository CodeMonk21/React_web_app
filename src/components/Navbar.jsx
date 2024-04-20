import React, { memo, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Navbar({ loggedUser }) {

    const [showUser, setShowUser] = useState(false)

    useEffect(() => {
        if (loggedUser) {
            setShowUser(true)
        }
    }, [])

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ backgroundColor: "#124076" }}>
                <div className="container-fluid align-items-center" >
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
                        </ul>
                    </div>
                    {
                        showUser
                        &&
                        <button type="button fs-5 text-white" className="btn">
                            <span className='text-white'>Hello {loggedUser.email}</span> 
                        </button>
                    }
                    {
                        !showUser
                        &&
                        <div className='d-flex gap-2'>
                            <Link to="login">
                                <button type="button" className="btn btn-primary"> Login</button>
                            </Link>
                            <Link to="signup">
                                <button type="button" className="btn btn-primary">SignUp</button>

                            </Link>
                        </div>
                    }
                </div>
            </nav>
        </>
    )
}

export default memo(Navbar)