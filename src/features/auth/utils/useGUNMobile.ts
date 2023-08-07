import 'gun/lib/mobile';
import getGUN from './getGUN';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import asyncStore from 'gun/lib/ras';

const useGUNMobile = () => {

    // FIXME Melhorar imports
    // TODO Gun para mobile deve ter usar AsyncStorage habilitado(?)
    // FIXME Verificar configuração default para storage no android
    //  gunOptions: ..., storage: asyncStore({AsyncStorage}),
    const {
        gun,
        user,
        SEA,
    } = getGUN({localStorage: false});

    return { gun, user, SEA };
};

export default useGUNMobile;
