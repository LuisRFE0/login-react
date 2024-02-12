import { useState } from "react"
import Swal from "sweetalert2";


const initialLoginForm = {
    username: '',
    password: ''
}
export const LoginPage = ({ handlerLogin }) => {

    const [loginForm, setLoginForm] = useState(initialLoginForm);
    const { username, password } = loginForm;

    const onInputChage = ({ target }) => {
        const { name, value } = target;
        setLoginForm({
            ...loginForm, [name]: value
        })

    }

    const onsubmitForm = (event) => {
        event.preventDefault();
        if (!username || !password) {
            Swal.fire(
                'Error',
                "Username y password requeridos",
                'error'
            )

        }
        handlerLogin(loginForm);
        setLoginForm(initialLoginForm);
    }

    return (

        <>
            <div className="modal" style={{ display: 'block' }} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Login Page</h5>
                        </div>
                        <form onSubmit={onsubmitForm}>
                            <div className="modal-body">

                                <input className="form-control my-3 w-75"
                                    value={username}
                                    placeholder="Username"
                                    name="username"
                                    onChange={onInputChage}

                                />

                                <input className="form-control my-3 w-75"
                                    placeholder="Password"
                                    name="password"
                                    type="password"
                                    value={password}
                                    onChange={onInputChage}
                                />

                            </div>
                            <div className="modal-footer">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>

    )
}
