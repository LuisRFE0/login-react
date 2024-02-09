
export const UserRow = ({ handlerUserSelectedForm, handlerRemoveuser, id, username, email }) => {

    return (
        <>
            <tr key={id}>
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td><button type="button"
                    className="btn btn-secondary btn-sm"
                    onClick={() => handlerUserSelectedForm({
                        id,
                        username,
                        email
                    })}>Update</button></td>
                <td><button type="button"
                    className="btn btn-danger btn-sm"
                    onClick={() => handlerRemoveuser(id)}>Remove</button></td>
            </tr>

        </>

    )
}