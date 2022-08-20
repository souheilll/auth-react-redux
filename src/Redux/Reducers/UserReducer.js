import { Add_User } from "../Types"

const UserReducer = (state = [], action) => {
    console.log(state,action)
    switch (action.type) {
        case Add_User:
            return [...state, action.payload];
        default: return state
    }
}
export default UserReducer