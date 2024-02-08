import { useReducer } from "react";
import { UserForm } from "./components/UserForm"
import { UserList } from "./components/UserList"
import { usersReducer } from "./reducers/usersReducer";

const initialUsers = [
  {
    id: 2,
    username: 'pepe',
    password: '12345',
    email: 'pepe@correo.com'
  }

];
const initialUserForm = {
  username: '',
  password: '',
  email: ''
}
export const UsersApp = () => {

  const [users, dispatch] = useReducer(usersReducer, initialUsers);
  const handlerAddUser = (user) => {

    dispatch({
      type: 'addUser',
      payload: user
    })
  }


  const handlerRemoveuser = (id) => {
    dispatch({
      type: 'removeUser',
      payload: id

    })
  }



  return (
    <div className="container my-4">
      <h2>Users App</h2>
      <div className="row">
        <div className="col">
          <UserForm initialUserForm={initialUserForm} handlerAddUser={handlerAddUser} />
        </div>
        <div className="col">
          {users.length === 0
            ? <div className="alert alert-warning text-center">No Hay Usuarios En el Sistema</div>
            : <UserList users={users} handlerRemoveuser={handlerRemoveuser} />}

        </div>
      </div>

    </div>

  )
}
