import React from 'react'
import './FunctionBar.css'
import Logo from '../../homePage/imgHome/Logo.png'

const FunctionBar = () => {
  return (
    <div className="box_work">
      <div className="box_manage">
      <div className='functionbar'>
        <div className="manager_account">
          <i className="fa-regular fa-user"></i>
          <div className="manager_inf">
            <p className='admin_name'  >Adminstrator Name</p>
            <p className='admin_gmail'>admin@gmail.com</p>
          </div>
        </div>
        <div className="">
          <div className="nav flex-column nav-pills fuctionaa" id="v-pills-tab" role="tablist" aria-orientation="vertical">
            <button className="nav-link active" id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home" type="button" role="tab" aria-controls="v-pills-home" aria-selected="true">
              <i className="fa-solid fa-table"></i>
              <p>Dashboard</p>
              </button>
            <button className="nav-link" id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile" type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false">
              <i className="fa-solid fa-house"></i>
              <p>Admin Profile</p>
            </button>
            <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
              <i className="fa-solid fa-book"></i>
              <p>Registration</p>
            </button>
            <button className="nav-link" id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages" type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false">
              <i className="fa-solid fa-book"></i>
              <p>Plan</p>
            </button>
            <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
              <i className="fa-regular fa-credit-card"></i>
              <p>Payment</p>
            </button>
            <button className="nav-link" id="v-pills-settings-tab" data-bs-toggle="pill" data-bs-target="#v-pills-settings" type="button" role="tab" aria-controls="v-pills-settings" aria-selected="false">
            <i className="fa-solid fa-dumbbell"></i>
              <p>Coaches</p>
              </button>
          </div>    
        </div>
        <button className="nav-link " id='logout' >
          <i className="fa-solid fa-right-from-bracket"></i>
              <p>Logout</p>
              </button>
      </div>

      <div className="work_header">
      <div className="brandd">
        <img src={Logo} alt="logo" />
        <p>STAMINA <br />FITNESS</p> 
      </div>
      <div className="notification">
      <p>FEEDBACK</p>
      <i class="fa-solid fa-bell"></i>
        
      </div>
      </div>

      </div>
    </div>
  )
}

export default FunctionBar