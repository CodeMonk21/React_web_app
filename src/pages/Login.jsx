import React from 'react'
import { Link } from 'react-router-dom'

function Login() {


  const handleInput =()=>{

  }

  return (
    <>
      <div className='d-flex justify-content-center align-items-center Signup-container' style={{ height: "90vh" }}>
        <div className='px-5 py-4  Signup-box' style={{ width: "fit-content" }}>
          <div className='Signup-content'>
            <h1 className='text-white text-center mb-3'>Sign Up</h1>
            <div>
              {/* {errorMessage.length > 0 && <p className='fs-4 text-center text-danger'>{errorMessage}</p>} */}
              <div className="mb-3">
                <input type="text" className="" name="name" placeholder='Name' style={{ width: "300px" }} onChange={handleInput}  />
              </div>
              <div className="mb-3">
                <input type="email" className="" name="email" aria-describedby="emailHelp" placeholder='E-mail' onChange={handleInput}  />
              </div>
              <div className="mb-3">
                <input type="password" name="password" className="" placeholder='Password' onChange={handleInput}  />
              </div>
              <div className="mb-3">
                <input type="password" className="" name='confirmPsd' placeholder='Confirm Password' onChange={handleInput}  />
              </div>
            </div>
            <button type="submit" className="Form-btn my-3" >Sign up</button>
            <p className='text-center text-white'>Already have an Account? <Link to="login" className='fs-5 text-info text-decoration-none'>Login</Link> </p>

          </div>
        </div>

      </div>
    </>
  )
}

export default Login