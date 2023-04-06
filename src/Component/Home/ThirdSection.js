import { Container } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
    height: 150px;
    width: 950px;
    background-color: white;
    font-size: 52px;
    margin-top: -75px;
    font-weight: bolder;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #373a3c;
`

const ThirdSection = () => {
    return (
        <Container maxWidth="lg" sx={{ padding: '3rem', display: "flex", flexDirection: "column", alignItems: "center" }}>
            <img src='https://kaicoffee.vn/wp-content/uploads/2021/10/Place_Website_Cover_LNY2021-copy-copy.jpg' />
            <Title>STAY HEALTHY, STAY SAFE!</Title>
        </Container>
    )
}

export default ThirdSection