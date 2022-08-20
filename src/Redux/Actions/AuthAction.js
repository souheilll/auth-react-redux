import { Log_In, Log_Out } from "../Types";

export const logIn = (user, navigate) => {
    return {
        type: Log_In,
        payload: { user, navigate }
    }
};

export const logOut = (navigate) => {
    console.log('lauched')
    console.log({ navigate })
    return {
        type: Log_Out,
        payload: { navigate }
    }
}
