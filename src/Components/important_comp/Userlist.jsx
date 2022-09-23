import { Box } from '@mui/material'
import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import Checkbox from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';


const Userlist = (props) => {
    let [Color, setColor] = useState(false)

    const handleChange = (event) => {
        setColor(event.target.checked);
    };

    
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <Box width='70%' height='60px' borderRadius='6px' style={{ backgroundColor: Color === true ? '#7A52B3' : 'black' }} margin='0px auto' marginTop='15px' display='flex' justifyContent='space-between' padding='10px'>
            <Box display='flex' alignItems='center' gap='5px'>
                <Checkbox
                    checked={Color}
                    onChange={handleChange} sx={{ color: 'white' }} {...label} icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                <span style={{ color: 'white', fontSize: '18px' }}>{props.User.name}</span>
            </Box>
            <Box display='flex' alignItems='center' gap='20px'>
                <ClearIcon onClick={() => props.handleSubmit(props.User.id)} sx={{ cursor: 'pointer', color: 'white' }} />
            </Box>
        </Box>
    )
}

export default Userlist