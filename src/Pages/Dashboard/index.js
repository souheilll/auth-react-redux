import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../Components/Card/Card'


function Dashboard() {
    const updateDashboard = useSelector(state => state.UserReducer)
    console.log(updateDashboard)
    return (
        <div>
            {updateDashboard.map(el => <Card el={el} />)}

        </div>
    )
}

export default Dashboard