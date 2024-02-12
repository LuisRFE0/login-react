import { Navigate, Route, Routes } from "react-router-dom"
import { UsersPage } from "../pages/UsersPage"
import { Navbar } from "../components/layout/Navbar"
import { RegisterPage } from "../pages/RegisterPage"
import { useUsers } from "../hooks/useUsers"

export const Userrouters = ({ login, handlerLogOut }) => {
    const { users, userSelected, initialUserForm, handlerAddUser, handlerRemoveuser, handlerUserSelectedForm, visibleForm, handlerVisibleForm } = useUsers();

    return (
        <>
            <Navbar login={login} handlerLogOut={handlerLogOut} />

            <Routes>
                <Route path="users" element={< UsersPage
                    users={users}
                    userSelected={userSelected}
                    initialUserForm={initialUserForm}
                    handlerAddUser={handlerAddUser}
                    handlerRemoveuser={handlerRemoveuser}
                    handlerUserSelectedForm={handlerUserSelectedForm}
                    visibleForm={visibleForm}
                    handlerVisibleForm={handlerVisibleForm}
                />} />

                <Route path="users/register" element={< RegisterPage
                    handlerAddUser={handlerAddUser}
                    initialUserForm={initialUserForm} />} />

                <Route path="users/edit/:id" element={< RegisterPage
                    users={users}
                    handlerAddUser={handlerAddUser}
                    initialUserForm={initialUserForm} />} />

                <Route path="/" element={< Navigate to={"/users"} />} />

            </Routes>

        </>
    )

}
