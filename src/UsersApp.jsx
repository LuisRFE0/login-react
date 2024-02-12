import { LoginPage } from "./auth/pages/LoginPage"
import { UsersPage } from "./pages/UsersPage"
import { Navbar } from "./components/layout/Navbar"
import { useAuth } from "./auth/hooks/useAuth"
import { Navigate, Route, Routes } from "react-router-dom"
import { Userrouters } from "./routes/Userrouters"



export const UsersApp = () => {

  const { login, handlerLogin, handlerLogOut } = useAuth();

  return (

    <Routes>
      {login.isAuth ?
        (<>
          <Route path="/*" element={<Userrouters login={login} handlerLogOut={handlerLogOut} />} />
        </>)
        :
        <>
          <Route path="/login" element={<LoginPage
            handlerLogin={handlerLogin}
          />} />
          <Route path="/*" element={<Navigate to={'/login'} />} />
        </>

      }

    </Routes>

  )
}
