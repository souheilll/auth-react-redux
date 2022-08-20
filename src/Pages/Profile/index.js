import React from 'react'
import { useSelector } from 'react-redux'

function Profile() {
    const profile = useSelector(state => state.AuthReducer)
    console.log(profile)
    console.log(profile.user.email)
    return (
        <div>
            <h1> {profile.user.email}</h1>
        </div>
    )
}

export default Profile