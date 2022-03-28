const reducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
            return {
                user: null, 
                error: false, 
                isFetching: true

            };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload, 
                error: false, 
                isFetching: false

            };
        case "LOGIN_FAILURE":
            return {
                user: null, 
                error: true, 
                isFetching: true

            };
        default:
            return state
    }
}

export default reducer 