import { useEffect, useState } from 'react'
import "./updateUser.css"
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

const UpdateUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  }
  const [user, setUser] = useState(users)
  const navigate = useNavigate()
  const { id } = useParams();

  const inputHandler = (e) => {
    const { name, value } = e.target
    setUser({ ...user, [name]: value })
  }

  useEffect(() => {
    axios.get(`http://localhost:8000/api/user/${id}`)
      .then((response) => {
        setUser(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  },[id])

  const submitForm = async (e) => {
    e.preventDefault()
    await axios.put(`http://localhost:8000/api/update/user/${id}`, user)
      .then((response) => {
        toast.success(response.data.message, { position: "top-right" })
        navigate("/")
      })
      .catch((error) => {
        console.log(error)
      })
  }
  return (
    <div className='addUser'>
      <Link to={'/'} type="button" class="btn btn-secondary">
        <i className="fa-solid fa-backward"></i>
      </Link>
      <h3>Update User</h3>
      <form className='addUserForm' onSubmit={submitForm}>
        <div className='inputGroup'>
          <label htmlFor="name"> Name: </label>
          <input
            type='text'
            value={user.name}
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
            value={user.email}
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
            value={user.address}
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

export default UpdateUser