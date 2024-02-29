import { useReducer, useState } from "react";
import { usersReducer } from "../reducers/usersReducer";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { findAll, remove, save, update } from "../services/userService";

const initialUsers = [


];
const initialUserForm = {
    id: 0,
    username: '',
    password: '',
    email: ''
}
const initialErrors = {

    username: '',
    password: '',
    email: ''
}
export const useUsers = () => {

    const [users, dispatch] = useReducer(usersReducer, initialUsers);
    const [userSelected, setUserSelected] = useState(initialUserForm);
    const [visibleForm, setVisibleForm] = useState(false);
    const [errors, seterrors] = useState(initialErrors);

    const navigate = useNavigate();

    const getUsers = async () => {
        const result = await findAll();
        dispatch({
            type: 'loadingUsers',
            payload: result.data
        });
    }

    const handlerAddUser = async (user) => {
        let response;

        try {



            if (user.id === 0) {
                response = await save(user);
            } else {
                response = await update(user);
            }

            dispatch({
                type: (user.id === 0) ? 'addUser' : 'updateUser',
                payload: response.data
            })

            Swal.fire({
                title: (user.id === 0) ? 'Usuario creado' : 'Usuario Actualizado',
                text: (user.id === 0) ? 'Usuario creado correctamente' : 'Usuario Actualizado correctamente',
                icon: "success"
            });

            setVisibleForm(false);
            setUserSelected(initialUserForm);
            navigate('/users');
        } catch (error) {

            if (error.response && error.response.status == 400) {
                seterrors(error.response.data);
            } else {
                throw error;
            }

        }
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
                remove(id);
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
        errors,
        handlerAddUser,
        handlerRemoveuser,
        handlerUserSelectedForm,
        handlerVisibleForm
        , getUsers
    }
}
