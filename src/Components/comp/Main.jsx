import React, { useEffect, useState } from 'react'
import Header from './Header'
import { Container } from '@mui/system'
import Adduser from '../important_comp/Adduser'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, fetchUsers, removeUser } from '../store/Userthunk'
import Userlist from '../important_comp/Userlist'


const Main = () => {
    let [user, setUser] = useState('')
    const arr = useSelector(state => state.users.data)
    const dispatch = useDispatch()


    let onSubmit = () => {
        if (user.length > 0) {
            console.log(user);
            dispatch(addUser({ id: Date.now(), name: user}))
        }
    }


    let handleSubmit = (id) => {
        dispatch(removeUser({ id }))
    }

    useEffect(() => {
        if (arr.length === 0) {
            dispatch(fetchUsers())
        }
    }, [])

    return (
        <>
            <Header />
            <Container maxWidth='mx' sx={{ bgcolor: 'white', height: '700px', display: 'flex', flexDirection: 'column' }}>
                <Adduser setUser={setUser} onSubmit={onSubmit} />
                {
                    arr.map(item => <Userlist key={item.id} User={item} handleSubmit={handleSubmit} />)
                }
            </Container>
        </>
    )
}

export default Main