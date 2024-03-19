import { useContext } from "react"
import { UserRow } from "./UserRow"
import { UserContext } from "../context/UserContext"
import { AuthContext } from "../auth/context/AuthContext";

export const UserList = () => {

    const { users = [] } = useContext(UserContext);
    const { login } = useContext(AuthContext);

    return (
        <>

            <table className="table table-hover table-striped">
                <thead><tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>email</th>
                    {!login.isAdmin || <>
                        <th>Update</th>
                        <th>Update route</th>
                        <th>Remove</th>
                    </>}
                </tr></thead>

                <tbody>
                    {
                        users.map(user => (
                            <UserRow
                                key={user.id}
                                id={user.id}
                                username={user.username}
                                email={user.email} />
                        ))
                    }
                </tbody>

            </table >

        </>
    )
}
