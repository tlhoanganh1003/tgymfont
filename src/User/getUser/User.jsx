import { useEffect, useState } from 'react'
import "./user.css"
import axios from "axios"
import { Link } from 'react-router-dom'
import toast from 'react-hot-toast'
const User = () => {
  const [users, setUsers] = useState([])
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/user/")
        setUsers(response.data)
      } catch (error) {
        console.log("error while fetching user data", error)
      }
    }
    fetchUserData()
  }, [])

  const deleteUser = async (userId) => {
    await axios.delete(`http://localhost:8000/api/delete/user/${userId}`)
      .then((response) => {
        setUsers((prevUser) => prevUser.filter((user) => user._id !== userId))
        toast.success(response.data.message, { position: "top-right" })
      })

      .catch((error) => {
        console.log(error)
      })
  }

  return (
    <div className='userTable'>
      <Link to="/add" type="button" class="btn btn-primary">Add user <i className="fa-solid fa-user-plus"></i></Link>
      {users.length === 0 ? (
        <div className='noData'>
          <h3>No Data to display</h3>
          <p>Please add new User</p>
        </div>
      ) : (
        <table className='table table-bordered'>
          <thead>
            <tr>
              <th scope='col'> number</th>
              <th scope='col'> Name</th>
              <th scope='col'> Email</th>
              <th scope='col'> Adress</th>
              <th scope='col'> Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => {
              return (
                <tr key={user._id}>  {/* Thêm key vào đây */}
                  <td>{index + 1}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.address}</td>
                  <td className='actionButton'>
                    <Link to={`/update/` + user._id} type="button" className="btn btn-info">
                      <i className="fa-sharp fa-solid fa-pen-to-square"></i>
                    </Link>
                    <button
                      onClick={() => deleteUser(user._id)}
                      type="button" className="btn btn-danger">
                      <i className="fa-solid fa-trash"></i>
                    </button>
                  </td>
                </tr>
              );
            })}

          </tbody>
        </table>
      )}


    </div>

  )
}

export default User