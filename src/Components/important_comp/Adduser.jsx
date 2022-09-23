import { Box, Button } from '@mui/material'
import React from 'react'
import Input from '@mui/material/Input';

const Adduser = (props) => {

    return (
        <Box margin='0px auto' display='flex' alignItems='center' justifyContent='center' gap='10px' width='100%' marginTop='10px'>
            <Input onChange={(e) => props.setUser(e.target.value)} />
            <Button onClick={() => props.onSubmit()} sx={{ height: '40px', width: '80px', bgcolor: '#4B90FF', color: 'white', "&:hover": 'blue' }}>Add</Button>
        </Box>
    )
}

export default Adduser