import { createContext, useReducer, useEffect } from 'react';
import reducer from './reducer';

const INITIAL_STATE = {
    user: JSON.parse(localStorage.getItem("user")) || null, 
    error: null,
    isFetching: false
}

export const context = createContext(INITIAL_STATE)

export const ContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, INITIAL_STATE)

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(state.user));
    }, [state.user]);

    return (<context.Provider value={{
        user: state.user,
        error: state.error,
        isFetching: state.error, 
        dispatch
    }}>
        {children}
    </context.Provider>)

}