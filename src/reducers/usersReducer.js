
export const usersReducer = (state = [], action) => {

    switch (action.type) {

        case 'addUser':

            return [
                ...state,
                {
                    ...action.payload
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

        case 'loadingUsers':
            return action.payload;
        default:
            return state;



    }


}
