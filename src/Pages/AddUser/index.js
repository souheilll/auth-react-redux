import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addNewUser } from '../../Redux/Actions/UserAction';



function AddUser() {
    const [newUser, setNewUser] = useState('');
    const dispatch = useDispatch();
    const handleChange = (e) => {
        setNewUser(e.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addNewUser(newUser));
        setNewUser('')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' onChange={handleChange} value={newUser} />
                <Button type='submit' variant="outline-primary">submit </Button>
            </form>
        </div>
    )
}

export default AddUser