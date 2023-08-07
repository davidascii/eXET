import React, { createContext, useContext, useReducer } from 'react';
import {AuthContext, AuthDispatchContext} from "../context/authContext";
import AuthenticateUser from "../services/authenticateUser";

// const AuthContext = createContext({});
// const AuthDispatchContext = createContext({});

const initialState = {
    name: '',
};

function useUserAuth() {
    const context = useContext(AuthContext);

    return context;
}

function userAuthDispatch() {
    const context = useContext(AuthDispatchContext);

    return context;
}

const AuthReducer = (_initialState, _action) => {
    switch (_action.type) {
    case 'AUTH':
        return {
            ..._initialState,
            name: _action.name,
        };

    default:
        throw new Error('Ação não existe!');
    }
};

const UserAuthProvider = ({ children }) => {
    const [user, dispatch] = useReducer(AuthReducer, initialState);

    return (
        <AuthContext.Provider value={{nome: 'David'}}>
            <AuthDispatchContext.Provider value={dispatch}>
                {children}
            </AuthDispatchContext.Provider>
        </AuthContext.Provider>
    );
};

export {useUserAuth, UserAuthProvider};
