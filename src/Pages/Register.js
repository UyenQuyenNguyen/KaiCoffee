import * as React from 'react';
import { CircularProgress } from '@mui/material';
import styled from 'styled-components';
import BoxForm from '../Component/Register/BoxForm';



const Register = (props) => {
    const { theme } = props;
    return (
        <div className='wrapper' style={{ backgroundColor: theme.palette.background.dark }} >
            <BoxForm theme={theme}/>
        </div>
    )
}   


export default Register;