import { useContext, useEffect, useState } from "react";
import Swal from "sweetalert2";
import { UserContext } from "../context/UserContext";


export const UserForm = ({ handlerVisibleForm, userSelected }) => {

    const { handlerAddUser, initialUserForm } = useContext(UserContext);

    const [userForm, setUserform] = useState(initialUserForm);
    const { id, username, password, email } = userForm;

    useEffect(
        () => {
            setUserform({ ...userSelected, password: '' })
        }, [userSelected])

    const onInputChange = ({ target }) => {

        const { name, value } = target;

        setUserform({
            ...userForm,
            [name]: value,

        })




    }

    const onSubmit = event => {
        event.preventDefault();

        if (!username || (!password && id === 0) || !email) {
            Swal.fire("Favor de rellenar los campos ");
            return;
        }
        if (!email.includes('@')) {
            Swal.fire("El email debe ser valido");
            return;

        }

        handlerAddUser(userForm)
        setUserform(initialUserForm);
    }

    return (

        <>


            <form onSubmit={onSubmit}>

                <input
                    className="form-control my-3 w-75"
                    placeholder="Username"
                    name="username"
                    value={username}
                    onChange={onInputChange}
                />
                {id > 0 || <input
                    type="password"
                    className="form-control my-3 w-75"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                />}


                <input
                    className="form-control my-3 w-75"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />

                <input type="hidden"
                    name="id"
                    value={id} />

                <button className="btn btn-primary">{id === 0 ? 'Crear' : 'Editar'}</button>
                {!handlerVisibleForm || <button className="btn btn-primary mx-2" type="button" onClick={() => handlerVisibleForm(false)}>Cerrar</button>
                }

            </form>
        </>

    )
}
