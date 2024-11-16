import React, { useState } from 'react'
import './HomeContent.css'
import '../../App.css'
import logo_big1 from '../imgHome/logo_big1.png'
import aboutImg from '../imgHome/aboutImg.png'
import OfferIcon1 from '../imgHome/OfferIcon1.png'
import OfferIcon2 from '../imgHome/OfferIcon2.png'
import OfferIcon3 from '../imgHome/OfferIcon3.png'
import backimgabout from '../imgHome/backimgabout.png'
import coach1 from '../imgHome/coach1.png'
import coach2 from '../imgHome/coach2.png'
import visitimg from '../imgHome/visitimg.png'
import customerimg1 from '../imgHome/customerimg1.png'
import customerimg2 from '../imgHome/customerimg2.png'
import customerimg3 from '../imgHome/customerimg3.png'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'
import { API_ROOT } from '../../utils/constants.js'

const HomeContent = () => {
  const customers = {
    lastname: "",
    firstname: "",
    email: "",
    address:"",
  }

  const[customer,setCustomer] = useState(customers)
  const navigate = useNavigate()
  const inputHandler= (e) => {
    const {name, value} = e.target
    setCustomer({...customer, [name]: value})
  }

  const submitForm = async(e)=>{
    e.preventDefault()
    await axios.post(`${API_ROOT}/customer/registercutomer`, customer)
    .then((response)=> {
      toast.success(response.data.message, {position:"top-right"})
      navigate("/home")
    })
    .catch((error)=> {
      console.log(error)
    })
  }

  return (
    <div className="home_content">
      <div className="start">
        <div className="foreword">
          <div className="quote">
            <p>Start a better <br /> Shape of you!</p>
            <p className='alit_yellow'> Come Join Us!</p>
          </div>
          <div className="learn_more">
            <a href="">Learn More</a>
          </div>
        </div>
        <div className="foreword ">
          <img className='logo_big' src={logo_big1} alt="" />
        </div>
      </div>
      <div className="about_home">
        <div className="about_top">
          <p className='about_top1'>About</p>
          <p className='about_top2'>STAMINA GYM FOR MAN & WOMAN</p>
        </div>
        <div className="about_bot">
          <img className='aboutImg' src={aboutImg} alt="about_Img" />
          <div className="about_inf">
            <p className='alit_yellowl about_content'>
              Stamina Gym Fitness Center provides proper training and conditioning for members who want to improve and transform their body with Program depend on the body composition.
            </p>
            <h3>What we offer: </h3>
            <div className="offeres">
              <img src={OfferIcon1} alt="" />
              <img src={OfferIcon2} alt="" />
              <img src={OfferIcon3} alt="" />
            </div>
          </div>
          <div className="backimgabout">
            <img src={backimgabout} alt="about_Img" />
          </div>

        </div>

      </div>
      <div className="membership">
      </div>

      <div className="coaches">
        <div className="coach_top"><p>COACHES</p> </div>
        <div className="coach_bot">
          <div className="coach_item">
            <div className='coach_itemon'>
              <img src={coach1} alt="" />
              <p>Coach John</p>
            </div>
            <div className="coach_itemunder">
            </div>
          </div>
          <div className="coach_item">
            <div className='coach_itemon'>
              <img src={coach1} alt="" />
              <p>Coach Timothi</p>
            </div>
            <div className="coach_itemunder">
            </div>
          </div>
          <div className="coach_item">
            <div className='coach_itemon'>
              <img src={coach2} alt="" />
              <p>Coach Ansel</p>
            </div>
            <div className="coach_itemunder">
            </div>
          </div>
        </div>
      </div>

      <div className="lastpage">
        <div className="visit_to">
          <img className='visitimg' src={visitimg} alt="" />
          <div className="visit_inf">
            <p id='visit_our_gym'>VISIT OUR GYM</p>
            <div className="visit_contact">
              <div className="vi_ct">
                <p className='alit_yellow'>Address: </p>
              <h5>12TH ST. GENERAL MATHA VILLAMOR AIR BASE PASAY CITY </h5>
              </div>
              <div className="vi_ct">
                <p className='alit_yellow'>Email: </p>
              <h5>Martell008@yahoo.com </h5>
              </div>
              <div className="vi_ct">
                <p className='alit_yellow'>Contact Number: </p>
              <h5> 09260417050</h5>
              </div>

              <div className='socials'>
                <p>OUR SOCIALS:</p>
              <i className="fa-brands fa-facebook"></i>
              <i className="fa-brands fa-facebook-messenger"></i>
              <i className="fa-brands fa-instagram"></i>
              </div>
              
            </div>
          </div>
        </div>
        <div className="regitser">
          <p id='regitser'>REGISTER</p>
          <div className="regitser_body">
          <form className="form_reg" onSubmit={submitForm}>
                <div className="form_input">
              <p>Last name</p>
              <input 
               type='text'
               id='lastname'
               onChange={inputHandler}
               name='lastname'
               autoComplete="off"
               placeholder='enter your last name' />
              <p>First Name</p>
              <input 
              type='text'
              id='firstname'
              onChange={inputHandler}
              name='firstname'
              autoComplete="off"
              placeholder='enter your first name' />
              <p>Email</p>
              <input 
              type='text'
              id='email'
              onChange={inputHandler}
              name='email'
              autoComplete="off"
              placeholder='enter your email' />
              <p>Phone</p>
              <input 
              type='text'
              id='phone'
              onChange={inputHandler}
              name='phone'
              autoComplete="off"
              placeholder='enter your phone number' />
                </div>

                <div className="button_reg">
                <button type='submit' className='submit'>Submit</button>
                <button className='clear_en'>Clear Entries</button>

                </div>
              </form>
              <div className="customer_progress">
                <p>Customer’s Progress </p>
                <img src={customerimg1} alt="" />
                <img src={customerimg2} alt="" />
                <img src={customerimg3} alt="" />
                <p>Register to receive advice from us</p>
              </div>
          </div>

        </div>
      </div>


    </div>
  )
}

export default HomeContent