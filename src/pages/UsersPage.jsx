import { useContext, useEffect } from "react";
import { UserList } from "../components/UserList";
import { UserModalForm } from "../components/UserModalForm";
import { UserContext } from "../context/UserContext";
import { AuthContext } from "../auth/context/AuthContext";



export const UsersPage = () => {

    const { users, visibleForm, handlerVisibleForm, getUsers } = useContext(UserContext);

    const { login } = useContext(AuthContext);


    useEffect(() => {
        getUsers();
    }, [])
    return (
        <>
            {!visibleForm ||
                <UserModalForm />
            }
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    <div className="col">
                        {(visibleForm || !login.isAdmin) || <button className="btn btn-primary my-2" onClick={() => handlerVisibleForm(true)}>Nuevo Usuario</button>
                        }
                        {users.length === 0
                            ? <div className="alert alert-warning text-center">No Hay Usuarios En el Sistema</div>
                            : <UserList />
                        }

                    </div>
                </div>

            </div>
        </>
    )
}
