import UserContext from "./UserContext";
import {useState} from 'react'

const initialUser = {
  name: '',
  phone: '',
  email: ''
}
const UserProvider = ({children}) => {
  const [users, setUsers] = useState(initialUser)

  const clearUser = () => setUsers(initialUser)

  const addUser = (user) => setUsers(user)

  

  return (
    <UserContext.Provider value={{clearUser, addUser, users}}>
      {children}
    </UserContext.Provider>
  )
}

export default UserProvider