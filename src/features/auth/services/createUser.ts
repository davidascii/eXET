import {IGunUserInstance} from 'gun/types/sea';
import {IGunInstance} from 'gun/types/gun';
import {ISEA} from 'gun/types/sea';

async function createUser(gun: IGunInstance, user: IGunUserInstance, SEA: ISEA, usr: string, pwd: string) {

    return new Promise<string>((successfulLogin, rejectedLogin) => {
        user.create(usr, pwd, (usrCreateResponse) => {
            if (usrCreateResponse?.err) {
                return rejectedLogin(usrCreateResponse.err);
            } else {
                // user.get('name').put('David');
                return successfulLogin(usrCreateResponse.pub);
            }
        });
    });
}

export default createUser;
