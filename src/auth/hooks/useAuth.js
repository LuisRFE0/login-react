import { useReducer } from "react";
import { loginReducer } from "../reducers/loginReducer";
import Swal from "sweetalert2";
import { loginUser } from "../services/authService";



const initialUser = !JSON.parse(sessionStorage.getItem('login')) ? {
    isAuth: false,
    user: undefined
} : JSON.parse(sessionStorage.getItem('login'));

export const useAuth = () => {


    const [login, dispatch] = useReducer(loginReducer, initialUser)

    const handlerLogin = ({ username, password }) => {
        const isLogin = loginUser({ username, password });
        if (isLogin) {

            const user = {
                username: 'admin'
            }
            dispatch({
                type: 'login',
                payload: user
            });

            sessionStorage.setItem('login', JSON.stringify({ isAuth: true, user }));

        } else {
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
