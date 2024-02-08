import { useState } from "react";


export const UserForm = ({ handlerAddUser, initialUserForm }) => {

    const [userForm, setUserform] = useState(initialUserForm);
    const { username, password, email } = userForm


    const onInputChange = ({ target }) => {

        const { name, value } = target;

        setUserform({
            ...userForm,
            [name]: value,

        })




    }

    const onSubmit = event => {
        event.preventDefault();

        if (!username || !password || !email) {
            alert('Completar campos');
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

                <input
                    type="password"
                    className="form-control my-3 w-75"
                    placeholder="Password"
                    name="password"
                    value={password}
                    onChange={onInputChange}
                />

                <input
                    className="form-control my-3 w-75"
                    placeholder="Email"
                    name="email"
                    value={email}
                    onChange={onInputChange}
                />
                <button className="btn btn-primary">Crear</button>

            </form>
        </>

    )
}
