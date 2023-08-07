import React, {useContext} from "react";
import ReactDOM from "react-dom/client";
//import MySuperComponent from "../../components/MySuperComponent";
import {Button, Platform, Text} from 'react-native';
import useGUNWeb from '../../../../features/auth/utils/useGUNWeb';
import authenticateUser from "../../../../features/auth/services/authenticateUser";
import createUser from "../../../../features/auth/services/createUser";
// import Gun from "gun";
// import 'gun/sea.js'
// import 'gun/lib/radix'
// import 'gun/lib/radisk'
// import 'gun/lib/store'
// import 'gun/lib/rindexed'
// import 'gun/lib/webrtc'
// import 'gun/nts'
// import AsyncStorage from "@react-native-community/async-storage"
// import asyncStore from 'gun/lib/ras'
const {gun, user, SEA} = useGUNWeb()

async function testUsrLogin() {
    await authenticateUser(gun, user, SEA, "usuarioaleatorioteste045", "testepasswordaleatorio")
        .then(usr => {
            console.log("Usuário autenticado com sucesso!", usr)
            console.log("Pubkey do usuário", usr.is?.pub)
        })
        .catch(err => {
            console.log("Deu erro!", err)
        })
}

async function _createUser() {
    await createUser(gun, user, SEA, "usuarioaleatorioteste045", "testepasswordaleatorio")
        .then(usr => {
            console.log("Usuário criado com sucesso!", usr);
        })
        .catch(err => {
            console.log("Deu erro!", err);
        });
}

async function sendMessage() {
    console.log("Enviando mensagem...")
    const otherUserPubKey = '9Ps03QtRTWgkfs2VERZAlKVTAYbBnOX3RTjnhUjsSGs.7ErnHHq9byGNf2FSnvd9WaDDhF_8xE1zwzTCnZZVez4';
    const certificate = await gun.user(otherUserPubKey).get('certs/'+gun.user().is?.pub).then()
    console.log("Certificado", certificate)
    console.log("Enviando mensagem")
    gun.user(otherUserPubKey).get('eXET').put("Olá teste!", null, {opt: {cert: certificate}})
    console.log("Mensagem Enviada!")
}

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Button onPress={() => testUsrLogin()} title='login GunJS' />
        <Button onPress={() => _createUser()} title={'Create User '} />
        <Button onPress={() => sendMessage()} title='sendMessage GunJS' />
        <Text>Hello!!</Text>
    </React.StrictMode>
);
