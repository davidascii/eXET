import {IGunUserInstance} from 'gun/types/sea';
import {ISEA} from 'gun/types/sea';

async function userUpdateContacts(user: IGunUserInstance, SEA: ISEA, authorizePubKeys?: [string]) {
    let pubKeysToAuthorize: [string] | [];

    if (authorizePubKeys == null) {
        // TODO Fetch na lista de PUBLIC KEYS dos usuários que serão os "contatos" do usuário logado
        pubKeysToAuthorize = ["ioP0mQuaIR_Aay9oOGgzDv7a5bt2aVww_beBKtAnmio.mtTtveOxl4fAEr7LZlyguWmDjOdnlmCCPYWCe-MdCGI"]
    } else {
        pubKeysToAuthorize = authorizePubKeys;
    }

    return new Promise<string>((successfulUpdatedContacts, error) => {
        if (pubKeysToAuthorize.length === 0) {
            return successfulUpdatedContacts("There is no pubkey to authorize!");
            // return error("There is no pubkey to authorize!");
        }

        for (let pubKey of pubKeysToAuthorize) {

            const doesUserAlreadyHasCertStored = new Promise<boolean>((_success, _error) => {
                user.get('certs/' + pubKey, (ack) => {
                    if (ack.err) {
                        return _error(ack.err);
                    } else {
                        _success(!(ack.put === undefined));
                    }
                });
            });

            doesUserAlreadyHasCertStored
                .then(async (it)=> {
                    if (!it) {
                        // TODO Verificar qual é o lugar que o pubKey (usuário a ser adicionado) quer escrever
                        // FIXME REMOVE DEFAULT eXET value
                        const cert = await SEA.certify(pubKey, {'#': {'*': 'eXET'}}, user._.sea);

                        user.get('certs/' + pubKey).put(cert);

                        // FIXME remove log
                        console.log(`Adicionando certificado ${cert} para usuário ${pubKey}`);
                        return successfulUpdatedContacts(`Adicionando certificado ${cert} para usuário ${pubKey}`);
                    } else {
                        // FIXME remove log
                        console.log('Usuário já possui um certificado!');
                        return successfulUpdatedContacts('Usuário já possui um certificado!');
                    }
                })
                .catch(err => {
                    return error(err);
                });
        }
    });
}

export default userUpdateContacts;
