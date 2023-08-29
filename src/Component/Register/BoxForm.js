import * as React from 'react';
import styled from 'styled-components';
import Form from './Form';
import { Box } from '@mui/material';

const BoxForm = (props) =>{
    const  {theme} = props;
    const Main = styled.div`
    width: 65vw;
    height: 70vh;
    display: flex;
    justify-content: center;
    padding: 4px;
    background-color: ${props => props.theme.palette.background.default};
    box-shadow: rgba(0, 0, 0, 0.15) 20px 20px 5px; 
`

    return (
        <Main theme={theme}>
            <Box
                component="img"
                sx={{
                    width: '60%',
                    objectFit: 'cover',
                }}
                alt="register"
                src="/images/Register.jpg"
            />
        <Form theme={theme}/>
        </Main>
    )
}

export default BoxForm
