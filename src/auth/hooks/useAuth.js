import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";



const initialUser = !JSON.parse(sessionStorage.getItem('login')) ? {
    isAuth: false,
    isAdmin: false,
    user: undefined
} : JSON.parse(sessionStorage.getItem('login'));

export const useAuth = () => {

    const navigate = useNavigate();

    const [login, dispatch] = useReducer(loginReducer, initialUser)

    const handlerLogin = async ({ username, password }) => {
        try {
            const response = await loginUser({ username, password });

            const token = response.data.token;
            const claims = JSON.parse(window.atob(token.split('.')[1]));


            const user = {
                username: claims.username
            }
            dispatch({
                type: 'login',
                payload: { user, isAdmin: claims.isAdmin }
            });

            sessionStorage.setItem("token", `Bearer ${token}`);
            navigate('/users');

        } catch (error) {
            Swal.fire(
                'Error',
                "Username y/o password incorrectos",
                'error'
            )
        }
    }

    const handlerLogOut = () => {
        dispatch(
            {
                type: 'logout'
            }
        )

        sessionStorage.removeItem('login');
    }






    return {
        login,
        handlerLogin,
        handlerLogOut
    }

}
