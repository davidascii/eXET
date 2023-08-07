import Gun from 'gun/gun';
import SEA from 'gun/sea';

const getGUN = (gunOptions: object) => {
    const gun = Gun({
        peers: ['http://192.168.0.88:8000/gun'],
        ...gunOptions,
    });

    const user = gun.user();

    return { gun, user, SEA };
};

export default getGUN;
