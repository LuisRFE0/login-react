import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";
import { useNavigate } from "react-router-dom";



const initialUser = !JSON.parse(sessionStorage.getItem('login')) ? {
    isAuth: false,
    user: undefined
} : JSON.parse(sessionStorage.getItem('login'));

export const useAuth = () => {

    const navigate = useNavigate();

    const [login, dispatch] = useReducer(loginReducer, initialUser)

    const handlerLogin = async ({ username, password }) => {
        try {
            const response = await loginUser({ username, password });

            const token = response.data.token;

            const user = {
                username: response.data.username
            }
            dispatch({
                type: 'login',
                payload: user
            });

            sessionStorage.setItem('login', JSON.stringify({ isAuth: true, user }));
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
