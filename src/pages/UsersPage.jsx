import { UserList } from "../components/UserList";
import { UserModalForm } from "../components/UserModalForm";
import { useUsers } from "../hooks/useUsers";



export const UsersPage = () => {

    const { users, userSelected, initialUserForm, handlerAddUser, handlerRemoveuser, handlerUserSelectedForm, visibleForm, handlerVisibleForm } = useUsers();

    return (
        <>


            {!visibleForm ||
                <UserModalForm handlerVisibleForm={handlerVisibleForm}
                    initialUserForm={initialUserForm}
                    handlerAddUser={handlerAddUser}
                    userSelected={userSelected} />
            }

            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    <div className="col">
                        {visibleForm || <button className="btn btn-primary my-2" onClick={() => handlerVisibleForm(true)}>Nuevo Usuario</button>
                        }
                        {users.length === 0
                            ? <div className="alert alert-warning text-center">No Hay Usuarios En el Sistema</div>
                            : <UserList
                                users={users}
                                handlerRemoveuser={handlerRemoveuser}
                                handlerUserSelectedForm={handlerUserSelectedForm} />
                        }

                    </div>
                </div>

            </div>
        </>
    )
}
