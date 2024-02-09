import { UserForm } from "./components/UserForm"
import { UserList } from "./components/UserList"
import { useUsers } from "./hooks/useUsers";


export const UsersApp = () => {

  const { users, userSelected, initialUserForm, handlerAddUser, handlerRemoveuser, handlerUserSelectedForm } = useUsers();

  return (
    <div className="container my-4">
      <h2>Users App</h2>
      <div className="row">
        <div className="col">
          <UserForm initialUserForm={initialUserForm} handlerAddUser={handlerAddUser} userSelected={userSelected} />
        </div>
        <div className="col">
          <button className="btn btn-primary my-2" >Nuevo Usuario</button>
          {users.length === 0
            ? <div className="alert alert-warning text-center">No Hay Usuarios En el Sistema</div>
            : <UserList users={users} handlerRemoveuser={handlerRemoveuser} handlerUserSelectedForm={handlerUserSelectedForm} />}

        </div>
      </div>

    </div>

  )
}
