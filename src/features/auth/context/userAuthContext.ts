// import {createContext, useReducer, useContext} from 'react';
import {createContext} from 'react';
import { initalState } from '../reducer/authReducer';

export const AuthContext = createContext(initalState);

// export const AuthProvider = ({ children }: any) => {
//     // eslint-disable-next-line @typescript-eslint/no-unused-vars
//     const [state, dispatch] = useReducer(authReducer, initalState);
//
//     const changeName = (newName: string) => {
//         dispatch({
//             type: 'LOGIN',
//             payload: {
//                 name: newName,
//             },
//         });
//     };
//
//     const values = {
//         state,
//         changeName,
//         dispatch,
//     };
//
//     // @ts-ignore
//     return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
// };

// const useAuth = () => {
//     const context = useContext(AuthContext);
//
//     if (context === undefined) {
//         throw new Error('useAuth must be used within AuthContext');
//     }
//
//     return context;
// };
//
// export default useAuth;
