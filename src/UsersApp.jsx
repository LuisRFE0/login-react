import { LoginPage } from "./auth/pages/LoginPage"
import { Navigate, Route, Routes } from "react-router-dom"
import { Userrouters } from "./routes/Userrouters"
import { useContext } from "react"
import { AuthContext } from "./auth/context/AuthContext"



export const UsersApp = () => {

  const { login } = useContext(AuthContext);

  return (

    <Routes>
      {login.isAuth ?
        (<>
          <Route path="/*" element={<Userrouters />} />
        </>)
        :
        <>
          <Route path="/login" element={<LoginPage

          />} />
          <Route path="/*" element={<Navigate to={'/login'} />} />
        </>

      }

    </Routes>

  )
}
