import { UserRow } from "./UserRow"

export const UserList = ({ handlerUserSelectedForm, handlerRemoveuser, users = [] }) => {



    return (
        <>

            <table className="table table-hover table-striped">
                <thead><tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>email</th>
                    <th>Update</th>
                    <th>Update route</th>
                    <th>Remove</th>
                </tr></thead>

                <tbody>
                    {
                        users.map(user => (
                            <UserRow
                                handlerUserSelectedForm={handlerUserSelectedForm}
                                handlerRemoveuser={handlerRemoveuser}
                                key={user.id}
                                id={user.id}
                                username={user.username}
                                email={user.email} />
                        ))
                    }
                </tbody>

            </table>

        </>
    )
}
