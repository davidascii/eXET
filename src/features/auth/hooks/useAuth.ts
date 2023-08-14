import {useContext} from "react";
import {AuthContext} from '../context/userAuthContext';

const useAuth = () => {
    const context = useContext(AuthContext);

    if (context === undefined) {
        throw new Error('useAuth must be used within AuthContext');
    }

    return context;
};

export default useAuth;
