import React, { useState, useEffect } from "react"
import { http } from "./helpers/Axios"
import UserCard from "./components/users/UserCard"
import Error from "./components/Error"
import { UserObject } from "./types"

import avatar from "./assets/images/avatar.webp"

const users: UserObject[] = [
  {
    name: {
      title: "Mr",
      first: "Eiker",
      last: "Yejan",
    },
    gender: "male",
    picture: {
      large: avatar,
    },
    email: "eikeryejan@gmail.com",
    cell: "cellphone",
  },
]

function App() {
  /**
   * Initial state
   */
  // const [users, setUsers] = useState([])
  const [error, setError] = useState(false)

  /**
   * Fetch data
   */
  useEffect(() => {
    const url =
      "https://randomuser.me/api/?results=12&exc=login,registered,info,nat,id"

    const fetchUsers = async () => {
      try {
        const users = await http({ url, method: "GET" })
        console.log(users)

        // Update state
        // setUsers(users.results)
      } catch (error) {
        console.log(error)
        setError(true)
      }
    }

    // Run function
    //fetchUsers()
  }, [])

  return (
    <div id="app">
      <div className="columns is-multiline users-grid">
        {users.length === 0 && !error ? <span className="loader"></span> : null}
        <div className="column is-12">
          <h1 className="section-title">
            Current <span>users</span>
          </h1>
        </div>
        {error ? (
          <Error />
        ) : (
          <>
            {" "}
            {users.map((user, index) => (
              <UserCard key={index} data={user} />
            ))}
          </>
        )}
      </div>
    </div>
  )
}

export default App
