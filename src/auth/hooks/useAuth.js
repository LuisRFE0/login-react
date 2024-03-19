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
                username: claims.sub
            }
            dispatch({
                type: 'login',
                payload: { user, isAdmin: claims.isAdmin }
            });

            sessionStorage.setItem('login', JSON.stringify({
                isAuth: true,
                isAdmin: claims.isAdmin,
                user
            }))

            sessionStorage.setItem("token", `Bearer ${token}`);
            navigate('/users');

        } catch (error) {
            if (error.response?.status == 401) {
                Swal.fire(
                    'Error',
                    "Username y/o password incorrectos",
                    'error'
                )
            } else if (error.response?.status == 403) {
                Swal.fire(
                    'Error',
                    "No tiene acceso al recurso",
                    'error'
                )
            } else {
                throw error;
            }

        }
    }

    const handlerLogOut = () => {
        dispatch(
            {
                type: 'logout'
            }
        )

        sessionStorage.removeItem('login');
        sessionStorage.removeItem('token');
        sessionStorage.clear();
    }






    return {
        login,
        handlerLogin,
        handlerLogOut
    }

}
