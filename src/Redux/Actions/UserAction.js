import { Add_User } from "../Types";

export const addNewUser = (newUser) => {
    return {
        type: Add_User,
        payload: newUser,
    }
}