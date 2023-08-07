// import 'isomorphic-webcrypto';
// import '@peculiar/webcrypto';
// import "buffer";
// import 'gun/lib/mobile';
import 'react-native-get-random-values';
import 'react-native-webview-crypto';
// import WebviewCrypto from 'react-native-webview-crypto';
// import PolyfillCrypto from 'react-native-webview-crypto';
// import AsyncStorage from '@react-native-community/async-storage';
// import asyncStore from 'gun/lib/ras.js';
import useGUNMobile from '../../features/auth/utils/useGUNMobile';
import authenticateUser from "../../features/auth/services/authenticateUser";
import createUser from "../../features/auth/services/createUser";
// import { u } from '../../../dist/assets/index-41c44cf7';

const { gun, user, SEA} = useGUNMobile();

export async function _createUser() {
    console.log('teste1');

    // user.create('usuarioteste', "blablaumdoistresteste", r => {
    //     console.log("Gun user created result:", r);
    //     user.get('name').put('David');
    // });

    await createUser(gun, user, SEA, "usuarioteste", "blablaumdoistresteste")
        .then(usr => {
            console.log("Usuário criado com sucesso!", usr);
        })
        .catch(err => {
            console.log("Deu erro!", err);
        });

    console.log('teste3');
}

export async function authUser() {
    // user.auth('rand', "userpwd", async (r) => {
    //     console.log("Gun user authenticated result:", r);
    //     console.log("User pub", user.is?.pub);
    //
    //     const eXETPubKey = 'qJ0xKztt1DPetJSZxgM_RKXrWaig67wUD-wgW1A_Xak.9sGi4eFVKmdwG_m2jpUrBwhWhfNYlATq2KMBk303DQw'
    //
    //     console.log('Creating cert...')
    //     const cert = await Gun.SEA.certify(eXETPubKey, {"#": {"*": "eXET"}}, r.sea);
    //     console.log('Creating cert... Done!', cert);
    //
    //     user.get('certs').get(eXETPubKey).put(cert);
    // });

    await authenticateUser(gun, user, SEA, "usuarioteste", "blablaumdoistresteste")
        .then(usr => {
            console.log("Usuário autenticado com sucesso!", usr);
            console.log("Pubkey do usuário", user.is?.pub);
        })
        .catch(err => {
            console.log("Deu erro!", err);
        });

    if (user.is) {
        console.log("User name")
        user.get('name').once(console.log);
    } else {
        console.log("User not authenticated")
    }
}

export function logoutUser() {
    user.leave();
}

export function startEvent() {
    // gun.get('pub/' + user.is?.pub).get('testando').on((data, key) => {
    //     console.log("Testando...", data, key);
    // });
    if (user.is) {
        user.get('eXET').on((data, key) => {
            console.log("Testando...", data, key);
        });
        // gun.get('pub/' + user.is?.pub).get('testando').put("blabla");
    }
    // app.get('jot').put({helloooo: 'worlddddddddd'});
}

export function testGun() {
    if (user.is) {
        user.get('eXET').put('Hello World from app!')
        // gun.get('pub/' + user.is?.pub).get('testando').put("blabla");
    } else {
        console.log("User not authenticated")
    }

    // app.get('jot').put({helloooo: 'worlddddddddd'});
}
