
export const UserRow = ({ handlerRemoveuser, id, username, email }) => {
    const onRemoveUser = (id) => {
        handlerRemoveuser(id)
    }
    return (
        <>
            <tr key={id}>
                <td>{id}</td>
                <td>{username}</td>
                <td>{email}</td>
                <td><button type="button" className="btn btn-secondary btn-sm">Update</button></td>
                <td><button type="button" className="btn btn-danger btn-sm" onClick={() => onRemoveUser(id)}>Remove</button></td>
            </tr>

        </>

    )
}
