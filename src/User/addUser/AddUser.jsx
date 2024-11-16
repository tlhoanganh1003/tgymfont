import { useState } from 'react'
import "./addUser.css"
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    address:"",
  }
  const[user,setUser] = useState(users)
  const navigate = useNavigate()

  const inputHandler= (e) => {
    const {name, value} = e.target
    setUser({...user, [name]: value})
  }

  const submitForm = async(e)=>{
    e.preventDefault()
    await axios.post("http://localhost:8000/api/user", user)
    .then((response)=> {
      toast.success(response.data.message, {position:"top-right"})
      navigate("/")
    })
    .catch((error)=> {
      console.log(error)
    })
  }
  return (
    <div className='addUser'>
      <Link to={'/'} type="button" class="btn btn-secondary">
      <i className="fa-solid fa-backward"></i>
      </Link>
      <h3>Add New User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className='inputGroup'>
          <label htmlFor="name"> Name: </label>
          <input
            type='text'
            id='name'
            onChange={inputHandler}
            name='name'
            autoComplete="off"
            placeholder='enter your name'
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="email"> email: </label>
          <input
            type='text'
            id='email'
            onChange={inputHandler}
            name='email'
            autoComplete="off"
            placeholder='enter your email'
          />
        </div>
        <div className='inputGroup'>
          <label htmlFor="address"> Address: </label>
          <input
            type='text'
            id='address'
            onChange={inputHandler}
            name='address'
            autoComplete="off"
            placeholder='enter your Address'
          />
        </div>
        <div className='inputGroup'>
        <button type="submit" className="btn btn-primary">Submit</button>
        </div>


      </form>
    </div>
  )
}

export default AddUser