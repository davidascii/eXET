export const initalState = {
    name: 'David',
};

const authReducer = (state: any, action: any) => {
    const { type, payload } = action;

    switch (type) {
    case 'LOGIN':
        console.log('AUTH ACTION CALLED. Payload:', payload);

        return {
            ...state,
            testName: payload.testName,
        };
    default:
        throw new Error(`No case for type ${type} found in authReducer.`);
    }
};

export default authReducer;
