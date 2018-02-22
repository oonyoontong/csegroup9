function accountReducer(state = {
    isAuth: false,
    account:{}
},action){
    switch (action.type){
        case "LOGIN":
            state = {
                ...state,
                isAuth: true,
                account: action.payload
            };
            break;
        case "LOGOUT":
            state = {
                ...state,
                isAuth:false,
                account:action.payload
            }
    }
    return state;


};

export default accountReducer;
