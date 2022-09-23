import React from 'react'
import { Box } from '@mui/system'
import { useSelector } from 'react-redux'


const Header = () => {
    const state = useSelector(state => state.users.data)
    return (
        <Box width='100%' height='50px' bgcolor='gray' marginTop='50px' textAlign='center' display='flex' alignItems='center' justifyContent='center'>
            <span style={{ color: 'white', fontSize: '30px' }}>Todos: {state.length}</span>
        </Box>
    )
}

export default Header