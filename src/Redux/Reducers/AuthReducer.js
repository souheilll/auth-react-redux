import { Log_In, Log_Out } from '../Types'
const AuthReducer = (state = { connect: false }, action) => {
    console.log(state)
    switch (action.type) {

        case Log_In:
            action.payload.navigate('/profile')
            if (action.payload.user.email === 'admin@gmail.com') {
                return { ...state, connect: true, role: 1, user: action.payload.user }

            }
            else {
                return { ...state, connect: true, role: 0, user: action.payload.user }
            }
        case Log_Out:
            action.payload.navigate('/')
            return { ...state, user: null, connect: false }

        default: return state
    }
}

export default AuthReducer