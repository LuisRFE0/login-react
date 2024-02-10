import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";

const initialUsers = [
    {
        id: 2,
        username: 'pepe',
        password: '12345',
        email: 'pepe@correo.com'
    }

];
const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: ''
}
export const useUsers = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);


    const handlerAddUser = (user) => {

        dispatch({
            type: (user.id === 0) ? 'addUser' : 'updateUser',
            payload: user
        })

        Swal.fire({
            title: (user.id === 0) ? 'Usuario creado' : 'Usuario Actualizado',
            text: (user.id === 0) ? 'Usuario creado correctamente' : 'Usuario Actualizado correctamente',
            icon: "success"
        });

        setVisibleForm(false);
        setUserSelected(initialUserForm);
    }


    const handlerRemoveuser = (id) => {


        Swal.fire({
            title: "Desea eliminar el usuario ",
            text: "Cuidado el usuario sera eliminado",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, borrar"
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'removeUser',
                    payload: id

                })
                Swal.fire({
                    title: "Borrar",
                    text: "El usuario ha sido eliminado",
                    icon: "success"
                });
            }
        });

    }

    const handlerUserSelectedForm = (user) => {
        setVisibleForm(true);

        setUserSelected({ ...user });
    }


    const handlerVisibleForm = (visible) => {
        setVisibleForm(visible);
        if (!visible) {
            setUserSelected(initialUserForm);
        }
    }

    return {
        users,
        userSelected,
        initialUserForm,
        visibleForm,
        handlerAddUser,
        handlerRemoveuser,
        handlerUserSelectedForm,
        handlerVisibleForm
    }
}
