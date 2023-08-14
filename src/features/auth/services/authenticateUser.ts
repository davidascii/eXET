import {IGunUserInstance} from 'gun/types/sea';
import {IGunInstance} from 'gun/types/gun';
import {ISEA} from 'gun/types/sea';
import userUpdateContacts from './userUpdateContacts';

async function authenticateUser(gun: IGunInstance, user: IGunUserInstance, SEA: ISEA, usr: string, pwd: string) {

    return new Promise<IGunUserInstance>((successfulLogin, rejectedLogin) => {
        if (user.is) {
            return rejectedLogin('Usuário já está autenticado!');
        }

        user.auth(usr, pwd, async (usrAuthResponse) => {
            // @ts-ignore
            if (usrAuthResponse?.err) {
                // @ts-ignore
                return rejectedLogin(usrAuthResponse.err);
            } else {
                await userUpdateContacts(user, SEA)
                    .then((_) => {
                        return successfulLogin(user);
                    })
                    .catch((err) => {
                        return rejectedLogin(err);
                    });

                user.get('name').put('testando');
            }
        });
    });
}

export default authenticateUser;
