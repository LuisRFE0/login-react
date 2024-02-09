
export const usersReducer = (state = [], action) => {

    switch (action.type) {

        case 'addUser':

            return [
                ...state,
                {
                    ...action.payload,
                    id: new Date().getTime(),
                }
            ];

        case 'removeUser':
            return state.filter(user => user.id !== action.payload);

        case 'updateUser':
            return state.map(usuario => {
                if (usuario.id === action.payload.id) {
                    return { ...action.payload, password: usuario.password }
                };
                return usuario;
            })

        default:
            return state;



    }


}
