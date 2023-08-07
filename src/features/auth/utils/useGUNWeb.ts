import getGUN from './getGUN';
// import 'gun/sea.js';
// import 'gun/lib/radix';
// import 'gun/lib/radisk';
// import 'gun/lib/store';
// import 'gun/lib/rindexed';
// import 'gun/lib/webrtc';
// import 'gun/nts';

const useGUNWeb = () => {

    // FIXME Melhorar imports
    // TODO Gun para web deve ter localStorage habilitado(?)
    const {
        gun,
        user,
        SEA,
    } = getGUN({localStorage: false});

    return { gun, user, SEA };
};

export default useGUNWeb;
