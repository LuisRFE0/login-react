import { UserRow } from "./UserRow"

export const UserList = ({ handlerRemoveuser, users = [] }) => {
    return (
        <>



            <table className="table table-hover table-striped">
                <thead><tr>
                    <th>#</th>
                    <th>Username</th>
                    <th>email</th>
                    <th>Update</th>
                    <th>Remove</th>
                </tr></thead>

                <tbody>
                    {
                        users.map(user => (
                            <UserRow handlerRemoveuser={handlerRemoveuser} key={user.id} id={user.id} username={user.username} email={user.email} />
                        ))
                    }
                </tbody>

            </table>

        </>
    )
}
