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
        handlerVisibleForm } = useUsers();

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
                handlerVisibleForm
            }
        }>
            {children}
        </UserContext.Provider>

    )
}
