import React from 'react'
import './LoginForm.css'
import Header from '../components/header/Header'
import logo_big1 from '../homePage/imgHome/logo_big1.png'

const SignUp = () => {
  return (
    <div>
      <Header />
      <div className="formlogin">
        <div className="content">
          <form>
            <p id='sign-in' >Sign-up</p>

            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label labellog">Email*</label>
              <input type="email" className="form-control input_log" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
              <label htmlFor="username" className="form-label labellog">Username*</label>
              <input type="text" className="form-control input_log" id="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label labellog">Create Password*</label>
              <input type="password" className="form-control input_log" id="exampleInputPassword1" />
            </div>
            <div className="mb-3">
              <label htmlFor="re_type_password" className="form-label labellog">Re-type Password*</label>
              <input type="password" className="form-control input_log" id="re_type_password" />
            </div>

            <div className="mb-3 form-check">
              <div>
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Remember me</label>
              </div>
              <a href="">Forgot Password</a>
            </div>
            <button type="submit" className="btn btn-primary btn_login">Register</button>
          </form>
        </div>
        <img src={logo_big1} alt="" />
      </div>
    </div>
  )
}

export default SignUp