import { useContext } from "react";
import { UserList } from "../components/UserList";
import { UserModalForm } from "../components/UserModalForm";
import { UserContext } from "../context/UserContext";



export const UsersPage = () => {

    const { users, visibleForm, handlerVisibleForm } = useContext(UserContext);

    return (
        <>
            {!visibleForm ||
                <UserModalForm />
            }
            <div className="container my-4">
                <h2>Users App</h2>
                <div className="row">
                    <div className="col">
                        {visibleForm || <button className="btn btn-primary my-2" onClick={() => handlerVisibleForm(true)}>Nuevo Usuario</button>
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
