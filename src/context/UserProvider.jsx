import { useUsers } from "../hooks/useUsers";
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {

    const { users,
        userSelected,
        initialUserForm,
        handlerAddUser,
        handlerRemoveuser,
        handlerUserSelectedForm,
        visibleForm,
        handlerVisibleForm,
        getUsers,
        errors } = useUsers();

    return (

        <UserContext.Provider value={
            {
                users,
                userSelected,
                initialUserForm,
                handlerAddUser,
                handlerRemoveuser,
                handlerUserSelectedForm,
                visibleForm,
                handlerVisibleForm,
                getUsers,
                errors
            }
        }>
            {children}
        </UserContext.Provider>

    )
}
