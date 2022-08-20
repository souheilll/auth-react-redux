import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Header.css'
import { useSelector, useDispatch } from 'react-redux'
import { logOut } from '../../Redux/Actions/AuthAction'

import { Button } from 'react-bootstrap'

function Header() {
    const state = useSelector(state => state.AuthReducer)
    console.log(state)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleClick = () => {
        dispatch(logOut(navigate))

    }
    return (
        <div className='header'>
            <div >

                {state.role === 1 && state.connect === true && <div className='link'>
                    <Link className='link-control' to='/dashboard'>go to dashboard</Link>
                    <Link className='link-control' to='/add-user'>Add User</Link>
                    <Button onClick={handleClick} variant="outline-danger"> LogOut</Button>
                </div>
                }

                {state.role === 0 && state.connect === true && <div className='link'>
                    <Link className='link-control' to='/add-post'> AddPost</Link>

                </div>}

            </div>

        </div >
    )
}

export default Header