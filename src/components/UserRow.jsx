import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../context/UserContext"
import { AuthContext } from "../auth/context/AuthContext";

export const UserRow = ({ id, username, email }) => {

    const { handlerUserSelectedForm, handlerRemoveuser } = useContext(UserContext);
    const { login } = useContext(AuthContext);

    return (
        <>
            <tr key={id}>
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>

                {!login.isAdmin || <>
                    <td><button type="button"
                        className="btn btn-secondary btn-sm"
                        onClick={() => handlerUserSelectedForm({
                            id,
                            username,
                            email
                        })}>Update</button>
                    </td>
                    <td>
                        <NavLink className={'btn btn-secondary btn-sm'}
                            to={'/users/edit/' + id} >
                            Update Route
                        </NavLink>


                    </td>
                    <td>
                        <button type="button"
                            className="btn btn-danger btn-sm"
                            onClick={() => handlerRemoveuser(id)}>Remove</button>
                    </td>
                </>}
            </tr>

        </>

    )
}
