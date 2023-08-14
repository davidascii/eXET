import {useReducer} from "react";
import authReducer, {initalState} from '../reducer/authReducer';
import {AuthContext} from '../context/userAuthContext';

export const AuthProvider = ({ children }: any) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const [state, dispatch] = useReducer(authReducer, initalState);

    const changeName = (newName: string) => {
        dispatch({
            type: 'LOGIN',
            payload: {
                name: newName,
                testName: 'David 1',
            },
        });
    };

    const values = {
        state,
        changeName,
        dispatch,
    };

    // @ts-ignore
    return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
